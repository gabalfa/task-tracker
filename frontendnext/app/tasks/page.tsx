//@ts-nocheck
import { Suspense } from "react";
import Link from "next/link";
import Header from "@/app/ui/main-header";
import CompleteTask from "@/app/ui/complete-task";
import CreateButton from "@/app/ui/create-button";
import DeleteTask from "@/app/ui/delete-task";

import { getTasksByEmail } from "@/app/lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    email?: string;
  };
}) {
  const email = searchParams?.email || "";
  const tasks = await getTasksByEmail(email);

  return (
    <main className="flex min-h-screen flex-col justify-start">
      <Header />
      <h2 className="text-sm self-center mt-10">
        {"Tasks for: "}
        <span className="text-xl">{email}</span>
      </h2>

      <section className="md:mx-auto flex flex-col justify-between border-gray-200 border-opacity-50 px-8 md:p-8">
        {tasks?.length > 0 ? (
          <article className="">
            <div className="md:hidden">
              {tasks?.map((task) => (
                <fieldset
                  key={task.taskId}
                  className="flex mt-4 w-full rounded-md px-4 border justify-between items-center"
                >
                  <legend className="border capitalize rounded-md bg-gray-100 px-4 font-bold text-lg">
                    {task.taskName}
                  </legend>

                  <div className="mb-2 flex flex-col items-center">
                    <p className="text-md self-start ">{task.taskDueDate}</p>
                    <p className="text-sm ">{task.taskAssignedTo}</p>
                  </div>

                  <div className="mb-2 flex items-center justify-start">
                    <div>
                      <CompleteTask
                        isCompleted={task.isCompleted}
                        taskId={task.taskId}
                      />
                    </div>

                    <div className="py-5">
                      <DeleteTask taskId={task.taskId} />
                    </div>
                  </div>
                </fieldset>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
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
                  <th scope="col" className="">
                    Complete
                  </th>
                  <th scope="col" className="">
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
                      <div className="flex items-center gap-3 font-bold text-lg capitalize">
                        <p>{task.taskName}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      <div className="flex items-center gap-3">
                        <p>{task.taskDueDate}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
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
        <Suspense>
          <CreateButton />
        </Suspense>
        <Link href={`/`} className="w-full">
          <button
            type="submit"
            className="my-4 w-full uppercase font-bold flex-shrink-0 text-center text-white bg-orange-500 border-0 h-12 focus:outline-none hover:bg-orange-600 rounded"
          >
            back
          </button>
        </Link>
      </section>
    </main>
  );
}
