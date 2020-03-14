using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Nibo.SystemSummonerRift.UI.WEB.ViewModel
{
    public class ResponseViewModel
    {
        public ResponseViewModel()
        {
            HttpStatusCode = HttpStatusCode.OK;
        }

        public ResponseViewModel(string errorMessage) => ErrorMessage = errorMessage;
        public ResponseViewModel(object data, HttpStatusCode httpStatusCode)
        {
            HttpStatusCode = httpStatusCode;
            Data = data;
        }

        public HttpStatusCode HttpStatusCode { get; set; }

        public object Data { get; set; }

        public string ErrorMessage { get; set; }

    }
}
