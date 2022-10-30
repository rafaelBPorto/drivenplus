import styled from "styled-components"
import { StyleScreen } from "../../assets/styles/StyleScreen"

export default function InfoPlan({image, name, perks, price}){
    return(
        <BoxPlan>
            <img src={image} alt={`logo do plano ${name}`}/>
            <h1>{name}</h1>
            <h2>Benefícios:</h2>
                {perks.map((p, index)=>
                        <p key={p.id}>{index+1}. {p.title}</p>
                )}
            <h3>Preço:</h3>
            <p>R$ {price} cobrados mensanlmente</p>
        </BoxPlan>
    )
}

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