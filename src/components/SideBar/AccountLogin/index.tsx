import { ExportOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../redux";
import Button from "../../Button";
import ImageCircle from "../../Image/ImageCircle";
import { TitleStyled } from "../../Title/TitleStyled";

const AccountStyled = styled.div`
    flex: 1;
    background-color: rgb(136, 84, 208, 0.1);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    padding: 20px 15px;
    margin: auto;
    border-radius: 30px;
`;
const AccountLogin = () => {
    const user: any = useSelector((state: RootState) => state.user.user);
    return (
        <AccountStyled>
            {user && (
                <>
                    <ImageCircle src={user.avatar} width={"70px"} />
                    <div>
                        <TitleStyled color="#fff">{user.name}</TitleStyled>
                        <TitleStyled color="darkgray" fontSize="12px">
                            {user.link}
                        </TitleStyled>
                    </div>
                    <Button
                        padding={"10px 20px"}
                        color={"#fff"}
                        alignItems={"center"}
                        backgroundColor={"#634BFF"}
                    >
                        <ExportOutlined className="icon" />
                        <span>Sign out</span>
                    </Button>
                </>
            )}
        </AccountStyled>
    );
};

export default AccountLogin;
