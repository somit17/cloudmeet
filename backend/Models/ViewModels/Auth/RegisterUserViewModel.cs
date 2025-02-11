using System.ComponentModel.DataAnnotations;
namespace CloudMeetAPI.Model.ViewModels.Auth;

public class RegisterUserViewModel
{
  [Required(ErrorMessage = "Email is required")]
  [EmailAddress(ErrorMessage = "Invalid email address")]
  public string Email { get; set; }

  [Required(ErrorMessage = "Password is required")]
  [StringLength(100, MinimumLength = 8, ErrorMessage = "Password must be at least 8 characters long")]
  [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$", ErrorMessage = "Password must include lowercase, uppercase, and numeric characters")]
  public string Password { get; set; }

}