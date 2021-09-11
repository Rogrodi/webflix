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
        <ForYou/>
        <ForYou/>
        <ForYou/>
    </Div>
    )
}

export default Home;