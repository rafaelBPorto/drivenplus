import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { BASEURL } from "../../constants/URLS"
import { UserContext } from "../../context/UserContext"

export default function Formpay() {

    const [nome, setNome] = useState()
    const [digitos, setDigitos] = useState()
    const [codigoSeguranca, setCodigoSeguranca] = useState()
    const [validade, setValidade] = useState()

    const token = localStorage.getItem("token")

    const {user} = useContext(UserContext)

    console.log(user)


    // const [dataPay, setDataPay] = useState({nome: "", digitos: ""})

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const infoFormPay = {
        membershipId: parseInt(user.id),
        cardName: nome,
        cardNumber: digitos,
        securityNumber: parseInt(codigoSeguranca),
        expirationDate: validade
    }


    function handleSubmit(e) {
        e.preventDefault()
        console.log(nome)
        console.log(digitos)
        console.log(codigoSeguranca)
        console.log(validade)
        console.log(token)
        axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, infoFormPay, config)
    }




    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                placeholder="Nome impresso no cartão"
                // onChange={(e) => setDataPay({...dataPay, nome: e.target.value})}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <input
                type="text"
                name="digitos"
                placeholder="Digitos do Cartão"
                onChange={(e) => setDigitos(e.target.value)}
                required
            />

            <input
                type="number"
                name="codigoSegurança"
                placeholder="Código de segurança"
                onChange={(e) => setCodigoSeguranca(e.target.value)}
                required
            />

            <input
                // type="month"
                // name="data"
                type="text"
                placeholder="Validade"
                // pattern="[0-9]{2}/[0-9]{2}"
                //day.js
                onChange={(e) => setValidade(e.target.value)}
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