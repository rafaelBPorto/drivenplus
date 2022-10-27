import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {BASEURL} from "../../constants/URLS"

export default function FormSignUp(){
    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    const navigate = useNavigate()

    const infoSingUp ={
        email,
        name: nome,
        cpf,
        password: senha
    }

    function handleSubmit(e){
        e.preventDefault()

        axios.post(`${BASEURL}/auth/sign-up`, infoSingUp)
            .then(res=>{
                alert("usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch(err => {
                alert(err.response.data.message)});
    }

    return(
        <Form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={(e)=>setNome(e.target.value)}
                required
            />

            <input 
                type="number"
                name="cpf"
                placeholder="CPF"
                onChange={(e)=>setCpf(e.target.value)}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={(e)=>setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                name="senha"
                placeholder="Senha"
                onChange={(e)=>setSenha(e.target.value)}
                required
            />

            <button type="submit">Cadastrar</button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
`