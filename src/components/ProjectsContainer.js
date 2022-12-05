import Projects from "./Projects";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const ProjectsContainer = () => {
    const { projects } = useGlobalContext();

    return (  
        <Wrapper>
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
    //background: linear-gradient(135deg, rgba(147,197,253,1) 0%, rgba(96,165,250,1) 35%, rgba(59,130,246,1) 70%, rgba(37,99,235,1) 100%);
    //background: linear-gradient(45deg, rgba(96,165,250,1) 50%, rgba(59,130,246,1) 50%);
    background: linear-gradient(45deg, rgba(81,81,93,1) 50%, rgba(38,37,52,1) 50%);

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