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
    background-color: var(--clr-primary-4);
    //background: linear-gradient(135deg, rgba(147,197,253,1) 0%, rgba(96,165,250,1) 35%, rgba(59,130,246,1) 70%, rgba(37,99,235,1) 100%);
    //background-color: #262534;

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