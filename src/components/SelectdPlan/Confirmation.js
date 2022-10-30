import styled from "styled-components"

export default function Confirmation({ plan, setTelaConfimacao, confirmPlan}) {
    return (
        <ContainerConfirmation>
            <BoxConfirmartion >
                <div>
                    Tem ceteza que deseja assinaro plano {plan.name} (R$ {plan.price})?
                </div>
                <Botoes>
                    <button onClick={()=>setTelaConfimacao(false)}>Não</button>
                    <button onClick={confirmPlan}>Sim</button>
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
`

const BoxConfirmartion = styled.div`
    width: 248px;
    height: 210px;
    background-color: white;
    padding-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
    box-sizing: border-box;
`

const Botoes = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;

    button{
        width: 95px;
        height: 52px;
    }
`