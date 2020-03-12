using NiboSystemSummonerRift.ApplicationCore.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Interfaces.Services
{
    public interface ITransactionService
    {
        TransactionEntity Add(TransactionEntity entity);

        IEnumerable<TransactionEntity> GetAll();

    }
}
