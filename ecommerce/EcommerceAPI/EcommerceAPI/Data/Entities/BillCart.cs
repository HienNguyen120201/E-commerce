using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class BillCart
    {
        public string UserName { get; set; }
        public int BillId { get; set; }
        public int productId { get; set; }
        public string size { get; set; }
        public string color { get; set; }
        public string name { get; set; }
        public int unitPrice { get; set; }
        public int quantity { get; set; }
        public int TotalPrice { get; set; }
    }
}
