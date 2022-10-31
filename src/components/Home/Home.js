import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import PerksPlan from "./PerksPlan";

export default function Home() {
    
    const { user } = useContext(UserContext)
    const membership = user.membership
    const perks = membership.perks

    return (
        <>
            <NavBar image={membership.image}/>
            <ConatinerHome>
                <h1>Olá, {user.name}</h1>
                {perks.map((p)=><PerksPlan key={p.id} link={p.link} title={p.title}/>)}
            </ConatinerHome>
            <Footer />
        </>
    )
}

const ConatinerHome = styled.div`
    margin-top: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    h1{
        text-align:center;
        color: white;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        margin-bottom:54px;
    }
`