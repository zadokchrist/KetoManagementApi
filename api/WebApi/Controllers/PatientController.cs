using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Domain.Interfaces;
using Core.Domain.Entities;
using Core.Domain.Dtos;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientRepository _patientService;

        public PatientController(IPatientRepository patientService)
        {
            _patientService = patientService;
        }

        [HttpGet("/GetAllPatients")]
        public async Task<IActionResult> GetAllPatients()
        {
            try
            {
                var patients = await _patientService.GetAllPatientsAsync();
                return Ok(patients);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpGet("/GetPatientById/{id}")]
        public IActionResult GetPatientById(int id)
        {
            try
            {
                var patient = _patientService.GetPatientByIdAsync(id);
                return Ok(patient);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpPost("/AddPatient")]
        public async Task<IActionResult> AddPatient(PatientDto patient)
        {
            try
            {
                await _patientService.AddPatientAsync(patient);
                return Ok("Patient added successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding patient to the database");
            }
        }

        [HttpPut("/UpdateSubscription")]
        public async Task<IActionResult> UpdateSubscription(int patid)
        {
            try
            {
                await _patientService.UpdateSubscription(patid);
                return Ok("Subscription updated successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating subscription");
            }
        }

        [HttpGet("/GetSubscriptionStatistics")]
        public async Task<IActionResult> GetSubscriptionStatistics()
        {
            try
            {
                var stats = await _patientService.GetSubscriptionStatistics();
                return Ok(stats);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving subscription statistics");
            }
        }
    }
}
