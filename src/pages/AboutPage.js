import { Helmet } from "react-helmet";
import { AboutOne, AboutTwo } from "../components";

const AboutPage = () => {
    return (  
        <>
            <Helmet>
                <title>About - NBojan</title>
            </Helmet>
            <AboutOne />
            <AboutTwo />
        </>
    );
}


export default AboutPage;