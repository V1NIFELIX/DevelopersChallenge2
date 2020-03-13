using Microsoft.AspNetCore.Http;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NiboSystemSummonerRift.ApplicationCore.Interfaces.Services
{
    public interface IOfxFileService
    {
        IEnumerable<TransactionEntity> ImportFile(List<string> files);
        Task<IEnumerable<string>> Save(List<IFormFile> files, string path);
    }
}
