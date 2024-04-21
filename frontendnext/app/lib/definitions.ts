export type Task = {
  taskId: string;
  taskName: string;
  taskCreatedBy: string;
  taskCreatedOn: string;
  taskDueDate: string;
  taskAssignedTo: string;
  isCompleted: boolean;
  isOverDue: boolean;
};
