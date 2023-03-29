import { getUniqueTypes } from "./assets/constants/utils";
import { SET_LOADING, SET_ERROR, SET_PROJECTS, FILTER } from "./assets/constants/actions";

const reducer = (state, action) => {
    if(action.type === SET_LOADING){
        return {...state, isLoading: true, err: false}
    }
    if(action.type === SET_ERROR){
        return {...state, isLoading: false, err: action.payload }
    }
    if(action.type === SET_PROJECTS){
        const featuredProjects = action.payload.filter(project => {
            if(project.featured) return project
        });
        const uniqueTypes = getUniqueTypes(action.payload);
        return {...state, projects: action.payload, featured: featuredProjects, displayedProjects: action.payload, types: uniqueTypes, err: false, isLoading: false }
    }
    if(action.type === FILTER){
        const filterType = action.payload;
        if(filterType === "all") return {...state, displayedProjects: state.projects}
        else {
            const tmpArray = state.projects.filter(project => project.type === filterType)
            return {...state, displayedProjects: tmpArray}
        }
    }
    else {
        console.log(`no matching action type for ${action.type}`)
        return state;
    }
}

export default reducer