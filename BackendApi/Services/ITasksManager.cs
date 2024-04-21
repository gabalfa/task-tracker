using BackendApi.Models;

namespace BackendApi.Services
{
    public interface ITasksManager
    {
        Task<List<TaskModel>> GetTasksByCreator(string createdBy);
        Task<TaskModel?> GetTaskById(Guid taskId);
        Task<Guid> CreateNewTask(string taskName, string createdBy, string assignedTo, String dueDate);
        Task<bool> UpdateTask(Guid taskId, string taskName, string assignedTo, String dueDate);
        Task<bool> MarkTaskCompleted(Guid taskId);
        Task<bool> DeleteTask(Guid taskId);
    }
}