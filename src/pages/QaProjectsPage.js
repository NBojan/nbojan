import { useEffect } from "react";
import { AllQaProjects, QaHero } from "../components";

const QaProjectsPage = () => {

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "QA Projects - NBojan";
        return () => document.title= prevTitle
    }, []);

    return (  
        <>
            <QaHero />
            <AllQaProjects />
        </>
    );
}


export default QaProjectsPage;