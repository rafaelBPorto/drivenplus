import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASEURL } from "../../constants/URLS";
import { UserContext } from "../../context/UserContext";
import {drivenColor} from "../../constants/Colors"

export default function FormLogin() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const { submit } = useContext(UserContext)
    const {setLoginUser} = useContext(UserContext)
    const navigate = useNavigate()

    const infoLogin = {
        email,
        password: senha
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`${BASEURL}/auth/login`, infoLogin)
            .then(res => {
                const user = res.data
                setLoginUser(infoLogin)
                submit(user)
                localStorage.setItem("token", user.token)
                localStorage.setItem("userData", JSON.stringify(user))
                if(user.membership){
                    navigate("/home")
                }else{
                    navigate('/subscription')
                    
                }
})
            .catch(err => alert(err.response.data.message)
            )
    
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
                required
            />

            <Botao corBotao={drivenColor} type="submit">Entrar</Botao>

        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;

    button{
        
    }
`

const Botao = styled.button`
    background-color: ${props=>props.corBotao};
    border-radius: 8px;
    height: 52px;
    width: 299px;
    box-sizing:border-box;
    border: none;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;


`