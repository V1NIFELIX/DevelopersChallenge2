using Microsoft.EntityFrameworkCore;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using NiboSystemSummonerRift.Infrastructure.EntityConfig;
using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.Infrastructure.Data
{
    public class SSRContext : DbContext
    {
        public SSRContext(DbContextOptions<SSRContext> options) : base(options)
        {

        }

        public DbSet<TransactionEntity> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TransactionEntity>().ToTable("Transactions");

            modelBuilder.ApplyConfiguration(new TransactionMap());
        }
    }
}
