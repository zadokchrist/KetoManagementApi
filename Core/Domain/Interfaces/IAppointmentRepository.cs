using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Interfaces
{
    public interface IAppointmentRepository
    {
        public Task AddAppointment(Appointment appointment);
        public Task<IEnumerable<Appointment>> GetAppointments();
    }
}
