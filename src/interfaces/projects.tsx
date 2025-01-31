export interface IProjectTasksInfo {
    id: number,
    number: string,
    name: string,
    description?: string,
    work_time?: string,
    date_end?: string,
    priority: string,
    file?: File,
    status: string,
}

interface IComment {
    user: string;
    date_created: string;
    text: string;
    id: number;
    replies?: {
        [key: number]: IComment
    };
}

export interface IProjectTasks extends IProjectTasksInfo{
    subtasks: {
        [key: number]: IProjectTasksInfo
    },
    comments?: {
        [key: number]: IComment
    }
}

export interface IProjectInfo {
    name: string,
    id: number,
    status: string,
    creator: string,
    tasks?: {
        [key: number]: IProjectTasks
    }
}

export interface IProjects {
    [key: number]: IProjectInfo
}