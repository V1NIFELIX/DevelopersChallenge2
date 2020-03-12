using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using NiboSystemSummonerRift.ApplicationCore.Interfaces.Services;
using System;
using System.Collections.Generic;
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
    }
}
