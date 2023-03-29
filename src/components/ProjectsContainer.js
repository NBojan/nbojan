import { Projects, Filters } from "./index";
import styled from "styled-components";

const ProjectsContainer = ({ title="default", projects=[], filters }) => {
    return (  
        <Wrapper className="containerBoot m-auto">
            <div className="title">
                <h3>{title}</h3>
                <div className="underline"></div>
            </div>

            {filters && <Filters />}

            <Projects selectedProjects={projects} />
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