import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyleScreen } from "../../assets/styles/StyleScreen"
import FormSignUp from "./FormSignUp"



export default function SignUp(){
    return(
        <StyleScreen>
            <FormSignUp />
            <Link to={"/"} >Já possuí uma conta? Entre</Link>
        </StyleScreen>
    )
}

