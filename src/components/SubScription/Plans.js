import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Plans({ id, image, price }) {
    return (
        <Link to={`/subscription/${id}`}>
            <BoxPlan>
                <img src={image} />
                <h2>{price}</h2>
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
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    width: 290px;
    height: 180px;
    box-sizing:border-box;
    
    img{
        width: 139.38px;
    }

    h2{
        font-weight: 700;
        font-size: 24px;
    }

`