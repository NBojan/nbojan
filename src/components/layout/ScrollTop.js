import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollTop = () => {
    const { showScrollTop } = useGlobalContext();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (  
        <Wrapper className={showScrollTop ? "showScroll" : "hideScroll"} onClick={scrollToTop}>
            <AiOutlineArrowUp />
        </Wrapper>
    );
}
const Wrapper = styled.button`
    display: flex;
    position: fixed;
    bottom: 28px;
    right: 28px;
    font-size: 24px;
    padding: 8px;
    border-radius: 50%;
    border: 1px solid #e8eaea;
    color: #e8eaea;
    background-color: transparent;
    transition: all .2s linear;
    cursor: pointer;
    :hover {
        color: #222;
        background-color: #e8eaea;
    }

    @media (max-width: 991px){
        bottom: 24px;
        right: 24px;
    }
    @media (max-width: 767px){
        bottom: 20px;
        right: 20px;
    }
    @media (max-width: 575px){
        bottom: 16px;
        right: 16px;
        font-size: 20px;
    }
`
export default ScrollTop;