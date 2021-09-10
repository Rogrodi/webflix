import React from 'react'
import Styled from 'styled-components'


const Box = Styled.input`
    display: flex;
    flex-grow: 1;
    @media(max-width:1000px){
        order: 3;
        display:none;
    }
`

const Search = () => {
    return (
        <Box/>
    )
}

export default Search;