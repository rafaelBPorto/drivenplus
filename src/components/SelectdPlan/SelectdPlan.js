import { useParams } from "react-router-dom"
import { StyleScreen } from "../../assets/imagens/styles/StyleScreen"

export default function SelectdPlan() {
    const id = useParams()
    return (
        <StyleScreen>
            <h1>
                {id.ID_DO_PLANO}
            </h1>
        </StyleScreen>
    )
}