import React from 'react'
import styled from 'styled-components';
import Description from './Description';
import Controls from './Controls';

const ReleaseContainer = styled.section`
    margin-top: -80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(180deg, #000000 0%, rgba(10, 10, 11, 0.6) 12.5%, rgba(28, 28, 30, 0.6) 84.82%, #1C1C1E 100%), url(${props => props.backgroundImg});
    background-position: center;
    background-size: cover;
    flex-direction: column;
    height: 100vh;
    row-gap: 16px;
`
const ReleaseBox = styled.div`
    margin-top: 80px;
    display:flex;
    width: 90%;
    height: 65%;
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
            {/* <Controls/> */}
        </ReleaseContainer>
    )
}

export default Releases;