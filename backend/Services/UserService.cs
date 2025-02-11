using CloudMeetAPI.DBContext;
using CloudMeetAPI.Models.DBEntities;

namespace CloudMeetAPI.Services;

public class UserService : IUserService
{
  private readonly ApplicationDbContext _context;

  public UserService(ApplicationDbContext context)
  {
   _context = context;
  }

  public void RegisterUser(User user)
  {
    if (_context.Users.Any(u => u.Email == user.Email))
    {
      throw new Exception("Email already exists");
    }
    _context.Users.Add(user);
    _context.SaveChanges();
  }
  
}