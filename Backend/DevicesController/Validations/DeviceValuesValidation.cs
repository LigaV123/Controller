using Devices.Core.Interface;
using Devices.Core.Models;

namespace Devices.Validations
{
    public class DeviceValuesValidation : IValidation
    {
        public bool IsValid(Device device)
        {
            return !string.IsNullOrEmpty(device.Name) &&
                   !string.IsNullOrEmpty(device.Model) &&
                   !string.IsNullOrEmpty(device.Status) &&
                   !string.IsNullOrEmpty(device.ConversationStatus);
        }
    }
}
