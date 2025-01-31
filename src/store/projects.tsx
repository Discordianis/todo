import { IProjects, IProjectInfo } from "../interfaces/projects.tsx";

const localStr = localStorage.getItem("projects");
const initState: IProjects = localStr ? JSON.parse(localStr) : {};

const GET_PROJECTS = "GET_PROJECTS";
const ADD_PROJECT = "ADD_PROJECT";
const REMOVE_PROJECT = "REMOVE_PROJECT";

interface Action {
    type: string;
    payload?: IProjects | IProjectInfo | IProjectInfo[] | number | number[];
}

export const projectReducer = (state = initState, action: Action): IProjects => {
    let newState: IProjects = { ...state };

    switch (action.type) {
        case GET_PROJECTS:
            if (typeof action.payload === "object" && action.payload !== null) {
                newState = { ...state, ...(action.payload as IProjects) };
            }
            break;

        case ADD_PROJECT:
            if (Array.isArray(action.payload)) {
                (action.payload as IProjectInfo[]).forEach((prj) => {
                    newState[prj.id] = prj;
                });
            } else {
                const prj = action.payload as IProjectInfo;
                newState[prj.id] = prj;
            }
            break;

        case REMOVE_PROJECT:
            if (Array.isArray(action.payload)) {
                (action.payload as number[]).forEach((id) => {
                    delete newState[id];
                });
            }
            break;

        default:
            return state;
    }

    localStorage.setItem("projects", JSON.stringify(newState));
    return newState;
};

// Actions
export const getProjectAction = (payload: IProjects) => ({
    type: GET_PROJECTS,
    payload,
});

export const addProjectAction = (payload: IProjectInfo | IProjectInfo[]) => ({
    type: ADD_PROJECT,
    payload,
});

export const removeProjectAction = (payload: number[]) => ({
    type: REMOVE_PROJECT,
    payload,
});
