import react from "react";
import styled from "styled-components";
import Item from "./Item";


const Section = styled.section`
    display: flex;
    justify-content: center; 
`

const Div = styled.section`
    display: flex;
    width: 90%;
    flex-direction: column;
`

const Title = styled.h2`
    color: white;
    font-size: 1.500em;
`

const List = styled.div`
    display: flex;
    padding:18px;
    overflow-X: scroll;
    flex-direction: row;
    column-gap: 18px;
    padding-bottom: 36px;
`


const ForYou = () => {
    return(
        <Section>
            <Div>
                <Title>
                    For You
                </Title>
                <List>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </List>
            </Div>
        </Section>
    )

}

export default ForYou;