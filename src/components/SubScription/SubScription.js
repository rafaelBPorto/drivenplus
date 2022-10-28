import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export default function SubScription(){

    const {user} = useContext(UserContext)
    return(
        <div>
            {user.name}
        </div>
    )
}