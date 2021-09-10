import React from 'react'
import Styled from 'styled-components'


const MenuBox = Styled.nav`
    display: flex;
    flex-grow: 2;
    justify-content: flex-end;
`

const MenuList = Styled.ul`
    display: flex;
    column-gap: 8px;
` 

const MenuListItem = Styled.li`
    display: inline-flex;
`

const MenuListItemLink = Styled.a`
    display: flex;
    height: 24px;
    padding: 8px;
    text-decoration: none; 
    cursor: pointer;
`


const Menu = () => {
    return (
        <MenuBox>
            <MenuList>
                <MenuListItem>
                    <MenuListItemLink href="/">Home</MenuListItemLink>
                </MenuListItem>
            </MenuList>
        </MenuBox>
    )
}

export default Menu;