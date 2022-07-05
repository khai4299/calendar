import React from "react";
import { ButtonStyled } from "../../styled/Button.styled";

interface Props {
    padding: string;
    color: string;
    children: React.ReactNode;
    alignItems: string;
    backgroundColor: string;
    margin?: string;
}

const Button: React.FC<Props> = ({
    color,
    padding,
    children,
    alignItems,
    backgroundColor,
    margin,
}) => {
    return (
        <ButtonStyled
            padding={padding}
            color={color}
            alignItems={alignItems}
            backgroundColor={backgroundColor}
            margin={margin}
        >
            {children}
        </ButtonStyled>
    );
};

export default Button;
