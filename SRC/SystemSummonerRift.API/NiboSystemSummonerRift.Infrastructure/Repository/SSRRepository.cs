using NiboSystemSummonerRift.ApplicationCore.Interfaces.Repository;
using System.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Text;
using NiboSystemSummonerRift.Infrastructure.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.ApplicationCore.Selectors;
using AutoMapper;

namespace NiboSystemSummonerRift.Infrastructure.Repository
{
    public abstract class SSRRepository<TEntity, TSelector> : IRepository<TEntity, TSelector> where TEntity : class
    {
        protected readonly IMapper _mapper;
        protected readonly SSRContext _dbContext;

        public SSRRepository(SSRContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
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


        public virtual TEntity GetById(int id)
        {
            return _dbContext.Set<TEntity>().Find(id);
        }

        public virtual IEnumerable<TEntity> Get(TSelector seletor)
        {
            IQueryable<TEntity> query = this.CreateQuery();

            query = this.CreateParameters(seletor, query);

            return query;
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

        public virtual IQueryable<TEntity> CreateQuery()
        {
            return this._dbContext.Set<TEntity>().AsNoTracking().AsQueryable();
        }

        public abstract IQueryable<TEntity> CreateParameters(TSelector seletor, IQueryable<TEntity> query);

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicado)
        {
            return _dbContext.Set<TEntity>().Where(predicado).AsEnumerable();
        }
    }
}
