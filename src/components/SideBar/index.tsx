import "./SideBar.scss";
import {
    DashboardOutlined,
    CalendarOutlined,
    FundOutlined,
    InfoCircleOutlined,
    ProfileOutlined,
    SettingOutlined,
    ExportOutlined,
} from "@ant-design/icons";
import Button from "../Button";
const avatar = require("../../assets/img1.png");
const logo = require("../../assets/logo.png");

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="container">
                <div className="head">
                    <img src={logo} alt="" className="logo" />
                    <div className="title">
                        <span>DIGITAL</span>
                        <small>management</small>
                    </div>
                </div>
                <div className="listURL">
                    <ul>
                        <li>
                            <DashboardOutlined className="icon" />
                            <span>Dashboard</span>
                        </li>
                        <li>
                            <CalendarOutlined className="icon" />
                            <span>Calendar</span>
                        </li>
                        <li>
                            <FundOutlined className="icon" />
                            <span>Analytics</span>
                        </li>
                        <li>
                            <ProfileOutlined className="icon" />
                            <span>Ads</span>
                        </li>
                        <li>
                            <InfoCircleOutlined className="icon" />
                            <span>Campaigns</span>
                        </li>
                        <li>
                            <SettingOutlined className="icon" />
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
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
            </div>
        </div>
    );
};

export default SideBar;
