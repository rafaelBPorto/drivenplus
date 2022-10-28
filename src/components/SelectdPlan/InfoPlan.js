import styled from "styled-components"

export default function InfoPlan({image, name, perks, price}){
    return(
        <BoxPlan>
            <img src={image} alt={`logo do plano ${name}`}/>
            <h1>{name}</h1>
            <p>Benefícios:</p>
                {perks.map((p)=>
                        <div key={p.id}>{p.id}. {p.title}</div>
                )}
            <p>Preco:</p>
            <p>{price} cobrados mensanlmente</p>
        </BoxPlan>
    )
}

const BoxPlan = styled.div`
    color: white;

`