using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Dtos
{
    public class PaymentDto
    {
        public int PatientId { get; set; }
        public int PlanId { get; set; }
        public string TranRef { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
