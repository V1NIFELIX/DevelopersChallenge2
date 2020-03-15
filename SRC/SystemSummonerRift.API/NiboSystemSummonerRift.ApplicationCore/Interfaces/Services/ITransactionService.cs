using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Interfaces.Services
{
    public interface ITransactionService
    {
        TransactionEntity Add(TransactionEntity entity);

        IEnumerable<TransactionEntity> Get(TransactionSelector selector);
        IEnumerable<TransactionEntity> GetAll();



    }
}
