using Devices.Core.Models;

namespace Devices.Core.Service
{
    public interface IDbService 
    {
        IQueryable<T> Query<T>() where T : Entity;
        IQueryable<T> QueryById<T>(int id) where T : Entity;
        IEnumerable<T> Get<T>() where T : Entity;
        T? GetById<T>(int id) where T : Entity;
        void Create<T>(T entity) where T : Entity;
        void Delete<T>(T entity) where T : Entity;
        void Update<T>(T entity) where T : Entity;
    }
}
