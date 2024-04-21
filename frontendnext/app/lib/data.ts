import { unstable_noStore as noStore } from "next/cache";
import { Task } from "./definitions";

export async function getTasksByEmail(email: string) {
  noStore();
  try {
    const response = await fetch(
      `${process.env.URL_BACKEND_API}tasks?createdBy=${email}`
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function createTasks(email?: Task) {
  noStore();
  try {
    const response = await fetch(
      `${process.env.URL_BACKEND_API}tasks?createdBy=${email}`
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function deleteTasks(email: Task) {
  noStore();
  try {
    const response = await fetch(
      `${process.env.URL_BACKEND_API}tasks?createdBy=${email}`
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
