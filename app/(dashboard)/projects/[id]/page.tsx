import { db } from "@/db";
import { projects } from "@/db/schema";
import { getProjectWithTasks } from "@/lib/projects";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getProjectWithTasks(Number(id));

  if (!data) {
    notFound();
  }

  const { project, tasks } = data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-teal-600">{project.name}</h1>
      <p className="text-gray-600 mt-2">Status: {project.status}</p>

      <h2 className="text-lg font-medium mt-6 mb-3">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border p-3 rounded bg-white shadow-sm flex justify-between"
            >
              <span className="text-blue-500">{task.title}</span>
              <span className="text-sm text-gray-500">
                {task.completed ? "Completed" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
