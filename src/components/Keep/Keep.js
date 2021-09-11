import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const KeepBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 50%;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 24px;
    color: rgba(255, 255, 255, 1);
`

const Keep = () => {
    return (
        <KeepBox>
            <Title>
                Keep Watching  
            </Title>
        <Description/>
        </KeepBox>
    )
}

export default Keep; 