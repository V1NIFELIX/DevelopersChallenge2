using AutoMapper;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using NiboSystemSummonerRift.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NiboSystemSummonerRift.Infrastructure.Repository
{
    public class TransactionRepository : SSRRepository<TransactionEntity, TransactionSelector>, ITransactionRepository
    {

        public TransactionRepository(SSRContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
      
        }

        public override IEnumerable<TransactionEntity> Get(TransactionSelector seletor)
        {
            IQueryable<TransactionEntity> query = this._dbContext.Transactions;

            query = this.CreateParameters(seletor, query);

            return query.Select(r => this._mapper.Map<TransactionEntity>(r));
        }

        public override IQueryable<TransactionEntity> CreateParameters(TransactionSelector seletor, IQueryable<TransactionEntity> query)
        {
            if (seletor.PaymentType.Length > 0)
                query = query.Where(l => l.PaymentType == seletor.PaymentType);

            return query;
        }
    }
}
