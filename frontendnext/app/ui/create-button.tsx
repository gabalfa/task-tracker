"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Create() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const email = params.get("email");
  return (
    <Link href={`/tasks/create?email=${email}`} className="self-center w-full">
      <button className="mt-16 w-full uppercase font-bold flex-shrink-0 text-center text-white bg-blue-500 border-0 h-12 focus:outline-none hover:bg-blue-600 rounded">
        create new
      </button>
    </Link>
  );
}
