using Microsoft.AspNetCore.Http;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Services;
using NiboSystemSummonerRift.ApplicationCore.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace NiboSystemSummonerRift.ApplicationCore.Services
{
    public class OfxFileService : IOfxFileService
    {
        private readonly ITransactionRepository _transactionRepository;
        public OfxFileService(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public IEnumerable<TransactionEntity> ImportFile(List<string> files)
        {
            if (files.Any())
            {
                var listTransactions = _transactionRepository.GetAll();

                foreach (var ofxFile in files)
                {
                    var lines = File.ReadAllLines(ofxFile);
                    var fileOfx = Serializer(ParseToXml(lines));

                    foreach (var item in fileOfx.Transactions)
                    {
                        var transactionEntity = new TransactionEntity
                        {
                            Date = new DateTime(int.Parse(item.Date.Substring(0, 4)), int.Parse(item.Date.Substring(4, 2)), int.Parse(item.Date.Substring(6, 2))),
                            Description = item.Description.Trim(),
                            PaymentType = (item.PaymentType.Trim()),
                            Value = Convert.ToDecimal(item.Value.Trim().Replace(".", ","))
                        };

                        var resultFile = _transactionRepository.Find(
                        l => l.Description.Equals(transactionEntity.Description)
                        && l.Date.Equals(transactionEntity.Date.ToShortDateString())
                        && l.PaymentType.Equals(transactionEntity.PaymentType)
                        && l.Value.Equals(transactionEntity.Value));

                        var resultBd = listTransactions.Where(
                        l => l.Date.Equals(transactionEntity.Date)
                        && l.Description.Equals(transactionEntity.Description)
                        && l.Value.Equals(transactionEntity.Value));


                        if (!resultBd.Any() && !resultFile.Any()) {
                            _transactionRepository.Add(transactionEntity);
                        }
                    }
                }
            }
            return _transactionRepository.GetAll();
        }


        public async Task<IEnumerable<string>> Save(List<IFormFile> files, string path)
        {
            var ofxFiles = new List<string>();

            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    using (var stream = new FileStream(Path.Combine(path, formFile.FileName), FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
                ofxFiles.Add(Path.Combine(path, formFile.FileName));
            }
            return ofxFiles;
        }

        private string ParseToXml(string[] lines)
        {
            var tags = new string[] { "<TRNTYPE>", "<DTPOSTED>", "<TRNAMT>", "<MEMO>" };
            var xml = new StringBuilder();

            foreach (var line in lines)
            {
                if (line.Contains("BANKTRANLIST") || line.Contains("STMTTRN>"))
                {
                    xml.Append(line);
                }

                if (tags.Any(line.Contains))
                {
                    xml.Append(line);
                    xml.Append("</" + line.Substring(1, line.IndexOf(">")));
                }
            }
            return xml.ToString();
        }

        private OfxFileModel Serializer(string xml)
        {
            var serializer = new XmlSerializer(typeof(OfxFileModel));
            return (OfxFileModel)(serializer.Deserialize(new StringReader(xml)));
        }
    }
}
