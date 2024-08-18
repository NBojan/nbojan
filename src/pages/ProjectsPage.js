import { useEffect } from "react";
import { AllWebProjects, ProjectsHero } from "../components";

const ProjectsPage = () => {

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Projects - NBojan";
        return () => document.title= prevTitle
    }, []);

    return (  
        <>
            <ProjectsHero />
            <AllWebProjects />
        </>
    );
}


export default ProjectsPage;