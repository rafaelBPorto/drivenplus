import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASEURL } from "../../constants/URLS";
import { TokenContex } from "../../context/TokenContext";

export default function FormLogin() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const { submit } = useContext(TokenContex)
    const navigate = useNavigate()

    const infoLogin = {
        email,
        password: senha
    }

    function handleSubmit(e) {
        axios.post(`${BASEURL}/auth/login`, infoLogin)
            .then(res => {

                const token = res.data.token
                console.log(token)
                submit(token)
                navigate('/subscription')
            })
            .catch(err => alert(err.response.data.message)
            )
        e.preventDefault()
        console.log(email)
        console.log(senha)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="senha"
                onChange={(e) => setSenha(e.target.value)}
                required
            />

            <button type="submit">Entrar</button>

        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
`