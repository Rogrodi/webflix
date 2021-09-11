import react from "react";
import styled from "styled-components";

const Img = styled.div`
    width: 150px;
    height: 200px;
    background: url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    opacity: 60%;
    flex-shrink: 0;
    border-radius: 8px;
    transition: all ease .5s;
    &&:hover{
        transform: scale(1.1);
        opacity: 100%;
    }
`

const Item = () => {
    return(
        <Img backgroundImg={'https://pbs.twimg.com/media/EQBNWohXUAEbZUL?format=jpg&name=large'}/>
    )
}

export default Item;