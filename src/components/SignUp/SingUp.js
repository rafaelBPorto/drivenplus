import { Link } from "react-router-dom"
import styled from "styled-components"
import FormSignUp from "./FormSignUp"

export default function SignUp(){
    return(
        <ContainerSignUp>
            Formulário de Cadastro abaixo
            <FormSignUp />
            <Link to={"/"} >Já possuí uma conta? Entre</Link>
        </ContainerSignUp>
    )
}

const ContainerSignUp = styled.div`
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
