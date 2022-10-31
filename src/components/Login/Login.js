import axios from 'axios'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logoDriven from '../../assets/imagens/Logo_Driven.png'
import { StyleScreen } from '../../assets/styles/StyleScreen'
import { BASEURL } from '../../constants/URLS'
import { UserContext } from '../../context/UserContext'
import FormLogin from './FormLogin'


export default function Login() {

    const { user } = useContext(UserContext)
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (token) {

    //         const dataUser = JSON.parse(localStorage.getItem("userData"))
    //         const infoLogin = {
    //             name: dataUser.name,
    //             password: dataUser.password
    //         }
                
    //         axios.post(`${BASEURL}/auth/login`, infoLogin)
    //             .then(res => { 
    //                 console.log(res) 
    //                 // navigate("/home")
    //             })
    //             .catch(err=>console.log(err))
                
    //     }
    // }, [])



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