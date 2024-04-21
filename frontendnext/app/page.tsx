import { Suspense } from "react";
import Header from "@/app/ui/main-header";
import EmailInput from "@/app/ui/email-input";
import Footer from "@/app/ui/main-footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <section className="text-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 h-60 mx-2">
        <h2 className="text-lg title-font font-medium my-4">
          Welcome Task Traker!
        </h2>

        <Suspense>
          <EmailInput />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
