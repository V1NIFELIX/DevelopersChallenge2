using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository
{
    public interface IRepository<TEntity, TSelector> where TEntity : class
    {
        TEntity Add(TEntity entity);
        void Update(TEntity entity);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Get(TSelector seletor);
        TEntity GetById(int id);
        void Delete(TEntity entity);

    }
}
