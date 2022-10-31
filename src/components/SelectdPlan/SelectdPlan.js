import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StyleScreen } from "../../assets/styles/StyleScreen"
import { BASEURL } from "../../constants/URLS"
import { UserContext } from "../../context/UserContext"
import Confirmation from "./Confirmation"
import Formpay from "./FormPay"
import InfoPlan from "./InfoPlan"

export default function SelectdPlan() {
    const id = useParams()
    const token = localStorage.getItem("token")
    const [plan, setPlan] = useState(undefined)
    const [telaConfirmacao, setTelaConfimacao] = useState(false)

    const [nome, setNome] = useState()
    const [digitos, setDigitos] = useState()
    const [codigoSeguranca, setCodigoSeguranca] = useState()
    const [validade, setValidade] = useState()

    const { submit } = useContext(UserContext)
    const { loginUser } = useContext(UserContext)


    const navigate = useNavigate()

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const infoFormPay = {
        membershipId: parseInt(id.ID_DO_PLANO),
        cardName: nome,
        cardNumber: digitos,
        securityNumber: parseInt(codigoSeguranca),
        expirationDate: validade
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTelaConfimacao(true)

    }

    function confirmPlan() {
        setTelaConfimacao(false)
        axios.post(`${BASEURL}/subscriptions`, infoFormPay, config)
            .then(res => {
                axios.post(`${BASEURL}/auth/login`, loginUser)
                    .then(resLogin=>{   
                        submit(resLogin.data)
                        navigate("/home")
                        alert("cadastrado!")
                    })
                
                
            })
            .catch(err => console.log("erro"))
    }


    useEffect(() => {
        axios.get(`${BASEURL}/subscriptions/memberships/${id.ID_DO_PLANO}`, config)
            .then(res => {
                setPlan(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    if (plan === undefined) {
        return <div>carregando...</div>
    }

    return (
        <StyleScreen>
            {telaConfirmacao && (
                <Confirmation plan={plan} setTelaConfimacao={setTelaConfimacao} confirmPlan={confirmPlan} />
            )
            }

            <InfoPlan
                image={plan.image}
                name={plan.name}
                perks={plan.perks}
                price={plan.price}
            />

            <Formpay
                setNome={setNome}
                setDigitos={setDigitos}
                setCodigoSeguranca={setCodigoSeguranca}
                setValidade={setValidade}
                setTelaConfimacao={setTelaConfimacao}
                handleSubmit={handleSubmit}
            />
        </StyleScreen>
    )
}