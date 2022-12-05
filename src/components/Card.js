import styled from "styled-components";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const Card = ({ name, descr, gitUrl, images, url, featured }) => {
    const [index, setIndex] = useState(0);
    const [read, setRead] = useState(false);

    const nextImg = () => setIndex((index + 1) % images.length);
    const prevImg = () => {
        if(index === 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    return (  
        <Wrapper className="card shadow">
            <div className="img-div">
                {images.map((img, imgIndex) => {
                    let order = 'next';
                    if(imgIndex === index) order = "active";
                    if((imgIndex === index - 1) || (index === 0 && imgIndex === images.length - 1)) order = "previous";
                    return <img src={img.url} alt="Preview" className={`card-image ${order}`} key={img.id} />
                })}
                <div className="chevs">
                    <button type="button" className="chev-btn" onClick={prevImg}><BsChevronLeft /></button>
                    <button type="button" className="chev-btn" onClick={nextImg}><BsChevronRight /></button>
                </div>
            </div>

            <div className="info-div">
                <header>
                    <h4 className={featured ? "card-title featured" :`card-title`}>{name}{featured && "*"}</h4>
                    <p className="desc">
                        {read ? `${descr} ` : `${descr.slice(0,81)}... `}
                        <span className="read-more" onClick={() => setRead(!read)}>{read ? "read less" : "read more"}</span>
                    </p>
                </header>
                <footer>
                    <a href={gitUrl} target="_blank" rel="noreferrer" className="btn btn-s git-btn">Github</a>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-s btn-prim">Visit</a>
                </footer>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    flex-basis: 31.5%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    transition: box-shadow .2s ease;

    .img-div {
        position: relative;
        overflow: hidden;
        height: 240px;
    }
    .card-image {
        position: absolute;
        display: block;
        width: 100%;
        height: 240px;
        opacity: 0;
        object-fit: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        transition: all .3s ease;
    }
    .previous {
        transform: translateX(-100%);
    }
    .active {
        opacity: 1;
    }
    .next {
        transform: translateX(100%);
    }

    .chevs {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
    }
    .chev-btn {
        display: flex;
        background-color: transparent;
        border: transparent;
        cursor: pointer;
        color: var(--clr-grey-1);
        svg {
            width: 24px;
            height: 24px;
        }
    }
    .chev-btn:hover {
        color: var(--clr-grey-5);
    }

    .info-div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 24px;
        background-color: #fff;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top: 1px solid var(--clr-grey-5);
    }

    .card-title {
        font-family: "Quicksand";
        text-transform: capitalize;
    }
    .featured {
        color: #ff6584;
    }
    .desc {
        font-size: 15px;
        letter-spacing: .5px;
        margin-bottom: 12px;
        color: var(--clr-grey-5);
    }
    .read-more {
        color: var(--clr-grey-1);
        cursor: pointer;
    }
    .read-more:hover {
        text-decoration: underline;
    }
    footer a {
        margin-right: 12px;
    }
    footer a:hover {
        transform: scale(1.1);
    }

    .git-btn {
        color: #fff;
	    background-color: #171515;
	    border-color: #171515;
    }
    .git-btn:hover {
        color:#000;
        background-color: #e8eaea;
	    border-color: #e8eaea;
    }

    @media (min-width: 1400px){
        margin-bottom: 40px;
    }
    @media (min-width: 1200px) and (max-width: 1399px){
        margin-bottom: 32px;
    }
    @media (min-width: 992px) and (max-width: 1199px){
        margin-bottom: 26px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        flex-basis: 48%;
        margin-bottom: 30px;
    }
    @media (max-width: 767px){
        flex-basis: 100%;
        margin-bottom: 30px;
    }
    @media (max-width: 575px){
        .card-title {
            font-size: 18px;
        }
        .desc {
            font-size: 14px;
        }
        footer {
            a {
                font-size: 13px;
            }
        }
    }
`
export default Card;