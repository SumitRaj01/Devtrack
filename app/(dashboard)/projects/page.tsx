import { createProject } from "@/lib/actions";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const allProjects = await getProjects();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      <form action={createProject} className="mb-6 flex gap-2">
        <input
          name="name"           
          placeholder="New project name"
          className="border rounded px-3 py-2 w-64"
        />
        <button className="bg-black text-white px-4 py-2 rounded">
          Create
        </button>
      </form>

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
