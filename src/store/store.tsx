import {combineReducers, legacy_createStore as createStore} from "redux";
import {projectReducer} from "./projects.tsx";

const rootReducers = combineReducers({
    projects: projectReducer
})

export const store = createStore(rootReducers)
export type RootState = ReturnType<typeof store.getState>