using Devices.Core.Interface;
using Devices.Core.Models;
using Devices.Core.Service;
using Devices.Data;

namespace Devices.Services
{
    public class DeviceService : EntityService<Device>, IDeviceService
    {
        private readonly IEnumerable<IValidation> _validation;

        public DeviceService(IDevicesDbContext context, IEnumerable<IValidation> validation) : base(context)
        {
            _validation = validation;
        }

        public List<Device> GetDevices()
        {
            return _context.Devices.ToList();
        }

        public Device? GetDevicesById(int id)
        {
            return _context.Devices.SingleOrDefault(d => d.Id == id);
        }

        public List<Device> GetDevicesByName(string name)
        {
            return _context.Devices.Where(d => d.Name.ToLower().Contains(name.ToLower())).ToList();
        }

        public List<Device> GetDevicesByModel(string model)
        {
            return _context.Devices.Where(d => d.Model.ToLower().Contains(model.ToLower())).ToList();
        }

        public List<Device> GetDevicesByStatus(string status)
        {
            return _context.Devices.Where(d => d.Status.ToLower().Contains(status.ToLower())).ToList();
        }

        public bool DevicesValidation(List<Device> devices)
        {
            return devices.All(d => _validation.All(v => v.IsValid(d)));
        }

        public void CreateDevice(Device device)
        {
            _context.Devices.Add(device);
            _context.SaveChanges();
        }

        public void UpdateDevice(Device device)
        {
            _context.Devices.Update(device);
            _context.SaveChanges();
        }

        public void RemoveDevice(int id)
        {
            _context.Devices.RemoveRange(_context.Devices.Where(d => d.Id == id));
            _context.SaveChanges();
        }
    }
}
