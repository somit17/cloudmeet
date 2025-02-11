namespace CloudMeetAPI.Models.DBEntities;

public class User
{
  public int UserId { get; set; }
  public string Username { get; set; }
  public string Email { get; set; }
  public string PasswordHash { get; set; }
  public string Salt { get; set; }
  // Constructor to initialize Salt
  public User()
  {
    Salt = GenerateSalt(); // Generate a unique salt for each user
  }

  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
  
  private string GenerateSalt()
  {
    // Generate a random salt (e.g., 16 bytes)
    byte[] saltBytes = new byte[16];
    using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
    {
      rng.GetBytes(saltBytes);
    }
    return Convert.ToBase64String(saltBytes); // Convert to Base64 for storage
  }
}