using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.Infrastructure.Repository
{
    public class TransactionRepository : SSRRepository<TransactionEntity>, ITransactionRepository
    {

        public TransactionRepository(SSRContext dbContext) : base(dbContext)
        {
      
        }

    }
}
