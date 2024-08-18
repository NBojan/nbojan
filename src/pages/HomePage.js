import { useEffect } from "react";
import { HomeHero, FeaturedWeb, FeaturedQa } from "../components";

const HomePage = () => {

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Home - NBojan";
        return () => document.title= prevTitle
    }, []);

    return (  
        <>
            <HomeHero />
            <FeaturedWeb />
            <FeaturedQa />
        </>
    );
}
 
export default HomePage;