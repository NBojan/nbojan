import styled from "styled-components";
import logo from "../assets/logo/FQ.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <Wrapper>
            <nav className="containerBoot m-auto">
                <Link to="/" className="logo-div lh-0">
                    <img src={logo} alt="NBojan"  />
                </Link>

                <Link to="/about" className="btn btn-m btn-prim about-btn capitalize">about</Link>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    height: 80px;
    background-color: #262534;
    box-shadow: var(--light-shadow);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    @media (max-width: 991px){
        .about-btn {
            padding: 4px 8px;
	        font-size: 14px;
	        letter-spacing: 1px;
        }
    }
    @media (max-width: 575px){
        nav {
            width: 90%;
        }
    }
`
export default Navbar;