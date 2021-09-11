import React from 'react'
import Styled from 'styled-components';
import Search from './Search';
import Menu from './Menu';
import Logo from './Logo';

const Organism = Styled.header`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 99;
`

const Molecule = Styled.div`
    padding:16px;
    display: flex; 
    flex-wrap: wrap;
    min-height:40px;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`

const Div = Styled.div`
    display: flex; 
    flex-grow: 1.5;
    justify-content: space-between;
    @media(max-width:1000px){
        justify-content: flex-end;
    }
`


const Header = () => {
    return (
    <Organism>
        <Molecule>
            <Logo/>
            <Div>
                <Search/>
                <Menu/>
            </Div>
        </Molecule>
    </Organism>
    )
}

export default Header;