import { PlusCircleOutlined } from "@ant-design/icons";

const avatar1 = require("../../../assets/img1.png");
const avatar2 = require("../../../assets/img2.png");
const avatar3 = require("../../../assets/img3.png");
const avatar4 = require("../../../assets/img4.jpg");

const ListUser = () => {
    return (
        <div className="listUser">
            <div className="userItem">
                <img src={avatar1} alt="" />
            </div>
            <div className="userItem">
                <img src={avatar2} alt="" />
            </div>
            <div className="userItem">
                <img src={avatar3} alt="" />
            </div>
            <div className="userItem">
                <img src={avatar4} alt="" />
            </div>
            <PlusCircleOutlined className="btnAdd" />
        </div>
    );
};

export default ListUser;
