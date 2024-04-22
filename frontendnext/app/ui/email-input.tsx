"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  const [show, setShow] = useState(searchParams.get("email") || "");

  const valideteRedirect = () => {
    var validRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!show.match(validRegex)) {
      alert("Invalid email address");
      return false;
    }
    router.push("/tasks?email=" + show);
  };

  const handleSearch = (term: string) => {
    setShow(term);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("email", term);
    } else {
      params.delete("email");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <article className="flex flex-col gap-4">
      <div className="relative h-10 w-full">
        <input
          type="email"
          maxLength={24}
          onChange={(event) => handleSearch(event.target.value)}
          defaultValue={searchParams.get("email")?.toString()}
          placeholder=" "
          className="peer h-full w-full rounded-[7px] border border-gray-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-gray-500 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email Address
        </label>
      </div>
      {show.length > 0 ? (
        <button
          onClick={() => valideteRedirect()}
          className="w-64 uppercase font-bold flex-shrink-0 text-center text-white bg-blue-500 border-0 h-12 focus:outline-none hover:bg-blue-600 rounded"
        >
          Load My Tasks
        </button>
      ) : (
        <h1 className="w-64 text-sm text-gray-300">Please write an Email</h1>
      )}
    </article>
  );
}
