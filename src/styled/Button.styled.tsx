import styled from "styled-components";

interface Props {
    padding: string;
    color: string;
    alignItems: string;
    backgroundColor: string;
    margin?: string;
}

export const ButtonStyled = styled.button<Props>`
    font-family: "Raleway", sans-serif;
    background: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.alignItems};
    color: ${(props) => props.color};
    border: none;
    border-radius: 30px;
    font-size: 13px;
    padding: ${(props) => props.padding};
    gap: 10px;
    margin: ${(props) => props.margin};
    cursor: pointer;

    .icon {
        font-size: 18px;
    }
`;
