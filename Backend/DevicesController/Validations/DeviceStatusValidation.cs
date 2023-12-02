using Devices.Core.Interface;
using Devices.Core.Models;

namespace Devices.Validations
{
    public class DeviceStatusValidation : IValidation
    {
        public bool IsValid(Device device)
        {
            return device.Status.ToLower() == "on" ||
                   device.Status.ToLower() == "off";
        }
    }
}
