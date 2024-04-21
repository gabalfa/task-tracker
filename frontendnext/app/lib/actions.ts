"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const rawFormData = {
    TaskName: formData.get("taskName"),
    TaskDueDate: formData.get("taskDueDate"),
    TaskAssignedTo: formData.get("taskAssignedTo"),
    TaskCreatedBy: formData.get("taskCreatedBy"),
  };

  try {
    await fetch(`${process.env.URL_BACKEND_API}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
  } catch (error) {
    console.error("Failed to fetch a new Task:", error);
    throw new Error("Failed to fetch a new Task.");
  }

  revalidatePath("/tasks?email=" + formData.get("taskCreatedBy"));
  redirect("/tasks?email=" + formData.get("taskCreatedBy"));
}

export async function deleteTask(taskId: string) {
  try {
    await fetch(`${process.env.URL_BACKEND_API}tasks?taskId=${taskId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Failed to fetch deleting a Task:", error);
    throw new Error("Failed to fetch deleting a Task.");
  }

  revalidatePath("/tasks");
}

export async function completeTask(taskId: string) {
  try {
    await fetch(`${process.env.URL_BACKEND_API}tasks/${taskId}/markcomplete`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Failed to fetch deleting a Task:", error);
    throw new Error("Failed to fetch deleting a Task.");
  }

  revalidatePath("/tasks");
}
