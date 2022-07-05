import { ExportOutlined } from "@ant-design/icons";
import Button from "../../Button";

const avatar = require("../../../assets/img1.png");

const AccountLogin = () => {
    return (
        <div className="account">
            <img src={avatar} alt="" />
            <div className="info">
                <span>Vanessa</span>
                <small>@vanessasays</small>
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
        </div>
    );
};

export default AccountLogin;
