import styled from "styled-components"

export default function NavBar({image}){
    
    return(
        <ContainerNavBar>
            <img src={image} />
            <ion-icon name="person-circle"></ion-icon>
        </ContainerNavBar>
    )
}

const ContainerNavBar = styled.div`
    position:fixed;
    top:0;
    left:0;
    height: 95px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 35px;

    img{
        width: 75px;
    }

    ion-icon{
        width: 40px;
        height: 40px;
    }
`
