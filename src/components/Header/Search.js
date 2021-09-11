import React from 'react'
import Styled from 'styled-components'


const SearchBox = Styled.div`
    display: flex;
    background: none;
    align-items: center;
    padding: 0px 8px;
    box-sizing: inherit;
    border: 1px solid rgba(255, 255, 255, 0.32);
    color: rgba(255, 255, 255, 0.32);
    border-radius: 8px;
    @media(max-width:1000px){
        border: none;
    }
    &&:focus{
        color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(255, 255, 255, 1);
    }
`

const Button = Styled.button`
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.36);
    font-size: 22px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    box-sizing: inherit;
    transition: all ease .5s;
    &&:hover{
        color: rgba(255, 255, 255, 1);
    }
`

const Input = Styled.input`
    display: flex;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.32);
    border-radius: 8px;
    outline: none;
    width: 350px;
    flex-grow: 1;
    height: 24px;
    transition: all ease .2s;
    &&::placeholder{
        color:rgba(255, 255, 255, 0.60);
    }
    @media(max-width:1000px){
        display:none;
    }
`

const Search = () => {
    return (
        <SearchBox>
            <Input placeholder={"Buscar título"} />
            <Button>
                <ion-icon name="search-outline"/>
            </Button>
        </SearchBox>
       
    )
}

export default Search;