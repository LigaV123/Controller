using Devices.Core.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;

namespace Devices.Data
{
    public interface IDevicesDbContext
    {
        public DbSet<Device> Devices { get; set; }

        int SaveChanges();
        DbSet<T> Set<T>() where T : class;
        EntityEntry<T> Entry<T>(T entity) where T : class;
    }
}
