import { getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projects = await getProjects();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-teal-600">
        {project.name}
      </h1>
      <p className="text-gray-600 mt-2">Status: {project.status}</p>
    </div>
  );
}
