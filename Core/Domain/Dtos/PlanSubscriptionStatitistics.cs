using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Dtos
{
    public class PlanSubscriptionStatitistics
    {
        public int PlanId { get; set; }
        public string PlanName { get; set; }
        public int TotalSubscriptions { get; set; }
        public int ActiveSubscriptions { get; set; }
        public int InactiveSubscriptions { get; set; }
        public decimal AmountGenerated { get; set; }
    }
}
