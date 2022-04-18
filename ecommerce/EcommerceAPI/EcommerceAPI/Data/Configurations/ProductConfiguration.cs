using EcommerceAPI.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EcommerceAPI.Data.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("PRODUCT");
            builder.HasKey(product => product.ProductId);
            builder.Property(product => product.Name);
            builder.Property(product => product.Type);
            builder.Property(product => product.UnitPrice);
            builder.Property(product => product.Description);
            builder.Property(product => product.Status);
            builder.Property(product => product.ImgUrl1);
            builder.Property(product => product.ImgUrl2);
            builder.Property(product => product.ImgUrl3);
            builder.Property(product => product.OldPrice);
            builder.Property(product => product.Rating);
        }
    }
}
