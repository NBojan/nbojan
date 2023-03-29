import styled from "styled-components";
import { ProjectsContainer } from "./index";
import { useGlobalContext } from "../context";

const Featured = () => {
    const { featured } = useGlobalContext();
    const chosenFeatured = featured.slice(0, 3);
    return (  
        <Wrapper className="section">
            <ProjectsContainer title="featured" projects={chosenFeatured} />
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background-color: var(--clr-primary-4);
`
export default Featured;