import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoDriven from '../../assets/imagens/Logo_Driven.png'
import { StyleScreen } from '../../assets/styles/StyleScreen'
import FormLogin from './FormLogin'


export default function Login() {

    return (
        <StyleScreen>
            <LogoImg src={logoDriven} alt='Driven' />
            <FormLogin />
            <Link to={"/sing-up"}>Não possuí uma conta? Cadastre-se</Link>
        </StyleScreen>
    )
}

const LogoImg = styled.img`
    width: 299px;

`