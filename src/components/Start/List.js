import react from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
`
const Item = styled.div`
    display: flex;
    padding: 16px;
    column-gap: 8px;
    border-radius: 8px;
    background: linear-gradient(93.67deg, rgba(255, 255, 255, 0.08) 0%, rgba(8, 8, 9, 0.16) 99.54%);
    border: 1px solid #363535;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
    const Img = styled.div`
        height: 100%;
        width: 120px;
        background: url(${props => props.backgroundImg});
        background-position: center;
        background-size: cover;
        border-radius: 8px;
        display: flex;
        flex-shrink: 0;
    `
    const ItemInfo = styled.div`
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    `
        const Title = styled.h2`
            color: rgba(255, 255, 255, 1);
            font-size: 1.000em;
        `
        const Atributos = styled.ul`
            display: flex;
            column-gap: 1.500em;
        `
            const AtributosItem = styled.li`
                display: inline-flex;
                color: rgba(255, 255, 255, 0.60);
                font-size: 0.875em;
            `
        const Span = styled.span`
            color: rgba(255, 255, 255, 0.60);
            font-size: 0.875em;
        `

    const Btn = styled.button`
        background: none;
        height:24px;
        padding:8px;
        outline: none;
        font-size: 1.5em;
        display: flex;
        box-sizing: inherit;
        border: none;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.60);
        &&:hover{
            color: rgba(255, 255, 255, 1);
        }
    `

    


const List = () => {
    return(
        <Div>
            <Item>
                <Img backgroundImg={'https://www.einerd.com.br/wp-content/uploads/2021/08/shang-chi-poster.jpg'}/>
                <ItemInfo>
                <Title>
                    Shang-Chi e a Lenda dos Dez Anéis
                </Title>
                    <Atributos>
                        <AtributosItem>
                            Filme
                        </AtributosItem>
                        <AtributosItem>
                            Ação
                        </AtributosItem>
                        <AtributosItem>
                            2h e 30Min
                        </AtributosItem>
                    </Atributos>
                    <Span>
                        A partir da sua lista de interesses. 
                    </Span>
                </ItemInfo>
                <Btn>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </Btn>
            </Item>
        </Div>
    )
}

export default List;