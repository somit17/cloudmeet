using CloudMeetAPI.Model.ViewModels.Auth;
using CloudMeetAPI.Models.DBEntities;
using CloudMeetAPI.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
namespace CloudMeetAPI.Controllers;
[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
  private readonly IUserService _userService;

  public AuthController(IUserService userService)
  {
    _userService = userService;
  }

  [HttpPost("register")]
  public IActionResult Register([FromBody] RegisterUserViewModel model)
  {
    string salt = GenerateSalt(); // Generate a unique salt
    var user = new User()
    {
      Email = model.Email,
      Username = model.Email,
      Salt = salt,
      PasswordHash = HashPassword(model.Password, salt) // Hash the password with the salt
    };
    _userService.RegisterUser(user);
    return Ok(new { Message = "User registered successfully" });
  }
  
  
  private string GenerateSalt()
  {
    byte[] saltBytes = new byte[16];
    using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
    {
      rng.GetBytes(saltBytes);
    }
    return Convert.ToBase64String(saltBytes);
  }

  private string HashPassword(string password, string salt)
  {
    // Combine the password and salt, then hash the result
    string combined = password + salt;
    return BCrypt.Net.BCrypt.HashPassword(combined);
  }
}