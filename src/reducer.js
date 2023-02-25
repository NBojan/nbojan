import { SET_LOADING, SET_ERROR, SET_PROJECTS } from "./assets/constants/actions";

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
        })
        return {...state, projects: action.payload, featured: featuredProjects, err: false, isLoading: false }
    }    
    else {
        console.log(`no matching action type for ${action.type}`)
        return state;
    }
}

export default reducer