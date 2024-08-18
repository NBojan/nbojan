import { useEffect } from "react";
import { AboutOne, AboutTwo } from "../components";

const AboutPage = () => {
    
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "About - NBojan";
        return () => document.title= prevTitle
    }, []);
    
    return (  
        <>
            <AboutOne />
            <AboutTwo />
        </>
    );
}


export default AboutPage;