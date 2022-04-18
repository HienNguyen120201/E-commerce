using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class CartDetail
    {
        public string User { get; set; }
        public string PaymentMethod { get; set; }
        public string UserName { get; set; }
        public string Thon { get; set; }
        public string Xa { get; set; }
        public string Huyen { get; set; }
        public string Tinh { get; set; }
        public string PhoneNumber { get; set; }
        public int BillId { get; set; }
        public int ProductId { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string Name { get; set; }
        public int UnitPrice { get; set; }
        public int Quantity { get; set; }
        public int TotalPrice { get; set; }
    }
}
