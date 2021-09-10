import React from 'react'
import Styled from 'styled-components';

const LogoBox = Styled.div`
    display: flex;
    flex-grow: 2;
    align-items: center;
`

const Logo = () => {
    return (
        <LogoBox>Ola</LogoBox>
    )
}

export default Logo;