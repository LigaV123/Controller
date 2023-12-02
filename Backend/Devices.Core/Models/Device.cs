using System.ComponentModel.DataAnnotations;

namespace Devices.Core.Models
{
    public class Device : Entity
    {
        [StringLength(3)]
        public string Status { get; set; }

        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Model { get; set; }

        [StringLength(20)]
        public string ConversationStatus { get; set; }
    }
}
