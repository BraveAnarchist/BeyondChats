import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="grid min-h-[100vh] place-items-center bg-[#00487c] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Integration failed
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/Success"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Try again
          </Link>
          <Link
            to="/Menu"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back
          </Link>
        </div>
      </div>
    </main>
  );
}
