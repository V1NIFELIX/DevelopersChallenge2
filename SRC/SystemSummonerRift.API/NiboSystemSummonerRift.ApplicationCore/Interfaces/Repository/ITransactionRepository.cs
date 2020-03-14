using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository
{
    public interface ITransactionRepository : IRepository<TransactionEntity, TransactionSelector>
    {
    }
}
