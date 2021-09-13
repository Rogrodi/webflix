import React from 'react'
import Styled from 'styled-components'
import { Link, Route } from 'react-router-dom'


const MenuBox = Styled.nav`
    display: flex;
    justify-content: flex-end;
`

const MenuList = Styled.ul`
    display: flex;
    column-gap: 8px;
` 

const MenuListItem = Styled.li`
    align-items: center;
    display: flex;
`

const MenuListItemLink = Styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    box-sizing: inherit;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all ease .5s;
    &&:hover{
        color: rgba(255, 255, 255, 0.6);
    }
`


const Menu = () => {
    return (
        <MenuBox>
            <MenuList>
                <MenuListItem>
                    <Link to="login">
                    <MenuListItemLink><ion-icon name="person-circle-outline"></ion-icon></MenuListItemLink>
                    </Link>
                </MenuListItem>
            </MenuList>
        </MenuBox>
    )
}

export default Menu;