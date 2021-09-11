import React from "react";
import styled from "styled-components";
import Keep from "../components/Keep/Keep";
import Releases from "../components/Releases/Releases";
import Start from "../components/Start/Start";

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
    <>
        <Releases/>
        <KeepArea>
            <KeepArea2>
                <Keep/>
                <Start/>
            </KeepArea2>
        </KeepArea>
    </>
    )
}

export default Home;