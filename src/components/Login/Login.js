import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logoDriven from '../../assets/imagens/Logo_Driven.png'
import { StyleScreen } from '../../assets/styles/StyleScreen'
import { UserContext } from '../../context/UserContext'
import FormLogin from './FormLogin'


export default function Login(){

    const navigate = useNavigate()
    const {submit} = useContext(UserContext)


    const token = localStorage.getItem("token")
    // if(token){
    //     const user = JSON.parse(localStorage.getItem("userData"))
    //     submit(user)
    //     navigate("/home")
    // }
    return(
        <StyleScreen>
            <LogoImg src= {logoDriven} alt='Driven'/>
            <FormLogin />
            <Link to={"/sing-up"}>Não possuí uma conta? Cadastre-se</Link>
        </StyleScreen>
    )
}

const LogoImg = styled.img`
    width: 299px;

`