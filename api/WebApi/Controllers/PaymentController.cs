using Core.Domain.Dtos;
using Core.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepository _paymentrepository;

        public PaymentController(IPaymentRepository paymentrepository)
        {
            _paymentrepository = paymentrepository;
        }

        [HttpPost("/AddPayment")]
        public async Task<IActionResult> AddPayment(PaymentDto payment)
        {
            try
            {
                await _paymentrepository.AddPayment(payment);
                return Ok("Payment added successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding payment to the database");
            }
        }

        [HttpGet("/GetPayments")]
        public async Task<IActionResult> GetPayments()
        {
            try
            {
                var payments = await _paymentrepository.GetPayments();
                return Ok(payments);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }
    }
}
