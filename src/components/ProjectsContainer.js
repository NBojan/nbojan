import Projects from "./Projects";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const ProjectsContainer = () => {
    const { projects } = useGlobalContext();

    return (  
        <Wrapper>
            <div className="w100"></div>
            <article className="containerBoot m-auto">
                <div className="title">
                    <h3>NB Projects</h3>
                    <div className="underline"></div>
                </div>

                <Projects selectedProjects={projects} />
            </article>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    padding: 64px 0;
    //background: linear-gradient(5deg, rgba(81,81,93,1) 50%, rgba(38,37,52,1) 50%);
    background: linear-gradient(5deg, rgba(81,81,93,1) 50%, var(--clr-darkmode2) 50%);

    .title {
        text-align: center;
        margin-bottom: 48px;
        h3 {
            margin-bottom: 16px;
            color: #fff;
        }
    }

    @media (max-width: 575px){
        padding: 48px 0;
    }
`
export default ProjectsContainer;