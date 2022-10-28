import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { StyleScreen } from "../../assets/imagens/styles/StyleScreen"
import { BASEURL } from "../../constants/URLS"

export default function SelectdPlan() {
    const id = useParams()
    const token = localStorage.getItem("token")
    console.log(id.ID_DO_PLANO)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }

    useEffect(()=>{
        axios.get(`${BASEURL}/subscriptions/memberships/${id.ID_DO_PLANO}`, config)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    },[])
    return (
        <StyleScreen>
            <h1>
                {id.ID_DO_PLANO}
            </h1>
        </StyleScreen>
    )
}