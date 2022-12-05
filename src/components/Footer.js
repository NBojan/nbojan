import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (  
        <Wrapper>
            <p>© {new Date().getFullYear()} <span>NBojan</span></p>
            <div className="d-flex justify-center align-center flex-wrap">
                <p className="mr-8">bojannoveski@hotmail.com</p>
                <a href="https://www.linkedin.com/in/bojan-noveski-018a14241" className="lh-0">
                    <BsLinkedin />
                </a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: #262534;

    p {
        color: #fff;
        span {
            color: var(--clr-primary-5);
        }
    }

    a {
        font-size: 18px;
        color: var(--clr-primary-5);
    }
`
export default Footer;