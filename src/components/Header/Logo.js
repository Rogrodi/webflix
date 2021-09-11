import React from 'react'
import Styled from 'styled-components';

const LogoBox = Styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`

const Logo = () => {
    return (
        <LogoBox><h1 style={{color:'white'}}>webFlix</h1></LogoBox>
    )
}

export default Logo;