import react from "react";
import styled from "styled-components";
import List from "./List";

const StartBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    flex-grow: 1;
    max-width: 45%;
    @media(max-width:1000px){
        max-width: 100%;
    }
`

const Title = styled.h1`
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
`

const Div = styled.div`
    display: flex;
    max-height: 60vh;
    overflow-Y: scroll;
    flex-direction: column;
    row-gap: 20px;
    @media(max-width:1000px){
        flex-direction: row;
        column-gap: 20px;
        overflow-X: scroll;
        overflow-Y: hidden;
    }
`


const Start = () => {
    return(
        <StartBox>
                <Title>
                    Start something new
                </Title>
                <Div>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                </Div>
        </StartBox>
    )
}

export default Start;