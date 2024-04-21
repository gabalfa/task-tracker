import { deleteTask } from "@/app/lib/actions";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteTask({ taskId }: { taskId: string }) {
  const deleteTaskWithId = deleteTask.bind(null, taskId);

  return (
    <form action={deleteTaskWithId}>
      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <TrashIcon className="w-6 text-rose-400" />
      </button>
    </form>
  );
}
