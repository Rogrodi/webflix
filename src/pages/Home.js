import React from "react";
import styled from "styled-components";
import Keep from "../components/Keep/Keep";
import Releases from "../components/Releases/Releases";

const KeepArea = styled.section`
    display: flex;
    align-items: center; 
    justify-content: center;
    padding-bottom: 40px;
`
const KeepArea2 = styled.div`
    display: flex;
    width: 90%;
`

const Home = () => {
    return(
    <>
        <Releases/>
        <KeepArea>
            <KeepArea2><Keep/></KeepArea2>
        </KeepArea>
    </>
    )
}

export default Home;