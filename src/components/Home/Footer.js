import styled from "styled-components"
import { StyleButtons } from "./StyleButtons"

export default function Footer(){
    return(
        <ContainerFooter>
            <StyleButtons corBotao="#FF4791">Mudar Plano</StyleButtons>
            <StyleButtons corBotao="#FF4747">Cancelar plano</StyleButtons>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;


`
