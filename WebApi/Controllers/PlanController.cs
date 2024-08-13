using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Domain.Interfaces;
using Core.Domain.Entities;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanController : ControllerBase
    {
        private readonly IPlanRepository _planService;

        public PlanController(IPlanRepository planService)
        {
            _planService = planService;
        }

        [HttpGet("/GetAllPlans")]
        public async Task<IActionResult> GetAllPlans()
        {
            try
            {
                var plans = await _planService.GetAllPlansAsync();
                return Ok(plans);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpGet("/GetPlanById/{id}")]
        public async Task<IActionResult> GetPlanById(int id)
        {
            try
            {
                var plan = await _planService.GetPlanByIdAsync(id);
                return Ok(plan);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpPost("/AddPlan")]
        public async Task<IActionResult> AddPlan(Plan plan)
        {
            try
            {
                await _planService.AddPlanAsync(plan);
                return Ok("Plan added successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding plan to the database");
            }
        }

        [HttpPut("/UpdatePlan")]
        public async Task<IActionResult> DeletePlan(int id)
        {
            try
            {
                await _planService.DeletePlanAsync(id);
                return Ok("Plan deleted successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting plan from the database");
            }
        }

    }
}
