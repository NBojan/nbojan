import styled from "styled-components";
import { ProjectsContainer } from "./index";
import { useGlobalContext } from "../context";

const AllProjects = () => {
    const { displayedProjects } = useGlobalContext();

    return (  
        <Wrapper className="section">
            <ProjectsContainer title="NB Projects" projects={displayedProjects} filters />
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background: linear-gradient(5deg, rgba(81,81,93,1) 50%, var(--clr-darkmode2) 50%);
`
export default AllProjects;