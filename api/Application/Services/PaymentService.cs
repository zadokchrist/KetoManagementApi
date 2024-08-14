using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Dtos;
using Core.Domain.Entities;
using Core.Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Application.Services
{
    public class PaymentService : IPaymentRepository
    {
        private readonly ApplicationDbContext _context;

        public PaymentService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddPayment(PaymentDto payment)
        {

            //mapping the payment dto to the payment entity
            var pymt = new Payment
            {
                PatientId = payment.PatientId,
                PlanId = payment.PlanId,
                TranRef = payment.TranRef,
                Amount = payment.Amount,
                PaymentDate = payment.PaymentDate
            };


            await _context.Payments.AddAsync(pymt);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Payment>> GetPayments()
        {
            var payments = await _context.Payments
                .Include(p => p.Patient)
                .ThenInclude(p => p.Subscriptions)
                .Include(p => p.Plan)
                
                .ToListAsync();

            return payments;
        }

    }
}
