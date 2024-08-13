using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Entities;
using Core.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Core.Domain.Dtos;
namespace Application.Services
{
    public class PatientService : IPatientRepository
    {
        private readonly ApplicationDbContext _context;

        public PatientService(ApplicationDbContext context)
        {
            _context = context;
        }



        public async Task AddPatientAsync(PatientDto patient)
        {
            try
            {
                // Create the patient entity
                var pat = new Patient
                {
                    Title = patient.Title,
                    FirstName = patient.FirstName,
                    LastName = patient.LastName,
                    DateOfBirth = patient.DateOfBirth,
                    MobileNumber = patient.MobileNumber,
                    Email = patient.Email,
                    Gender = patient.Gender,
                    WhatsappNumber = patient.WhatsappNumber,
                    HomeAddress = patient.HomeAddress,
                    WorkAddress = patient.WorkAddress,
                    WeightGoal = patient.WeightGoal,
                    Allergies = patient.Allergies,
                    Observations = patient.Observations,
                    SurgicalHistory = patient.SurgicalHistory,
                    Attachment = patient?.Attachment ?? "",
                    CurrentBodyWeight = patient.CurrentBodyWeight,
                    Medications = patient.Medications,
                    PlanId = patient.PlanId,
                };

                // Save the patient to the database
                _context.Patients.Add(pat);
                await _context.SaveChangesAsync();
                Console.WriteLine($"Patient saved with ID: {pat.Id}");

                // Check if the ID is generated
                if (pat.Id == 0)
                {
                    throw new Exception("Patient ID was not generated.");
                }

                // Create the subscription entity linked to the patient
                var sub = new Subscriptions
                {
                    PatientId = pat.Id,
                    PlanId = patient.PlanId,
                    StartDate = patient.PlanStartDate,
                    EndDate = patient.PlanEndDate,
                    IsActive = true
                };

                // Save the subscription to the database
                _context.Subscriptions.Add(sub);
                await _context.SaveChangesAsync();

                // Update the patient with the subscription ID
                pat.SubscriptionId = sub.Id;
                _context.Patients.Update(pat);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Log the exception and rethrow it
                Console.WriteLine($"Error occurred: {ex.Message}");
                throw;
            }
        }

        public async Task<IEnumerable<Patient>> GetAllPatientsAsync()
        {
            var patients = await _context.Patients
                .Include(p => p.Subscriptions)
                .Include(p => p.Plan)
                .ToListAsync();

            return patients;
        }

        public async Task<Patient> GetPatientByIdAsync(int id)
        {
            var patient = await _context.Patients.FindAsync(id);

            return patient;
        }

        public async Task UpdatePatientAsync(Patient patient)
        {
            _context.Patients.Update(patient);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePatientAsync(int id)
        {
            _context.Patients.Remove(await GetPatientByIdAsync(id));
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSubscription(int patid)
        {
            var subscription = await _context.Subscriptions
                                             .Where(s => s.PatientId == patid)
                                             .SingleOrDefaultAsync();

            if (subscription != null)
            {
                subscription.IsActive = !subscription.IsActive;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<PlanSubscriptionStatitistics>> GetSubscriptionStatistics()
        {
            // Fetch all subscriptions and related plans data from the database
            var subscriptions = await _context.Subscriptions
                                              .Include(s => s.Plan)  // Include the Plan to get the price
                                              .ToListAsync();

            // Perform the grouping and calculations in-memory
            var stats = subscriptions
                .GroupBy(s => s.PlanId)
                .Select(g => new PlanSubscriptionStatitistics
                {
                    PlanId = g.Key,
                    PlanName = g.First().Plan.Name,
                    TotalSubscriptions = g.Count(),
                    ActiveSubscriptions = g.Count(s => s.IsActive),
                    InactiveSubscriptions = g.Count(s => !s.IsActive),
                    AmountGenerated = g.Sum(s => s.Plan.Price)  // Sum the price of each plan
                })
                .ToList();

            return stats;
        }


        //public async Task<IEnumerable<PlanSubscriptionStatitistics>> GetSubscriptionStatistics()
        //{
        //    var stats = await _context.Subscriptions
        //        .GroupBy(s => s.PlanId)
        //        .Select(g => new PlanSubscriptionStatitistics
        //        {
        //            PlanId = g.Key,
        //            TotalSubscriptions = g.Count(),
        //            ActiveSubscriptions = g.Count(s => s.IsActive),
        //            InactiveSubscriptions = g.Count(s => !s.IsActive),
        //            AmountGenerated = g.Sum(s => GetPlanPriceAsync(s.PlanId).Result)


        //        })
        //        .ToListAsync();

        //    return stats;
        //}



        private async Task<decimal> GetPlanPriceAsync(int planid)
        {
            var plan = await _context.Plans.FindAsync(planid);

            return plan?.Price??0;
        }



    }
}
