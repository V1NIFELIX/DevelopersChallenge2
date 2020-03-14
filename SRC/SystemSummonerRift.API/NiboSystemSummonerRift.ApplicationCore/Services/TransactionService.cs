using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Services;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository _transactionRepository;
        public TransactionService(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }
        public TransactionEntity Add(TransactionEntity entity)
        {
            return _transactionRepository.Add(entity);
        }

        public IEnumerable<TransactionEntity> GetAll()
        {
            return _transactionRepository.GetAll();
        }

        public IEnumerable<TransactionEntity> Get(TransactionSelector selector)
        {
            return _transactionRepository.Get(selector);
        }
    }
}
