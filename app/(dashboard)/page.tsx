import { getProjects } from "@/lib/projects";
import { getStats } from "@/lib/stats";
import { notFound } from "next/navigation";

export default async function Home() {
  const [projects, summaryCards] = await Promise.all([
    getProjects(),
    getStats(),
  ]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">DevTrack Dashboard</h1>
      <p className="text-gray-600 mb-6">Your productivity space starts here.</p>

      <h2 className="text-lg font-medium mb-3">Summary Cards</h2>
      <h2 className="text-lg font-medium mb-3">Summary</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded border p-4 bg-white shadow-sm">
          <div className="text-sm text-gray-500">Active Tasks</div>
          <div className="text-xl font-semibold text-teal-600">
            {summaryCards.activeTasks}
          </div>
        </div>

        <div className="rounded border p-4 bg-white shadow-sm">
          <div className="text-sm text-gray-500">Completed Tasks</div>
          <div className="text-xl font-semibold text-teal-600">
            {summaryCards.completedTasks}
          </div>
        </div>

        <div className="rounded border p-4 bg-white shadow-sm">
          <div className="text-sm text-gray-500">Total Projects</div>
          <div className="text-xl font-semibold text-teal-600">
            {summaryCards.totalProjects}
          </div>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-3">Your Projects</h2>

      {projects.length === 0 ? (
        <p className="text-sm text-gray-500">No projects yet.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="rounded border p-3 bg-white shadow-sm"
            >
              <div className="font-medium text-teal-600">{project.name}</div>
              <span className="inline-block text-xs rounded bg-gray-100 px-2 py-1 text-gray-700">
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



// export default async function Home() {
//   notFound();
// }
