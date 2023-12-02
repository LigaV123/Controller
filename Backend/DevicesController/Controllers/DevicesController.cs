using Devices.Core.Interface;
using Devices.Core.Models;
using Devices.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace Devices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicesController : Controller
    {
        private readonly IDeviceService _deviceService;
        private readonly IEnumerable<IValidation> _validators;

        public DevicesController(IDeviceService deviceService, IEnumerable<IValidation> validators)
        {
            _deviceService = deviceService;
            _validators = validators;
        }

        [Route("device")]
        [HttpGet]
        public IActionResult GetAllDevices()
        {
            var devices = _deviceService.GetDevices();
            if (devices.Count == 0)
            {
                return NotFound();
            }

            return Ok(devices);
        }

        [Route("device/{id}")]
        [HttpGet]
        public IActionResult GetDeviceById(int id)
        {
            var device = _deviceService.GetDevicesById(id);
            if (device == null)
            {
                return NotFound();
            }

            return Ok(device);
        }

        [Route("device/name/{name}")]
        [HttpGet]
        public IActionResult GetDevicesByName(string name)
        {
            var devices = _deviceService.GetDevicesByName(name);
            if (devices.Count == 0)
            {
                return NotFound();
            }

            if (!_deviceService.DevicesValidation(devices))
            {
                return BadRequest();
            }

            return Ok(devices);
        }

        [Route("device/model/{model}")]
        [HttpGet]
        public IActionResult GetDevicesByModel(string model)
        {
            var devices = _deviceService.GetDevicesByModel(model);
            if (devices.Count == 0)
            {
                return NotFound();
            }

            if (!_deviceService.DevicesValidation(devices))
            {
                return BadRequest();
            }

            return Ok(devices);
        }

        [Route("device/status/{status}")]
        [HttpGet]
        public IActionResult GetDevicesByStatus(string status)
        {
            var devices = _deviceService.GetDevicesByStatus(status);
            if (devices.Count == 0)
            {
                return NotFound();
            }

            if (!_deviceService.DevicesValidation(devices))
            {
                return BadRequest();
            }

            return Ok(devices);
        }

        [Route("device")]
        [HttpPost]
        public IActionResult AddDevice(Device device)
        {
            if (!_validators.All(v => v.IsValid(device)))
            {
                return BadRequest();
            }

            _deviceService.CreateDevice(device);

            return Created("", device);
        }

        [Route("device/{id}")]
        [HttpPut]
        public IActionResult UpdateDevices(int id, [FromBody] Device updatedDevice)
        {
            if (id != updatedDevice.Id)
            {
                return BadRequest();
            }

            Device? existingDevice = _deviceService.GetDevicesById(id);

            if (existingDevice == null)
            {
                return NotFound();
            }

            existingDevice.Status = updatedDevice.Status;
            existingDevice.Name = updatedDevice.Name;
            existingDevice.Model = updatedDevice.Model;
            existingDevice.ConversationStatus = updatedDevice.ConversationStatus;

            if (!_validators.All(v => v.IsValid(existingDevice)))
            {
                return BadRequest();
            }

            _deviceService.UpdateDevice(existingDevice);
            
            return Ok(existingDevice);
        }

        [Route("device/{id}")]
        [HttpDelete]
        public IActionResult DeleteDeviceById(int id)
        {
            var device = _deviceService.GetDevicesById(id);
            if (device == null)
            {
                return NotFound();
            }

            _deviceService.RemoveDevice(id);

            return Ok();
        }
    }
}
