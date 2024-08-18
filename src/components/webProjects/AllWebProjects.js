import styled from "styled-components";
import { ProjectsContainer } from "..";
import { useGlobalContext } from "../../context";

const AllWebProjects = () => {
    const { displayedProjectsWeb } = useGlobalContext();

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB Web Projects" projects={displayedProjectsWeb} filters={true} isQa={false} />
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background: #2a5078;
`
export default AllWebProjects;