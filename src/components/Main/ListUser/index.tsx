import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ImageCircle from "../../Image/ImageCircle";

const avatar1 = require("../../../assets/img1.png");
const avatar2 = require("../../../assets/img2.png");
const avatar3 = require("../../../assets/img3.png");
const avatar4 = require("../../../assets/img4.jpg");

const ListUserStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    .btnAdd {
        font-size: 40px;
        border-radius: 50%;
        background-color: #634bff;
        cursor: pointer;
    }
`;
const ListUser = () => {
    return (
        <ListUserStyled>
            <ImageCircle src={avatar1} width="60px" height="60px" />
            <ImageCircle src={avatar2} width="60px" height="60px" />
            <ImageCircle src={avatar3} width="60px" height="60px" />
            <ImageCircle src={avatar4} width="60px" height="60px" />
            <PlusCircleOutlined className="btnAdd" />
        </ListUserStyled>
    );
};

export default ListUser;
