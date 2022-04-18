using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceAPI.Data.Entities;

namespace EcommerceAPI.Data.Configurations
{
    public class FeatureConfiguration : IEntityTypeConfiguration<Feature>
    {
        public void Configure(EntityTypeBuilder<Feature> builder)
        {
            builder.ToTable("FUTURE");
            builder.HasKey(bd => new { bd.ProductId, bd.ProductFeature });
            builder.HasOne(c => c.Product)
                .WithMany(c => c.Featurs)
                .HasForeignKey(c => c.ProductId);
        }
    }
}
