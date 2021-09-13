import React from "react";
import styled from "styled-components";
import ForYou from "../components/ForYou/ForYou";
import Keep from "../components/Keep/Keep";
import Releases from "../components/Releases/Releases";
import Start from "../components/Start/Start";


const Div = styled.main`
    display: flex;
    flex-direction: column;
    row-gap: 36px;
`

const KeepArea = styled.section`
    display: flex;
    align-items: center; 
    justify-content: center;
    padding-bottom: 40px;
`
const KeepArea2 = styled.div`
    column-gap: 24px;
    row-gap: 72px;
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Home = () => {

    return(
    <Div>
        <Releases/>
        <KeepArea>
            <KeepArea2>
                <Keep/>
                <Start/>
            </KeepArea2>
        </KeepArea>
        <ForYou title={'For You'} API={'https://api.themoviedb.org/3/movie/upcoming?api_key=7ac072d7b0b3b497202fa87a9bcf3a1f&language=pt-BR&page=1'}/>
        <ForYou title={'Up coming'} API={'https://api.themoviedb.org/3/movie/popular?api_key=7ac072d7b0b3b497202fa87a9bcf3a1f&language=pt-BR&page=1'}/>
        <ForYou title={'Trending'} API={'https://api.themoviedb.org/3/trending/movie/day?api_key=7ac072d7b0b3b497202fa87a9bcf3a1f&language=pt-BR'}/>
        <ForYou title={'Your friends are enjoying'} API={'https://api.themoviedb.org/3/movie/popular?api_key=7ac072d7b0b3b497202fa87a9bcf3a1f&language=pt-BR&page=1'}/>
    </Div>
    )
}

export default Home;