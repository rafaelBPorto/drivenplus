import styled from "styled-components";

export const StyleButtons = styled.a `
    width: 300px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.corBotao};
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
`