import React from 'react'
import Styled from 'styled-components';
import Search from './Search';
import Menu from './Menu';
import Logo from './Logo';

const Organism = Styled.header`
    display:flex;
    align-items: center;
    justify-content: center;
    background: blue;
`

const Molecule = Styled.div`
    padding:8px;
    display: flex; 
    flex-wrap: wrap;
    min-height:40px;
    width: 90%;
    justify-content: space-between;
`


const Header = () => {
    return (
    <Organism>
        <Molecule>
            <Logo/>
            <Search/>
            <Menu/>
        </Molecule>
    </Organism>
    )
}

export default Header;