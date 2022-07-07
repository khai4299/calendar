import styled from "styled-components";

interface EditTitleProps {
    fontSize?: string;
    margin?: string;
    gap?: string;
}

export const EditTitleStyled = styled.div<EditTitleProps>`
    margin: ${(props) => props.margin || "0"};
    display: flex;
    align-items: center;
    gap: ${(props) => props.gap || "0"};
    font-size: ${(props) => props.fontSize || "15px"};

    .iconEdit {
        cursor: pointer;
    }
`;
