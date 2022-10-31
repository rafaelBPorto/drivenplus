import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASEURL } from "../../constants/URLS"
import { StyleButtons } from "./StyleButtons"

export default function Footer() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    function cancelarPlano() {
        axios.delete(`${BASEURL}/subscriptions`, config)
            .then(res => navigate("/subscription"))
    }
    return (
        <ContainerFooter>
            <Link to={"/subscription"}><StyleButtons corBotao="#FF4791">Mudar Plano</StyleButtons></Link>
            <StyleButtons corBotao="#FF4747" onClick={cancelarPlano}>Cancelar plano</StyleButtons>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    a{
        text-decoration:none;
    }

`
