using Devices.Core.Interface;
using Devices.Core.Models;

namespace Devices.Validations
{
    public class DeviceConvStatusValidation : IValidation
    {
        public bool IsValid(Device device)
        {
            string convStat = device.ConversationStatus;
            int count = 0;

            foreach (var c in convStat)
            {
                if (Char.IsDigit(c))
                {
                    count += 1;
                }
            }

            return convStat.Length == count;
        }
    }
}
