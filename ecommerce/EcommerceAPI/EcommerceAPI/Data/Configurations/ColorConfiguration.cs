using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceAPI.Data.Entities;

namespace EcommerceAPI.Data.Configurations
{
    public class ColorConfiguration : IEntityTypeConfiguration<Color>
    {
        public void Configure(EntityTypeBuilder<Color> builder)
        {
            builder.ToTable("COLOR");
            builder.HasKey(bd => new { bd.ProductId, bd.ProductColor });
            builder.HasOne(c => c.Product)
                .WithMany(c => c.Colors)
                .HasForeignKey(c => c.ProductId);
        }
    }
}
