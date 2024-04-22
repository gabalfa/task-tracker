//@ts-nocheck
import CompleteTask from "@/app/ui/complete-task";
import DeleteTask from "@/app/ui/delete-task";

import { getTasksByEmail } from "@/app/lib/data";
import { Task } from "../lib/definitions";

export default async function DataTable({ tasks }: { tasks: Task[] }) {
  return (
    <section className="flex flex-col justify-between border-gray-200 border-opacity-50 py-8">
      {tasks?.length > 0 ? (
        <article className="2xl:mx-auto px-8">
          <div className="sm:hidden">
            {tasks?.map((task) => (
              <fieldset
                key={task.taskId}
                className="flex mt-4 w-full rounded-md px-6 border justify-between items-center"
              >
                <legend className="text-indigo-500 tracking-widest title-font bg-gray-100 px-3 font-bold text-lg">
                  <span
                    className="mr-2 uppercase
                     tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
                  >
                    {"Due Date"}
                  </span>
                  {task.taskDueDate}
                </legend>

                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <h1 class="title-font text-xl capitalize font-medium text-gray-900 mt-6">
                    {task.taskName}
                  </h1>
                  <h2 className="text-xs self-center mt-4 font-medium  tracking-widest title-font ">
                    {"Assigned to"}
                    <span className="ml-1 tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      {task.taskAssignedTo}
                    </span>
                  </h2>
                </div>

                <div className="">
                  <div>
                    <CompleteTask
                      isCompleted={task.isCompleted}
                      taskId={task.taskId}
                    />
                  </div>

                  <div className="">
                    <DeleteTask taskId={task.taskId} />
                  </div>
                </div>
              </fieldset>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 sm:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Due Date
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Assigned To
                </th>
                <th scope="col" className="w-24">
                  Complete
                </th>
                <th scope="col" className="w-24">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks?.map((task) => (
                <tr
                  key={task.taskId}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 px-4">
                    <div className="text-indigo-500 flex items-center gap-3 font-bold text-lg capitalize">
                      <p>{task.taskName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 px-4">
                    <div className="flex items-center gap-3">
                      <p>{task.taskDueDate}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap tracking-widest text-xs title-font font-medium text-indigo-500">
                    {task.taskAssignedTo}
                  </td>

                  <td className="py-5">
                    <CompleteTask
                      isCompleted={task.isCompleted}
                      taskId={task.taskId}
                    />
                  </td>
                  <td className="py-5">
                    <DeleteTask taskId={task.taskId} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      ) : (
        <h1 className="self-center text-2xl text-red-300">No Matches</h1>
      )}
    </section>
  );
}
