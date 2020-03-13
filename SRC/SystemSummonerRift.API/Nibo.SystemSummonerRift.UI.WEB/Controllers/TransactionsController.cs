using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Nibo.SystemSummonerRift.UI.WEB.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : Controller
    {
        private readonly ITransactionService _transactionSevice;
        private readonly IOfxFileService _ofxFileService;

        public TransactionsController(ITransactionService transactionService, IOfxFileService ofxFileService)
        {
            _transactionSevice = transactionService;
            _ofxFileService = ofxFileService;
        }

        // GET: Transactions
        [HttpGet("list")]
        public ActionResult GetAll()
        {
            return Json(_transactionSevice.GetAll());
        }

        [HttpPost("upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadFiles(List<IFormFile> files)
        {   
          var ofxFiles = await _ofxFileService.Save(files, Path.GetFullPath("Ofx"));
          var model = _ofxFileService.ImportFile(ofxFiles.ToList());
            return Json(_transactionSevice.GetAll());
        }
    }
}
