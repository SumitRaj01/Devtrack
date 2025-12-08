export type Project = {
    id: number,
    name: string,
    status: string;
}

export async function getProjects():Promise<Project []>{
    await new Promise((resolve)=>setTimeout(resolve, 500));

    return[
        {id:1 , name:"DevTrack App", status: "Active"},
        {id:2 , name:"Portfolio website", status: "Paused"},
        {id:3 , name: "AI Saas MVP", status: "Planning"},
    ];
}