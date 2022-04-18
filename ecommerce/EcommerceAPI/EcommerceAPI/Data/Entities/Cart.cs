using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceAPI.Data.Entities
{
    public class Cart
    {
        public string User{ get; set; }
        public int BillId { get; set; }
        public string PaymentMethod { get; set; }
        public int TotalPrice { get; set; }
        public string UserName { get; set; }
        public string Thon { get; set; }
        public string Xa { get; set; }
        public string Huyen { get; set; }
        public string Tinh { get; set; }
        public string PhoneNumber { get; set; }
        public Guid CustomerId { get; set; }
        public DateTime DateCreatBill { get; set; }
    }
}
