import styled from "styled-components";
import errorImg from "../assets/images/stars.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Oops - NBojan";
        return () => document.title= prevTitle
    }, []);

    return (  
        <Wrapper>
            <div className="cont">
                <img src={errorImg} alt="404 Error" className="w100"/>
                <div className="ta-center mt-24">
                    <h4>That page got lost in space.</h4>
                    <p className="mb-12 ls-1 light-col">Having hard time finding it.</p>
                    <Link to="/" className="btn btn-m btn-prim capitalize">back to homepage</Link>
                </div>
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    min-height: 100vh;

    .cont {
        width: 90%;
        max-width: 600px;
    }
    
    @media (max-width: 575px){
        h4 {
            font-size: 18px;
        }
        a {
            padding: 4px 8px;
	        font-size: 14px;
	        letter-spacing: 1px;
        }
    }
    @media (max-width: 300px){
        h4 {
            font-size: 15px;
        }
        p {
            font-size: 14px;
        }
    }
`
export default ErrorPage;