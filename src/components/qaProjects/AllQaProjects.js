import styled from "styled-components";
import { ProjectsContainer } from "..";
import { useGlobalContext } from "../../context";

const AllWebProjects = () => {
    const { projectsQa } = useGlobalContext();

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB QA Projects" projects={projectsQa} filters={false} isQa={true} />
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background: #2a5078;
`
export default AllWebProjects;