import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoDriven from '../../assets/imagens/Logo_Driven.png'
import FormLogin from './FormLogin'
export default function Login(){
    return(
        <ContainerLogo>
            <img src= {logoDriven} alt='Driven'/>
            <FormLogin />
            <Link to={"/sing-up"}>Não possuí uma conta? Cadastre-se</Link>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
/* height: 100vh; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
`