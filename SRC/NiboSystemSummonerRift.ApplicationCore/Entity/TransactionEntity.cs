using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Entity
{
    public class TransactionEntity
    {

        public TransactionEntity()
        {

        }

        [Key]
        public int id_transaction { get; set; }
        public String PaymentType { get; set; }
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public String Description { get; set; }

    }
}
