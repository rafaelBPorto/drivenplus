import styled from "styled-components"
import { drivenColor } from "../../constants/Colors"

export default function Formpay({setNome, setDigitos,setCodigoSeguranca, setValidade, handleSubmit}) {
    
    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                placeholder="Nome impresso no cartão"
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

            <Botao cor={drivenColor} type="submit">Assinar</Botao>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const Botao = styled.button`
    background-color: ${props => props.cor};
    color: white;
    font-weight: 700;
    font-size: 14px;
    border: none;
    `
        // const [dataPay, setDataPay] = useState({nome: "", digitos: ""})
        // onChange={(e) => setDataPay({...dataPay, nome: e.target.value})}