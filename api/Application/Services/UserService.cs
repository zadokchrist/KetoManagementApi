using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Domain.Interfaces;
using Infrastructure.Data;
using Core.Domain.Entities; 

namespace Application.Services
{
    public class UserService : IUserRepository 
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await Task.FromResult(_context.Users);
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task UpdateUserAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            _context.Users.Remove(await GetUserByIdAsync(id));
            await _context.SaveChangesAsync();
        }

        public async Task<User> GetUserByUserNameAndPasswordAsync(string email, string pwd)
        {
            return await Task.FromResult(_context.Users.FirstOrDefault(u => u.Email == email && u.Password == pwd));
        }


    }
}
