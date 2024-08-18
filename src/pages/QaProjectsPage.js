import { Helmet } from "react-helmet";
import { AllQaProjects, QaHero } from "../components";

const QaProjectsPage = () => {
    return (  
        <>
            <Helmet>
                <title>QA Projects - NBojan</title>
            </Helmet>
            <QaHero />
            <AllQaProjects />
        </>
    );
}


export default QaProjectsPage;