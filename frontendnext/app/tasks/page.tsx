import { Suspense } from "react";
import Link from "next/link";
import Header from "@/app/ui/main-header";
import DataTable from "@/app/ui/data-table";
import CreateButton from "@/app/ui/create-button";

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
      <h2 className="text-xs self-center mt-10 font-medium  tracking-widest title-font ">
        {"Tasks for"}
        <span className="ml-1 tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
          {email}
        </span>
      </h2>

      <DataTable tasks={tasks} />

      <div className="self-center w-80">
        <Suspense>
          <CreateButton />
        </Suspense>
        <Link href={`/`} className="w-full">
          <button
            type="submit"
            className="my-8 w-full uppercase font-bold flex-shrink-0 text-center text-white bg-orange-500 border-0 h-12 focus:outline-none hover:bg-orange-600 rounded"
          >
            back
          </button>
        </Link>
      </div>
    </main>
  );
}
