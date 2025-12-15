import { notFound } from "next/navigation";
import { getProjectWithTasks } from "@/lib/projects";
import { createTask, toggleTask, deleteTask } from "@/lib/actions";

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
      {/* Project Header */}
      <h1 className="text-2xl font-semibold">{project.name}</h1>
      <p className="text-gray-600 mb-6">Status: {project.status}</p>

      {/* Create Task Form */}
      <form action={createTask} className="mb-4 flex gap-2">
        <input
          name="title"
          placeholder="New task"
          className="border rounded px-3 py-2 flex-1"
        />
        <input type="hidden" name="projectId" value={project.id} />
        <button className="bg-black text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>

      {/* Task List */}
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border p-3 rounded bg-white shadow-sm flex justify-between items-center"
            >
              <span className={task.completed ? "line-through text-gray-400" : ""}>
                {task.title}
              </span>

              <div className="flex gap-3">
                {/* Toggle Task Completion */}
                <form
                  action={async () => {
                    "use server";
                    await toggleTask(task.id, task.completed ?? 0, project.id);
                  }}
                >
                  <button className="text-sm text-blue-600">
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                </form>

                {/* Delete Task */}
                <form
                  action={async () => {
                    "use server";
                    await deleteTask(task.id, project.id);
                  }}
                >
                  <button className="text-sm text-red-600">
                    Delete
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}