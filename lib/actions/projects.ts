"use server"
import { db } from "@/db";
import { projects } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string") {
    throw new Error("Invalid form submission");
  }

  if (name.trim().length < 3) {
    throw new Error("Project name must be at least 3 characters");
  }

  await db.insert(projects).values({
    name: name.trim(),
    status: "Active",
  });

  revalidatePath("/");
  revalidatePath("/projects");
}
