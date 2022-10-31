import { Link } from "react-router-dom"
import styled from "styled-components"

export default function InfoPlan({ image, name, perks, price }) {
    return (
        <>
            <Link to={"/subscription"}>
                <Back name="arrow-back">
                    <ion-icon name="arrow-back"></ion-icon>
                </Back>
            </Link>
            <BoxPlan>
                <img src={image} alt={`logo do plano ${name}`} />
                <h1>{name}</h1>
                <h2>Benefícios:</h2>
                {perks.map((p, index) =>
                    <p key={p.id}>{index + 1}. {p.title}</p>
                )}
                <h3>Preço:</h3>
                <p>R$ {price} cobrados mensanlmente</p>
            </BoxPlan>
        </>
    )
}

const Back = styled.div`

    position: fixed;
    left: 22px;
    top: 1vh;

    ion-icon{
        color: white;
        width: 28px;
        height: 32px;
    }
`

const BoxPlan = styled.div`

    img{
        width: 140px;
        margin-bottom: 20px;
    }
    h1{
        margin-bottom:30px;
    }
    h2{
        margin-bottom: 10px;
    }

    h3{
        margin-top: 20px;
        margin-bottom: 3px;
    }

    p{
        margin-bottom: 3px;
    }
`