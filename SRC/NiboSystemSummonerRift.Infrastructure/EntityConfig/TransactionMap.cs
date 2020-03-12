using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NiboSystemSummonerRift.ApplicationCore.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace NiboSystemSummonerRift.Infrastructure.EntityConfig
{
    class TransactionMap : IEntityTypeConfiguration<TransactionEntity>
    {
        public void Configure(EntityTypeBuilder<TransactionEntity> builder)
        {
            builder
                .HasKey(t => t.id_transaction);

            builder
                .Property(t => t.PaymentType)
                .HasColumnType("varchar(25)")
                .IsRequired();

            builder
                 .Property(t => t.Date)
                 .HasColumnType("Date")
                 .IsRequired();

            builder
                 .Property(t => t.Value)
                 .HasColumnType("NUMERIC(7,2)")
                 .IsRequired();

            builder
                 .Property(t => t.Description)
                 .HasColumnType("varchar(255)")
                 .IsRequired();

        }
    }
}
