using Core.Domain.Dtos;
using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Interfaces
{
    public interface IPaymentRepository
    {
        public Task AddPayment(PaymentDto payment);
        public Task<IEnumerable<Payment>> GetPayments();
    }
}
