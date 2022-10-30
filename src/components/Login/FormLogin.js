import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASEURL } from "../../constants/URLS";
import { UserContext } from "../../context/UserContext";

export default function FormLogin() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const { submit } = useContext(UserContext)
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
                submit(user)
                localStorage.setItem("token", user.token)
                navigate('/subscription')
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

            <button type="submit">Entrar</button>

        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
`