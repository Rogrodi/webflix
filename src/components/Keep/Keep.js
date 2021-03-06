import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const KeepBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width:60%;
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
    overflow:hidden;
    flex-direction: row;
    column-gap: 36px;
    max-height: 30vh;
`


const Keep = () => {
    return (
        <KeepBox>
            <Title>
                Keep Watching  
            </Title>
            <Div>
                <Description/>
                <Description/>
                <Description/>
            </Div>
        </KeepBox>
    )
}

export default Keep; 