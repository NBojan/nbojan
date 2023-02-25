import styled from "styled-components";
import aboutImg from "../assets/images/hello.svg";
import vector from "../assets/images/vector.svg";

const AboutOne = () => {
    return (  
        <Wrapper className="about-one page bg-filler ">
            <article className="containerBoot m-auto container">
                <div className="info-div">
                    <h3 className="capitalize">hey, <span>nice to meet you!</span></h3>
                    <p className="light-col">
                        My name is Bojan and this page represents my creative space, where just with a flew clicks you can view some of my projects.
                        On that note feel free to explore the page and review my work.
                    </p>
                </div>

                <div className="image-div lh-0">
                    <img src={aboutImg} alt="Fancy Person" className="w100"/>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    position: relative;
    padding: 7rem 0 2rem;
    background-color: var(--clr-mainBack);
    
    ::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: url(${vector});
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
    }

    .image-div {
        flex-basis: 50%;
    }
    .info-div {
        flex-basis: 41%;
        font-family: "Quicksand";
        p {
            line-height: 2;
            font-weight: 500;
        }
    }
    h3 {
        span {
            color: var(--clr-primary-5);
        }
    }

    @media(max-width: 991px){
        padding: 2rem 0;
        ::after {
            height: 25%;
        }
    }
    @media (max-width: 767px){
        ::after {
            height: 20%;
        }
        .image-div {
            display: none;
        }
        .info-div {
            flex-basis: 100%;
        }
    }
    @media (max-width: 575px){
        ::after {
            height: 15%;
        }
        .container {
            width: 90%;
        }
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (max-width: 300px){
        h3 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`

export default AboutOne;