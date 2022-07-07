import styled from "styled-components";

interface TitleProps {
    fontSize?: string;
    color?: string;
    padding?: string;
    fontWeight?: string;
    margin?: string;
    textAlign?: string;
}

export const TitleStyled = styled.p<TitleProps>`
    margin: 0;
    font-size: ${(props) => props.fontSize || "15px"};
    color: ${(props) => props.color || "white"};
    padding: ${(props) => props.padding || "0"};
    font-weight: ${(props) => props.fontWeight || "400"};
    margin: ${(props) => props.margin || "0"};
    text-align: ${(props) => props.textAlign || "left"}; ;
`;
