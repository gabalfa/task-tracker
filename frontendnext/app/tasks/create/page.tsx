import { Suspense } from "react";
import CreateForm from "@/app/ui/create-form";
import Header from "@/app/ui/main-header";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    email?: string;
  };
}) {
  const email = searchParams?.email || "";
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <Header />
      <Suspense>
        <CreateForm />
      </Suspense>
    </main>
  );
}
