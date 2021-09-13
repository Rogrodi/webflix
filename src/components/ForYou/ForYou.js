import React from "react";
import styled from "styled-components";
import Item from "./Item";


const Section = styled.section`
    display: flex;
    justify-content: center; 
`

const Div = styled.section`
    display: flex;
    width: 90%;
    flex-direction: column;
`

const Title = styled.h2`
    color: white;
    font-size: 1.500em;
`

const List = styled.div`
    display: flex;
    padding:18px;
    overflow-X: scroll;
    flex-direction: row;
    column-gap: 18px;
   
`


const ForYou = ({title,API}) => {

    const [list, setList] = React.useState([])
    React.useEffect( () => { 

        let teste;
        const BasicFetch = async () => {
            const req = await fetch(API);
            const json = await req.json();
            teste = json.results
            let filme = teste.map((item,index) => {
               return( 
                    {
                        movieTitle: item.title,
                        movieImg: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                    }
                )
            })
            setList(filme)
           
        }
    BasicFetch();
    },[]);


    return(
        <Section>
            <Div>
                <Title>
                    {title}{console.log(list)}
                </Title>
                <List>
                    {list.map((item) => {
                        return(
                        <Item backgroundImg={item.movieImg} movieTitle={item.movieTitle}/>
                        )
                    })}
                </List>
            </Div>
        </Section>
    )

}

export default ForYou;