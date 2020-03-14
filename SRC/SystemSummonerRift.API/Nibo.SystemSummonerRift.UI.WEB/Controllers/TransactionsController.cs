using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Services;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;

namespace Nibo.SystemSummonerRift.UI.WEB.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : Controller
    {
        private readonly IMapper _mapper;
        private readonly ITransactionService _transactionSevice;
        private readonly IOfxFileService _ofxFileService;

        public TransactionsController(ITransactionService transactionService, IOfxFileService ofxFileService, IMapper mapper)
        {
            _transactionSevice = transactionService;
            _ofxFileService = ofxFileService;
            _mapper = mapper;

        }

        // GET: Transactions
        [HttpGet("list")]
        public ActionResult GetAll([FromBody]TransactionSelector seletor)
        {
            return Json(_mapper.Map<IEnumerable>(_transactionSevice.Get(seletor)));

        }

        [HttpPost("upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadFiles(List<IFormFile> files)
        {   
          var ofxFiles = await _ofxFileService.Save(files, Path.GetFullPath("Ofx"));
          var model = _ofxFileService.ImportFile(ofxFiles.ToList());
          return View();
        }
    }
}
