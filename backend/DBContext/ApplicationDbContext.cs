using CloudMeetAPI.Models.DBEntities;
using Microsoft.EntityFrameworkCore;

namespace CloudMeetAPI.DBContext;

public class ApplicationDbContext: DbContext
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
  {
    
  }
  public DbSet<User> Users { get; set; }
}