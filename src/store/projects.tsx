import {IProjectInfo} from "../interfaces/projects.tsx";

const initState: { projects: IProjectInfo[] } = {
    projects: []
};


const GET_PROJECTS = 'GET_PROJECTS'
const ADD_PROJECT = 'ADD_PROJECT'
const REMOVE_PROJECT = 'REMOVE_PROJECT'

export const projectReducer = (state = initState, action: { type: string; payload?: unknown; }) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {...state, projects: action.payload}
        case ADD_PROJECT:
            return {...state, projects: [...state.projects, action.payload]}
        case REMOVE_PROJECT:
            return {...state, projects: state.projects.filter((prj: IProjectInfo) => prj.id !== action.payload)}
        default:
            return state
    }
}

export const getProjectAction = (payload: IProjectInfo[]) => ({
    type: GET_PROJECTS, payload
});


export const addProjectAction = (payload: IProjectInfo) => ({
    type: ADD_PROJECT, payload
})

export const removeProjectAction = (payload: number) => ({
    type: REMOVE_PROJECT, payload
})