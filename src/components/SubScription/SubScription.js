import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export default function SubScription(){

    const {user} = useContext(UserContext)
    const token = localStorage.getItem("token")
    return(
        <div>
            {user.name}
            {token}
        </div>
    )
}