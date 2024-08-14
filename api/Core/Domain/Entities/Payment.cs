using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
    public class Payment
    {
        public int Id { get; set; }

        [ForeignKey("Patient")]
        public int PatientId { get; set; }

        [ForeignKey("Plan")]
        public int PlanId { get; set; }
        public string TranRef { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }

        public Plan Plan { get; set; }
        public Patient Patient { get; set; }

    }
}
