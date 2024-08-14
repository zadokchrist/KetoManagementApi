using Core.Domain.Entities;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Application.Services
{
    public class PlanService : IPlanRepository
    {
        private readonly ApplicationDbContext _context;

        public PlanService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Plan>> GetAllPlansAsync()
        {
            var plans = await _context.Plans.ToListAsync();
            return plans;
        }

        public async Task<Plan> GetPlanByIdAsync(int id)
        {
            return await _context.Plans.FindAsync(id);
        }

        public async Task AddPlanAsync(Plan plan)
        {
            await _context.Plans.AddAsync(plan);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePlanAsync(Plan plan)
        {
            _context.Plans.Update(plan);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePlanAsync(int id)
        {
            _context.Plans.Remove(await GetPlanByIdAsync(id));
            await _context.SaveChangesAsync();
        }
    }
}
