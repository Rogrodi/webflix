import react from "react";
import styled from "styled-components";

const Img = styled.div`
    width: 250px;
    height: 150px;
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
    transition: all ease .5s;
    &&:hover{
        transform: scale(1.1);
        opacity: 100%;
    }
`

const Item = ({backgroundImg, movieTitle}) => {
    return(
        <Img backgroundImg={backgroundImg}>{movieTitle}</Img>
    )
}

export default Item;