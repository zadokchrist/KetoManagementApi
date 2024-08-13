using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Dtos
{
    public class PatientDto
    {
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
        public string Attachment { get; set; }
        public int PlanId { get; set; }
        public DateTime PlanStartDate { get; set; }
        public DateTime PlanEndDate { get; set; }
    }
}
