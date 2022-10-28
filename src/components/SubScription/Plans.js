import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Plans({ id, image, price }) {
    return (
        <Link to={`/subscription/${id}`}>
            <BoxPlan>
                <img src={image} />
                <h1>{price}</h1>
            </BoxPlan>
        </Link>
    )
}

const BoxPlan = styled.div`
    display: flex;
    border: solid;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 3px;
    border-color: #7E7E7E;
    width: 290px;
    height: 180px;
    margin-bottom: 10px;
    box-sizing:border-box;
    
    img{
        width: 139.38px;
    }

    h1{
        font-weight: 700;
        font-size: 24px;
    }
`