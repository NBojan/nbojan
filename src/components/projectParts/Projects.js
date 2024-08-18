import Card from "./Card";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Projects = ({ selectedProjects, isQa }) => {
    const { isLoading, err } = useGlobalContext();
    
    if(isLoading) return <div className="loading"></div>
    if(err){
        return (
            <ErrWrapper>
                <h4>Oops, {err}</h4>
                <button type="button" className="btn btn-m refresh-btn" onClick={() => window.location.reload()}>Refresh Page</button>
            </ErrWrapper>       
        )
    }
    if(selectedProjects.length < 1) return <h4 className="ta-center capitalize">The are no projects left...</h4>
    return (  
        <Wrapper>
            {selectedProjects.map(project => <Card key={project.id} {...project} isQa={isQa} />)}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ErrWrapper = styled.div`
    text-align: center;
    margin-bottom: 16px;

    h4 {
        color: #e0e7ff;
    }
`
export default Projects;