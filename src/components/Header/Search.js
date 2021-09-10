import React from 'react'
import Styled from 'styled-components'


const SearchBox = Styled.input`
    display: flex;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.32);
    color: rgba(255, 255, 255, 0.32);
    border-radius: 8px;
    outline: none;
    padding: 4px 8px;
    flex-grow: 1;
    height: 24px;
    transition: all ease .2s;
    &&:focus{
        color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(255, 255, 255, 1);
        transform: scale(1.01)
    }
    &&::placeholder{
        color:rgba(255, 255, 255, 0.60);
    }
    @media(max-width:1000px){
        order: 3;
        flex-grow: 3;
        display: none;
    }
`

const Search = () => {
    return (
        <SearchBox placeholder={"Buscar título"} />
    )
}

export default Search;