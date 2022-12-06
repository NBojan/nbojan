import styled from "styled-components";
import heroImg from "../assets/images/programming.svg";

const Hero = () => {
    return (  
        <Wrapper className="page hero">
            <article className="containerBoot m-auto container">
                <div className="info-div">
                    <h2 className="capitalize">Project page <span>NBojan</span></h2>
                    <p className="light-col">
                        Welcome! NB Projects is a web page that displays different projects made for the purpose of presenting my work.
                        Links available to visit or check out the source code on Github.
                    </p>
                </div>

                <div className="image-div lh-0">
                    <img src={heroImg} alt="Fancy Person" className="w100"/>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    padding: 24px 0;
    //background: linear-gradient(270deg, rgba(239,246,255,1) 0%, rgba(191,219,254,1) 100%);

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .image-div {
        flex-basis: 50%;
    }
    .info-div {
        flex-basis: 41%;
        p {
            line-height: 2;
            letter-spacing: 1px;
        }
    }
    h2 {
        span {
            color: var(--clr-primary-5);
        }
    }

    @media (max-width: 767px){
        .image-div {
            display: none;
        }
        .info-div {
            flex-basis: 100%;
        }
    }
    @media (max-width: 575px){
        .container {
            width: 90%;
        }
        h2 {
            font-size: 24px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 300px){
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`
export default Hero;