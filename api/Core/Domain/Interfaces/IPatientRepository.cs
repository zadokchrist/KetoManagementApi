using Core.Domain.Dtos;
using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Interfaces
{
    public interface IPatientRepository
    {
        public Task<Patient> GetPatientByIdAsync(int id);
        public Task<IEnumerable<Patient>> GetAllPatientsAsync();
        public Task AddPatientAsync(PatientDto patient);
        public Task UpdateSubscription(int patid);
        public Task<IEnumerable<PlanSubscriptionStatitistics>> GetSubscriptionStatistics();
    }
}
