import styled from "styled-components";
import { Projects, Filters } from "../index";

const ProjectsContainer = ({ title="default", projects=[], filters, isQa }) => {
    return (  
        <Wrapper className="containerBoot m-auto">
            <div className="title">
                <h3>{title}</h3>
                <div className="underline"></div>
            </div>

            {filters && <Filters />}

            <Projects selectedProjects={projects} isQa={isQa} />
        </Wrapper>
    );
}
 
const Wrapper = styled.article`
    .title {
        text-align: center;
        margin-bottom: 40px;
        h3 {
            margin-bottom: 16px;
            color: #fff;
        }
    }
`
export default ProjectsContainer;