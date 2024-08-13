using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Domain.Interfaces;
using Core.Domain.Entities;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userService;

        public UserController(IUserRepository userService)
        {
            _userService = userService;
        }

        [HttpGet("/GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var users = await _userService.GetAllUsersAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database"+ex.Message);
            }
            
        }

        [HttpGet("/GetUserById/{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                var user = await _userService.GetUserByIdAsync(id);
                return Ok(user);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpPost("/AddUser")]
        public async Task<IActionResult> AddUser(User user)
        {
            try
            {
                await _userService.AddUserAsync(user);
                return Ok("User added successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding user to the database");
            }
        }

        [HttpPut("/UpdateUser")]
        public async Task<IActionResult> UpdateUser(User user)
        {
            try
            {
                await _userService.UpdateUserAsync(user);
                return Ok("User updated successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating user in the database");
            }
        }

        [HttpDelete("/DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                await _userService.DeleteUserAsync(id);
                return Ok("User deleted successfully");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting user from the database");
            }
        }


    }
}
