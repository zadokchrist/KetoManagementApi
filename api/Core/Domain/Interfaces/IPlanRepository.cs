using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Interfaces
{
    public interface IPlanRepository
    {
        Task<IEnumerable<Plan>> GetAllPlansAsync();
        Task<Plan> GetPlanByIdAsync(int id);
        Task AddPlanAsync(Plan plan);
        Task UpdatePlanAsync(Plan plan);
        Task DeletePlanAsync(int id);
    }
}
