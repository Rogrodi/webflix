import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Title = styled.h1`
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
`

const Overview = styled.p`
    font-size: 1em;
    color: rgba(255, 255, 255, 0.6);
    &&:hover ${Title}{
        color:blue;
    }
`

const Description = () => {
    return(
        <Box>
            <Title>
                Candyman
            </Title>
            <Overview>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada venenatis velit. Sed egestas, purus ut scelerisque feugiat, augue ipsum volutpat liber.
            </Overview>
        </Box>
    )
}

export default Description;