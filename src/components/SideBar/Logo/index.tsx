import styled from "styled-components";
import Image from "../../Image/ImageStyled";
import { TitleStyled } from "../../Title/TitleStyled";
const logo = require("../../../assets/logo.png");

const LogoStyled = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
`;
const Logo = () => {
    return (
        <LogoStyled>
            <Image src={logo} width={"40px"} height={"40px"} />
            <div>
                <TitleStyled fontSize="14px" fontWeight="bold">
                    DIGITAL
                </TitleStyled>
                <TitleStyled
                    fontSize="11px"
                    color="darkgray"
                    fontWeight="bold"
                    margin="-3px 0px 0px 12px"
                >
                    management
                </TitleStyled>
            </div>
        </LogoStyled>
    );
};

export default Logo;
