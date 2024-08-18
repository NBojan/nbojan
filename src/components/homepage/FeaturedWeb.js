import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectsContainer } from "../index";
import { useGlobalContext } from "../../context";

const FeaturedWeb = () => {
    const { featuredWeb } = useGlobalContext();
    const chosenFeatured = featuredWeb.slice(0, 3);
    
    return (  
        <Wrapper className="section">
            <ProjectsContainer title="featured web projects" projects={chosenFeatured} filters={false} isQa={false} />

            <div className="link-div">
                <Link to="/projects" className="btn btn-m btn-dark capitalize">See all projects</Link>
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    background-color: var(--clr-primary-5);

    .link-div {
        display: flex;
        justify-content: center;
    }
`
export default FeaturedWeb;