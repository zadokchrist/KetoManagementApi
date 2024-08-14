using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
    public class Patient
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string WhatsappNumber { get; set; }
        public string Email { get; set; }
        public string HomeAddress { get; set; }
        public string WorkAddress { get; set; }
        public string CurrentBodyWeight { get; set; }
        public string WeightGoal { get; set; }
        public string Allergies { get; set; }
        public string Observations { get; set; }
        public string SurgicalHistory { get; set; }
        public string Medications { get; set; }

        [ForeignKey("Subscriptions")]
        public int? SubscriptionId { get; set; }

        public string Attachment { get; set; }

        [ForeignKey("Plan")]
        public int PlanId { get; set; }

        public Plan? Plan { get; set; }
        public Subscriptions? Subscriptions { get; set; }

    }
}
