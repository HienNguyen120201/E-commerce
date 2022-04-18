using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using EcommerceAPI.Data.Entities;

namespace EcommerceAPI.Data.Configurations
{
    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable("TAG");
            builder.HasKey(bd => new { bd.ProductId, bd.ProductTag });
            builder.HasOne(c => c.Product)
                .WithMany(c => c.Tags)
                .HasForeignKey(c => c.ProductId);
        }
    }
}
