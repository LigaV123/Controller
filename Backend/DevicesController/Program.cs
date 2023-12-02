using Devices.Core.Interface;
using Devices.Core.Models;
using Devices.Core.Service;
using Devices.Data;
using Devices.Services;
using Devices.Validations;
using Microsoft.EntityFrameworkCore;

namespace Devices
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            
            builder.Services.AddDbContext<DevicesDbContext>(options => 
                options.UseSqlite(builder.Configuration.GetConnectionString("Devices")));
            builder.Services.AddTransient<IDevicesDbContext, DevicesDbContext>();
            builder.Services.AddTransient<IDbService, DbService>();
            builder.Services.AddTransient<IEntityService<Device>, EntityService<Device>>();
            builder.Services.AddTransient<IDeviceService, DeviceService>();
            builder.Services.AddTransient<IValidation, DeviceValuesValidation>();
            builder.Services.AddTransient<IValidation, DeviceStatusValidation>();
            builder.Services.AddTransient<IValidation, DeviceConvStatusValidation>();

            // CORS Configuration
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAny", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("AllowAny"); // Apply CORS policy

            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.Run();
        }
    }
}