import react from "react";
import styled from "styled-components";

const Img = styled.div`
    width: 180px;
    height: 250px;
    background:linear-gradient(180deg, rgba(13, 13, 13, 0) 3.65%, #1C1C1E 100%), url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    opacity: 60%;
    justify-content: center;
    align-items: flex-end;
    padding: 8px;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    display: flex;
    flex-shrink: 0;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: all ease .5s;
    transform: scale(0.9);
    &&:hover{
        transform: scale(1);
        opacity: 100%;
    }
`

const Item = ({backgroundImg, movieTitle}) => {
    return(
        <Img backgroundImg={backgroundImg}>{movieTitle}</Img>
    )
}

export default Item;