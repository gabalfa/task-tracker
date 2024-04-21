namespace BackendApi.Models
{
    public class TaskModel
    {
        public Guid TaskId { get; set; }
        public string TaskName { get; set; } = string.Empty;
        public string TaskCreatedBy { get; set; } = string.Empty;
        public string TaskCreatedOn { get; set; } = string.Empty;
        public string TaskDueDate { get; set; } = string.Empty;
        public string TaskAssignedTo { get; set; } = string.Empty;
        public bool IsCompleted { get; set; }
        public bool IsOverDue { get; set; }
    }

    public class TaskAddModel
    {
        public string TaskName { get; set; } = string.Empty;
        public string TaskCreatedBy { get; set; } = string.Empty;
        public string TaskDueDate { get; set; } = string.Empty;
        public string TaskAssignedTo { get; set; } = string.Empty;
    }

    public class TaskUpdateModel
    {
        public Guid TaskId { get; set; }
        public string TaskName { get; set; } = string.Empty;
        public string TaskDueDate { get; set; } = string.Empty;
        public string TaskAssignedTo { get; set; } = string.Empty;
    }
}