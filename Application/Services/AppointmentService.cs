using Core.Domain.Entities;
using Core.Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class AppointmentService : IAppointmentRepository
    {
        private readonly ApplicationDbContext _context;

        public AppointmentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddAppointment(Appointment appointment)
        {
            await _context.Appointments.AddAsync(appointment);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Appointment>> GetAppointments()
        {
            var appointments = await _context.Appointments.ToListAsync();

            return appointments;
        }

    }
}
