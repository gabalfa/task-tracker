import { unstable_noStore as noStore } from "next/cache";

export async function getTasksByEmail(email: string) {
  noStore();
  try {
    const response = await fetch(
      `${process.env.URL_BACKEND_API}tasks?createdBy=${email}`
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Failed geting tasks by user:", error);
  }
}
