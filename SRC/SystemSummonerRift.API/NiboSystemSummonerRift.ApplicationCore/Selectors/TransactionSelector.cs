using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Selectors
{
    public class TransactionSelector
    {
        public String PaymentType { get; set; }
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public String Description { get; set; }
    }
}
