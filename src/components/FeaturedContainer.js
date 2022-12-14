import Projects from "./Projects";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const FeaturedContainer = () => {
    const { featured } = useGlobalContext();
    const chosenFeatured = featured.slice(0, 3);
    return (  
        <Wrapper>
            <article className="containerBoot m-auto">
                <div className="title">
                    <h3>NB Featured</h3>
                    <div className="underline"></div>
                </div>

                <Projects selectedProjects={chosenFeatured} />
            </article>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    padding: 48px 0;
    background-color: var(--clr-primary-5);

    .title {
        text-align: center;
        margin-bottom: 48px;
        h3 {
            margin-bottom: 16px;
            color: #fff;
        }
    }

    @media (max-width: 575px){
        padding: 40px 0;
    } 
`
export default FeaturedContainer;