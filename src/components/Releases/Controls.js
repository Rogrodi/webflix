import React from 'react'
import styled from 'styled-components';

const Play = styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 1);
    font-size: 36px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    box-sizing: inherit;
    transition: all ease .5s;
    &&:hover{
        transform: scale(1.5);
        color: rgba(191, 90, 242, 1);
    }
`

const Next = styled(Play)`
    color: rgba(255, 255, 255, 0.6);
    font-size: 22px;
`

const Previous = styled(Next)``
const Favorite = styled(Next)``
const Add = styled(Next)``



const Box = styled.div`
    display: flex;
    column-gap: 8px;
    align-items: center;

`

const Controls = () => {
    return(
        <Box>
            <Previous>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </Previous>
            <Favorite>
                <ion-icon name="heart-outline"></ion-icon>
            </Favorite>
            <Play>
                <ion-icon name="play-circle-outline"></ion-icon>
            </Play>
            <Add>
                <ion-icon name="add-outline"></ion-icon>
            </Add>
            <Next>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </Next>
        </Box>
    )
}

export default Controls;