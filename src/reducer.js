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
        const { projectsWeb, projectsQa } = action.payload;
        const featuredWebProjects = projectsWeb.filter(project => {
            if(project.featured) return project
        });
        const featuredQaProjects = projectsQa.filter(project => {
            if(project.featured) return project
        });
        const uniqueTypes = getUniqueTypes(projectsWeb);
        return {
          ...state,
          projectsWeb: projectsWeb,
          featuredWeb: featuredWebProjects,
          displayedProjectsWeb: projectsWeb,
          types: uniqueTypes,
          projectsQa,
          featuredQa: featuredQaProjects,
          err: false,
          isLoading: false,
        };
    }
    if(action.type === FILTER){
        const filterType = action.payload;
        if(filterType === "all") return {...state, displayedProjectsWeb: state.projectsWeb}
        else {
            const tmpArray = state.projectsWeb.filter(project => project.type === filterType)
            return {...state, displayedProjectsWeb: tmpArray}
        }
    }
    else {
        console.log(`no matching action type for ${action.type}`)
        return state;
    }
}

export default reducer