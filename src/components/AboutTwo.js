import styled from "styled-components";
import aboutImg from "../assets/images/my-app.svg";

const AboutTwo = () => {
    return (  
        <Wrapper className="about-two">
            <article className="containerBoot m-auto container">
                <div className="image-div lh-0">
                    <img src={aboutImg} alt="Fancy Person" className="w100"/>
                </div>

                <div className="info-div">
                    <h3 className="capitalize"><span>about</span> me</h3>
                    <p className="light-col">
                        I am a new programmer fighting for a spot in the IT world by displaying my work, 
                        trying to seize any opportunity for expanding my skill-set by working on other bigger projects. 
                        My purpose is to translate my knowledge into practice and make it a career.
                    </p>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    background: linear-gradient(45deg, rgba(81,81,93,1) 50%, rgba(38,37,52,1) 50%);
    //background: linear-gradient(45deg, rgba(81,81,93,1) 0%, rgba(38,37,52,1) 50%);
    //background: linear-gradient(90deg, rgba(191,219,254,1) 0%, rgba(239,246,255,1) 100%);
    padding: 80px 0;

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
            color: #e8eaea;
            line-height: 2;
            letter-spacing: 1px;
        }
    }
    h3 {
        color: #e8eaea;
        span {
            color: var(--clr-primary-5);
        }
    }

    @media (max-width: 991px){
        padding: 64px 0;
    }
    @media (max-width: 767px){
        background: linear-gradient(45deg, rgba(81,81,93,1) 50%, rgba(38,37,52,1) 50%);
        padding: 48px 0;

        .container {
            flex-direction: column;
        }
        .image-div,
        .info-div {
            flex-basis: auto;
        }
        .image-div {
            margin-bottom: 32px;
        }
    }
    @media (max-width: 575px){
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

export default AboutTwo;