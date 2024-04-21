import { completeTask } from "@/app/lib/actions";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function CompleteTask({
  taskId,
  isCompleted,
}: {
  taskId: string;
  isCompleted?: boolean;
}) {
  const completeTaskWithId = completeTask.bind(null, taskId);

  return (
    <>
      {isCompleted ? (
        <button
          title="Completed!"
          className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
        >
          <CheckCircleIcon className="w-8 text-green-500" />
        </button>
      ) : (
        <form action={completeTaskWithId}>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <CheckCircleIcon className="w-8" />
          </button>
        </form>
      )}
    </>
  );
}
