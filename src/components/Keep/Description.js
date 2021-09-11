import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
display: flex;
column-gap: 16px;
row-gap: 16px;
@media(max-width:1000px){
    
}
`

    const Img = styled.div`
        display: flex;
        flex-shrink: 0;
        width: 250px;
        height: 100%;
        background: linear-gradient(180deg, rgba(138, 135, 135, 0) 12.16%, rgba(58, 58, 60, 0.9) 82.71%), url(${props => props.backgroundImg});
        background-position: center;
        background-size: cover;
        border-radius: 8px;
    `

    const Desc = styled.div`
        display: flex; 
        flex-direction: column;
        row-gap:24px;
        justify-content: space-between;
    `

        const InfoBox = styled.div`
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        `
            const Last = styled.h6`
                font-weight: normal;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.60);
            `

            const Title = styled.h1`
                font-size: 24px;
                color: rgba(255, 255, 255, 1);
            `

            const Overview = styled.p`
                font-size: 16px;
                color: rgba(255, 255, 255, 0.60);
            `


        const BtnsContainer = styled.div`
            display: flex;
            column-gap: 16px;
        `

            const PlayBtn = styled.button`
                background: rgba(191, 90, 242, 1);
                border: none;
                color: rgba(255, 255, 255, 1);
                border-radius: 4px;
                font-size: 14px;
                padding: 8px;
                height:24px;
                width:120px;
                cursor: pointer;
                box-sizing: inherit;
                transition: all ease .5s;
                &&:hover{
                    transform: scale(1.1);
                    box-shadow: 0px 0px 60px -5px #BF5AF2;
                }
            `

            const GiveUpBtn = styled.button`
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
                transition: all ease .5s;
                &&:hover{
                    color: rgba(255, 255, 255, 1);
                }
            `

const Description = () => {
    return(
        <Div>
            <Img backgroundImg={'https://img.olhardigital.com.br/wp-content/uploads/2021/06/Candyman.jpg'}/>
            <Desc>
                <InfoBox>
                    <Last>
                        Episódio 6/10 
                    </Last>
                    <Title>
                        CandyMan
                    </Title>
                    <Overview>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada venenatis velit. Sed egestas, purus ut scelerisque feugiat, augue ipsum volutpat liber.
                    </Overview>
                </InfoBox>
                <BtnsContainer>
                    <PlayBtn>
                        Play
                    </PlayBtn>
                    <GiveUpBtn>
                        Desistir
                    </GiveUpBtn>
                </BtnsContainer>
            </Desc>
        </Div>
    )
}

    export default Description;