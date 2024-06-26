using BackendApi.Models;

namespace BackendApi.Services
{
    public class FakeTasksManager : ITasksManager
    {
        List<TaskModel> _tasksList = new List<TaskModel>();
        Random rnd = new Random();

        private void GenerateRandomTasks()
        {
            for (int i = 0; i < 10; i++)
            {
                var task = new TaskModel()
                {
                    TaskId = Guid.NewGuid(),
                    TaskName = $"Task number: {i}",
                    TaskCreatedBy = "tjoudeh@bitoftech.net",
                    TaskCreatedOn = DateTime.UtcNow.AddMinutes(i).ToString(),
                    TaskDueDate = DateTime.UtcNow.AddDays(i).ToString(),
                    TaskAssignedTo = $"assignee{rnd.Next(50)}@mail.com",
                };
                _tasksList.Add(task);
            }
        }

        public FakeTasksManager()
        {
            GenerateRandomTasks();
        }

        public Task<Guid> CreateNewTask(string taskName, string createdBy, string assignedTo, String dueDate)
        {
            var task = new TaskModel()
            {
                TaskId = Guid.NewGuid(),
                TaskName = taskName,
                TaskCreatedBy = createdBy,
                TaskCreatedOn = DateTime.UtcNow.ToString(),
                TaskDueDate = dueDate.ToString(),
                TaskAssignedTo = assignedTo,
            };

            _tasksList.Add(task);

            return Task.FromResult(task.TaskId);
        }

        public Task<bool> DeleteTask(Guid taskId)
        {
            var task = _tasksList.FirstOrDefault(t => t.TaskId.Equals(taskId));

            if (task != null)
            {
                _tasksList.Remove(task);
                return Task.FromResult(true);
            }

            return Task.FromResult(false);
        }

        public Task<TaskModel?> GetTaskById(Guid taskId)
        {
            var taskModel = _tasksList.FirstOrDefault(t => t.TaskId.Equals(taskId));
            return Task.FromResult(taskModel);
        }

        public Task<List<TaskModel>> GetTasksByCreator(string createdBy)
        {
            var tasksList = _tasksList.Where(t => t.TaskCreatedBy.Equals(createdBy)).OrderByDescending(o => o.TaskCreatedOn).ToList();
            return Task.FromResult(tasksList);
        }

        public Task<bool> MarkTaskCompleted(Guid taskId)
        {
            var task = _tasksList.FirstOrDefault(t => t.TaskId.Equals(taskId));

            if (task != null)
            {
                task.IsCompleted = true;
                return Task.FromResult(true);
            }

            return Task.FromResult(false);
        }

        public Task<bool> UpdateTask(Guid taskId, string taskName, string assignedTo, String dueDate)
        {
            var task = _tasksList.FirstOrDefault(t => t.TaskId.Equals(taskId));

            if (task != null)
            {
                task.TaskName = taskName;
                task.TaskAssignedTo = assignedTo;
                task.TaskDueDate = dueDate.ToString();
                return Task.FromResult(true);
            }

            return Task.FromResult(false);
        }
    }
}