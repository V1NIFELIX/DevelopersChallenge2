using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using System.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Text;
using NiboSystemSummonerRift.Infrastructure.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using NiboSystemSummonerRift.ApplicationCore.Entity;

namespace NiboSystemSummonerRift.Infrastructure.Repository
{
    public class SSRRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {

        protected readonly SSRContext _dbContext;

        public SSRRepository(SSRContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual TEntity Add(TEntity entity)
        {
            _dbContext.Set<TEntity>().Add(entity);
            _dbContext.SaveChanges();
            return entity;
        }

        public virtual void Update(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicado)
        {
            return _dbContext.Set<TEntity>().Where(predicado).AsEnumerable();
        }

        public virtual TEntity GetById(int id)
        {
            return _dbContext.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>().AsEnumerable();
        }

        public virtual void Delete(TEntity entity)
        {
            _dbContext.Set<TEntity>().Remove(entity);
            _dbContext.SaveChanges();
        }


    }
}
