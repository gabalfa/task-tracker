import Link from "next/link";

export default function Component() {
  return (
    <footer className="text-gray-600 body-font self-center">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left uppercase font-bold">
            Technical Test
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            ></a>
          </p>
        </div>
      </div>
    </footer>
  );
}
