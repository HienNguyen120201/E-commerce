using EcommerceAPI.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EcommerceAPI.Data.Configurations
{
    public class BillDetailConfiguration : IEntityTypeConfiguration<BillDetail>
    {
        public void Configure(EntityTypeBuilder<BillDetail> builder)
        {
            builder.ToTable("BILL_DETAIL");
            builder.HasKey(bd => new { bd.BillId, bd.ProductId,bd.Color,bd.Size });
            builder.Property(bd => bd.ProductName);
            builder.Property(bd => bd.Color);
            builder.Property(bd => bd.Size);
            builder.Property(bd => bd.UnitPrice).IsRequired();
            builder.Property(bd => bd.Quantity).IsRequired();
            builder.Property(bd => bd.TotalPrice).IsRequired();
            builder.HasOne(bd => bd.Bill).WithMany(k => k.BillDetails).HasForeignKey(bd => bd.BillId);
            builder.HasOne(bd => bd.Product).WithMany(k => k.BillDetails).HasForeignKey(bd => bd.ProductId);
        }
    }
}
