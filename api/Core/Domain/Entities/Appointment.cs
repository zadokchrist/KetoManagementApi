using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
    public class Appointment
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender  { get; set; }
        public string WhatsappNumber { get; set; }
        public string Email { get; set; }
        public string HomeAddress { get; set; }
        public string WorkAddress { get; set; }
        public string NatureOfAppointment { get; set; }
        public DateOnly AppointmentDate { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string LocationOfAppointment { get; set; }
        public string AdditionalNotes { get; set; }
        public string? Status { get; set; }

    }
}
