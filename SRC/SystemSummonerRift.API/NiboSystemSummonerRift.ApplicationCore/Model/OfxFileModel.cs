using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace NiboSystemSummonerRift.ApplicationCore.Model
{
    [XmlRoot("BANKTRANLIST")]
    public class OfxFileModel
    {
        [XmlIgnore]
        public string FileName { get; set; }

        [XmlElement("STMTTRN")]
        public List<TransactionModel> Transactions { get; set; }
    }
}
