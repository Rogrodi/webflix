import React from 'react'
import styled from 'styled-components';
import Description from './Description';
import Controls from './Controls';

const ReleaseContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(180deg, #000000 0%, rgba(28, 28, 30, 0.6) 12.92%, #1C1C1E 82.71%), url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
    flex-direction: column;
    height: 85vh;
    row-gap: 16px;
`
const ReleaseBox = styled.div`
    display:flex;
    width: 90%;
    height: 70%;
    background: blue;
    border-radius: 20px;
    justify-content: center; 
    align-items: flex-end;
    padding: 20px;
    background: linear-gradient(180deg, rgba(138, 135, 135, 0) 12.16%, rgba(58, 58, 60, 0.9) 82.71%), url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    transition: all ease .5s;
    &&:hover{
        transform: scale(1.01)
    }
`


const Releases = () => {
    return(
        <ReleaseContainer backgroundImg={'https://img.olhardigital.com.br/wp-content/uploads/2021/07/Maligno.jpg'}>
            <ReleaseBox backgroundImg={'https://img.olhardigital.com.br/wp-content/uploads/2021/07/Maligno.jpg'}>
                <Description/>
            </ReleaseBox>
            <Controls/>
        </ReleaseContainer>
    )
}

export default Releases;