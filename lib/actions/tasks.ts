"use server"
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
  try {
    const title = formData.get("title");
    const projectId = Number(formData.get("projectId"));

    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Task title is required");
    }

    await db.insert(tasks).values({
      title: title.trim(),
      projectId,
      completed: 0,
    });

    revalidatePath(`/projects/${projectId}`);
  } catch (error) {
    console.error("Create task failed:", error);
    throw new Error("Failed to create task");
  }
}

export async function toggleTask(id: number, completed: number, projectId: number){
    await db 
    .update(tasks)
    .set({completed: completed ? 0 : 1})
    .where(eq(tasks.id, id))

      revalidatePath(`/projects/${projectId}`);
}

export async function deleteTask(id: number, projectId: number) {
  await db.delete(tasks).where(eq(tasks.id, id));
  revalidatePath(`/projects/${projectId}`);
}