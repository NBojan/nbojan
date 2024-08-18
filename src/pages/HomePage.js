import { Helmet } from "react-helmet";
import { HomeHero, FeaturedWeb, FeaturedQa } from "../components";

const HomePage = () => {
    return (  
        <>
            <Helmet>
                <title>Home - NBojan</title>
            </Helmet>
            <HomeHero />
            <FeaturedWeb />
            <FeaturedQa />
        </>
    );
}
 
export default HomePage;