using Core.Domain.Entities;
using Core.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentRepository _appointmentService;

        public AppointmentsController(IAppointmentRepository appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet("/GetAppointments")]
        public async Task<IActionResult> GetAppointments()
        {
            try
            {
                var appointments = await _appointmentService.GetAppointments();
                return Ok(appointments);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpPost("/AddAppointment")]
        public async Task<IActionResult> AddAppointment(Appointment appointment)
        {
            try
            {
                await _appointmentService.AddAppointment(appointment);
                return Ok("Appointment added successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding appointment to the database");
            }
        }

    }
}
