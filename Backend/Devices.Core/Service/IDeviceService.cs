using Devices.Core.Models;

namespace Devices.Core.Service
{
    public interface IDeviceService
    {
        List<Device> GetDevices();
        Device? GetDevicesById(int id);
        List<Device> GetDevicesByName(string name);
        List<Device> GetDevicesByModel(string model);
        List<Device> GetDevicesByStatus(string status);
        bool DevicesValidation(List<Device> devices);
        void CreateDevice(Device device);
        void UpdateDevice(Device device);
        void RemoveDevice(int id);
    }
}
