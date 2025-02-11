using CloudMeetAPI.Models.DBEntities;

namespace CloudMeetAPI.Services;

public interface IUserService
{
  void RegisterUser(User user);
}