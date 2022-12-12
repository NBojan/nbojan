import axios from "axios";
import reducer from "./reducer";
import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { SET_LOADING, SET_ERROR, SET_PROJECTS } from "./assets/actions";

const initialState = {
    isLoading: true,
    projects: [],
    featured: [],
    err: false
}

const url = "https://nbojan.netlify.app/api/nb-all";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    const fetchData = async () => {
        dispatch({type: SET_LOADING});

        const response = await axios(url)
        .catch(err => dispatch({type: SET_ERROR, payload: err.message}));

        if(response){
            dispatch({type: SET_PROJECTS, payload: response.data});
        }
    }

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
        <AppContext.Provider value={{...state, fetchData, showScrollTop}}>
            {children}
        </AppContext.Provider>    
    ) 
}

export const useGlobalContext = () => useContext(AppContext);