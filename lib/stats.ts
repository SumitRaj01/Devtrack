export async function getStats(){
    await new Promise((r)=>setTimeout(r,300));

    return {
        totalProjects:3,
        activeTasks:12,
        completedTasks:27
    }
}