using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class Tag
    {
        public int ProductId { get; set; }
        public string ProductTag { get; set; }
        public Product Product { get; set; }
    }
}
