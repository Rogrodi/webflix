import React from 'react'
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoBox = Styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`

const Logo = () => {
    return (
        <LogoBox><h1 style={{color:'white'}}><Link to="/">webFlix</Link></h1></LogoBox>
    )
}

export default Logo;