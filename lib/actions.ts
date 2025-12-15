"use server";

import { db } from "@/db";
import { projects, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const name = formData.get("name") as string;
  if (!name) return;
  await db.insert(projects).values({
    name,
    status: "Active",
  });

  //Refresh dashboard data
  revalidatePath("/");
  revalidatePath("/projects");
}


export async function createTask(formData: FormData){
    const title = formData.get("title") as string;
    const projectId = Number(formData.get("projectId"))

    if(!title || !projectId) return;

    await db.insert(tasks).values({
        title,
        projectId,
        completed: 0
    });

    revalidatePath(`/projects/${projectId}`)
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