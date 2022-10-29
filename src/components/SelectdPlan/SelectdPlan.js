import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StyleScreen } from "../../assets/imagens/styles/StyleScreen"
import { BASEURL } from "../../constants/URLS"
import Formpay from "./FormPay"
import InfoPlan from "./InfoPlan"

export default function SelectdPlan() {
    const id = useParams()
    const token = localStorage.getItem("token")
    const [plan, setPlan] = useState(undefined)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }

    useEffect(()=>{
        axios.get(`${BASEURL}/subscriptions/memberships/${id.ID_DO_PLANO}`, config)
            .then(res=>{
                console.log(res)
                setPlan(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    if(plan === undefined){
        return<div>carregando...</div>
    }

    return (
        <StyleScreen>
            
            <InfoPlan 
                image={plan.image}
                name={plan.name}
                perks={plan.perks}
                price={plan.price}
            />

            <Formpay />
        </StyleScreen>
    )
}