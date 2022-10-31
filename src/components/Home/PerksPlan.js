import styled from "styled-components"

export default function PerksPlan({link, title}) {
    return(
        <BoxPerks href={link} target="_blank">
            {title}
        </BoxPerks>
    )
}

const BoxPerks = styled.a `
    width: 300px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF4791;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
`