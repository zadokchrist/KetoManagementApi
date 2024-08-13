using Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Plan> Plans { get; set; }

        public DbSet<Subscriptions> Subscriptions { get; set; } 
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Payment> Payments { get; set; } 
        public DbSet<Appointment> Appointments { get; set; }
    }
}
