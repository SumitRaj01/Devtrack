import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <ul className="space-y-3">
        {allProjects.map((project) => (
          <li key={project.id} className="border rounded p-4 bg-white-shadow">
            {project.name}. -- {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
