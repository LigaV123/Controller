using Devices.Core.Models;

namespace Devices.Core.Interface
{
    public interface IValidation
    {
        bool IsValid(Device device);
    }
}
