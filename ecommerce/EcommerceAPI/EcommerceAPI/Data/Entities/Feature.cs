using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class Feature
    {
        public int ProductId { get; set; }
        public string ProductFeature { get; set; }
        public Product Product { get; set; }
    }
}
