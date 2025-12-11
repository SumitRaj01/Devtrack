import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
const result = await db.select().from(projects).where(eq(projects.id, Number(id)));
if(result.length===0){
    notFound();
}

const project = result[0];
return(
    <div className="p-6">
        <h1 className="text-2xl font-semibold text-teal-600">{project.name}</h1>
        <p className="text-gray-600 mt-2">Status: {project.status}</p>
    </div>
)
}