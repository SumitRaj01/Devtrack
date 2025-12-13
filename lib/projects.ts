import {db} from "@/db";
import {projects, tasks} from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProjectWithTasks(id:number){
    //Fetch the project
    const project = await db 
        .select()
        .from(projects)
        .where(eq(projects.id, id))
        .limit(1);

    if(project.length ===0) return null;

    // fetch tasks belonging to this project 
    const projectTasks = await db 
        .select()
        .from(tasks)
        .where(eq(tasks.projectId, id));

        return {
            project: project[0],
            tasks: projectTasks
        }
}

export async function getProjects(){
    return await db.select().from(projects);
}