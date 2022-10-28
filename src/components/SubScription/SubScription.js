import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { StyleScreen } from "../../assets/imagens/styles/StyleScreen"
import { BASEURL } from "../../constants/URLS"
import { UserContext } from "../../context/UserContext"
import Plans from "./Plans"


export default function SubScription(){

    const {user} = useContext(UserContext)
    const token = localStorage.getItem("token")
    const [planos, setPlanos] = useState(undefined)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }
    
    useEffect(()=>{
        axios.get(`${BASEURL}/subscriptions/memberships`, config)
            .then(res=>{
                console.log(res.data)
                setPlanos(res.data)
            })
            .catch(err=>alert(err.response.data.message))

    },[])
    if (planos===undefined){
        return<div>...carregando</div>
    }

    return(
        <StyleScreen>
            <h1>Escolha seu plano</h1>
            {planos.map((p)=> <Plans key={p.id} image={p.image} price={p.price}/>)}
        </StyleScreen>
        
    )
}

