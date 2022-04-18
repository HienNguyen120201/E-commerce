using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceAPI.Data.Entities;

namespace EcommerceAPI.Data.Configurations
{
    public class SizeConfiguration : IEntityTypeConfiguration<Size>
    {
        public void Configure(EntityTypeBuilder<Size> builder)
        {
            builder.ToTable("SIZE");
            builder.HasKey(bd => new { bd.ProductId, bd.ProductSize });
            builder.HasOne(c => c.Product)
                .WithMany(c => c.Sizes)
                .HasForeignKey(c => c.ProductId);
        }
    }
}
