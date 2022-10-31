import styled from "styled-components"
import {drivenColor, desitirColor} from "../../constants/Colors"


export default function Confirmation({ plan, setTelaConfimacao, confirmPlan}) {
    return (
        <ContainerConfirmation>
            <BoxConfirmartion >
                <h1>
                    Tem ceteza que deseja assinar o plano {plan.name} (R$ {plan.price})?
                </h1>
                <Botoes>
                    <Botao corBotao={desitirColor} onClick={()=>setTelaConfimacao(false)}>Não</Botao>
                    <Botao corBotao={drivenColor} onClick={confirmPlan}>Sim</Botao>
                </Botoes>
            </BoxConfirmartion>
        </ContainerConfirmation>
    )
}

const ContainerConfirmation = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

`

const BoxConfirmartion = styled.div`
    width: 248px;
    height: 210px;
    background-color: white;
    padding-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 12px;

    h1{
        text-align: center;
        background-color: white;
        color: black;
        font-weight: 700;
        font-size: 18px;
    }
    
`

const Botoes = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    background-color: white;
`

const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 52px;
    background-color: ${props=>props.corBotao};

    font-weight: 700;
    font-size: 14px;

    border-radius: 8px;
    box-sizing:border-box;
    border: none;
`