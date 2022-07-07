import React from "react";
import { isEqual } from "lodash";
import styled from "styled-components";

const TagStyled = styled.button<Props>`
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

    .icon {
        cursor: pointer;
        font-size: 18px;
    }
`;

interface Props {
    padding: string;
    color: string;
    children: React.ReactNode;
    alignItems: string;
    backgroundColor: string;
    margin?: string;
    onClick?: () => void;
}

const Tag: React.FC<Props> = React.memo(
    ({
        color,
        padding,
        children,
        alignItems,
        backgroundColor,
        margin,
        onClick,
    }: Props) => {
        return (
            <TagStyled
                padding={padding}
                color={color}
                alignItems={alignItems}
                backgroundColor={backgroundColor}
                margin={margin}
                onClick={onClick}
            >
                {children}
            </TagStyled>
        );
    },
    isEqual
);

export default Tag;
