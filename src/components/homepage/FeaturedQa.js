import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectsContainer } from "../index";
import { useGlobalContext } from "../../context";

const FeaturedQa = () => {
    const { featuredQa } = useGlobalContext();
    const chosenFeatured = featuredQa.slice(0, 3);
    
    return (  
        <Wrapper className="section">
            <ProjectsContainer title="featured QA projects" projects={chosenFeatured} filters={false} isQa={true} />
            
            <div className="link-div">
                <Link to="/qaprojects" className="btn btn-m btn-prim capitalize">See all projects</Link>
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background-color: var(--clr-primary-9);

    .link-div {
        display: flex;
        justify-content: center;
    }
`
export default FeaturedQa;