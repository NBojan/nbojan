import { Outlet } from "react-router-dom";
import { Navbar, ScrollTop, Footer } from "../components";

const SharedLayout = () => {
    return (  
        <>
            <Navbar />
            
            <main>
                <Outlet />
            </main>

            <ScrollTop />
            <Footer />
        </>
    );
}
 
export default SharedLayout;