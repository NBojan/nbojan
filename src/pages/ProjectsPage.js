import { Helmet } from "react-helmet";
import { AllWebProjects, ProjectsHero } from "../components";

const ProjectsPage = () => {
    return (  
        <>
            <Helmet>
                <title>Projects - NBojan</title>
            </Helmet>
            <ProjectsHero />
            <AllWebProjects />
        </>
    );
}


export default ProjectsPage;