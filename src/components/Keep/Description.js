import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
display: flex;
column-gap: 16px;
row-gap: 16px;
border: 1px solid #363535;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 16px;
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
                    box-shadow: 0px 0px 60px -5px #BF5AF2;
                }
            `

            const GiveUpBtn = styled.button`
                background: none;
                border: none;
                height:24px;
                padding: 8px;
                box-sizing: inherit;
                width:48px;
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
            <Img backgroundImg={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F05%2F23%2Fphysical-2000.jpg'}/>
            <Desc>
                <InfoBox>
                    <Last>
                        Episódio 6/10 
                    </Last>
                    <Title>
                        Physical
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