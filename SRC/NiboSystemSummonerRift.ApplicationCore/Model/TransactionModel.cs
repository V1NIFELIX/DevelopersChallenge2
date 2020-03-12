using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace NiboSystemSummonerRift.ApplicationCore.Model
{
    public class TransactionModel
    {
        [XmlElement("TRNAMT")]
        public string Value { get; set; }

        [XmlElement("TRNTYPE")]
        public string PaymentType { get; set; }

        [XmlElement("MEMO")]
        public string Description { get; set; }
        
        [XmlElement("DTPOSTED")]
        public string Date { get; set; }

    }
}
