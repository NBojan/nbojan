import { Outlet } from "react-router-dom";
import { Navbar, ScrollTop, Footer, Sidebar } from "../components";

const SharedLayout = () => {
    return (  
        <>
            <Navbar />
            <Sidebar />
            
            <main>
                <Outlet />
            </main>

            <ScrollTop />
            <Footer />
        </>
    );
}
 
export default SharedLayout;