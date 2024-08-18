import styled from "styled-components";
import heroImg from "../../assets/images/thinking.svg";

const ProjectsHero = () => {
    return (  
        <Wrapper className="hero bg-filler">
            <article className="containerBoot m-auto container">
                <div className="info-div">
                    <h2 className="capitalize"><span>NBojan</span> web projects</h2>
                    <p className="light-col">
                        Here, you'll find a collection of my web development projects, 
                        showcasing my skills in creating dynamic, responsive, and user-friendly websites.
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
    min-height: 100vh;
    padding: 7rem 0 2rem;
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, var(--clr-primary-1) 50%);

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
        font-family: "Quicksand";
        p {
            line-height: 2;
            font-weight: 500;
        }
    }
    h2 {
        span {
            color: var(--clr-primary-5);
        }
    }

    @media(max-width: 991px){
        padding: 2rem 0;
        background: var(--clr-primary-1);
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
export default ProjectsHero;