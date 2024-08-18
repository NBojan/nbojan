import axios from "axios";
import reducer from "./reducer";
import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { SET_LOADING, SET_ERROR, SET_PROJECTS, FILTER } from "./assets/constants/actions";

const initialState = {
    isLoading: true,
    projectsWeb: [],
    featuredWeb: [],
    displayedProjectsWeb: [],
    types: [],
    projectsQa: [],
    featuredQa: [],
    err: false
}

const url = "https://nbojan.netlify.app/api/nb-all";
const qaUrl = "https://nbojan.netlify.app/api/nb-qa-all";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showSide, setShowSide] = useState(false);
    const toggleSide = () => setShowSide(!showSide);
    
    const fetchData = async () => {
        dispatch({type: SET_LOADING});

        const responseWeb = await axios(url)
        .catch(err => console.log(err.message));
        const responseQa = await axios(qaUrl)
        .catch(err => console.log(err.message));

        if(responseWeb && responseQa){
            const projects = { projectsWeb: responseWeb.data, projectsQa: responseQa.data }
            dispatch({type: SET_PROJECTS, payload: projects});
        }
        else {
            dispatch({type: SET_ERROR, payload: "There was an error."})
        }
    }
    const filter = (type) => dispatch({type: FILTER, payload: type});
    const checkScroll = () => window.scrollY >= window.innerHeight ? setShowScrollTop(true) : setShowScrollTop(false);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        window.addEventListener("scroll", checkScroll)
        return () => window.removeEventListener("scroll", checkScroll);
    }, [])

    return (
        <AppContext.Provider value={{...state, fetchData, showScrollTop, showSide, toggleSide, filter}}>
            {children}
        </AppContext.Provider>    
    ) 
}

export const useGlobalContext = () => useContext(AppContext);