import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <ConatinerHome>
                Home
            </ConatinerHome>
            <Footer />
        </>
    )
}

const ConatinerHome = styled.div`
    margin-top: 20px;
`