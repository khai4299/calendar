import "./Main.scss";
import {
    ExportOutlined,
    PlusCircleFilled,
    PlusCircleOutlined,
} from "@ant-design/icons";
import Button from "../Button";
import ItemStatistic from "../ItemStatistic";
import Calendar from "../Calendar";

const avatar1 = require("../../assets/img1.png");
const avatar2 = require("../../assets/img2.png");
const avatar3 = require("../../assets/img3.png");
const avatar4 = require("../../assets/img4.jpg");

const Main = () => {
    return (
        <div className="main">
            <div className="container">
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
                <div className="post">
                    <h2>Post Schedule</h2>
                    <Button
                        padding={"15px 40px"}
                        color={"#fff"}
                        alignItems={"center"}
                        backgroundColor={"#634BFF"}
                    >
                        <span>Create a Post</span>
                    </Button>
                </div>
                <div className="statistic">
                    <ItemStatistic flex={2} alignItems={"start"}>
                        <span className="head">Last Month Highlights</span>
                        <div className="content">
                            <div className="listImg">
                                <img src={avatar4} alt="" />
                                <img src={avatar4} alt="" />
                                <img src={avatar4} alt="" />
                                <img src={avatar4} alt="" />
                            </div>
                            <Button
                                padding={"0px"}
                                backgroundColor={"transparent"}
                                alignItems={"center"}
                                color={"darkgray"}
                                margin={"20px 0 0 0"}
                            >
                                <span>Check out</span>
                                <ExportOutlined className="icon" />
                            </Button>
                        </div>
                    </ItemStatistic>
                    <ItemStatistic flex={2} alignItems={"center"}>
                        <p>2</p>
                        <div className="title">Scheduled for today</div>
                    </ItemStatistic>
                    <ItemStatistic flex={2} alignItems={"center"}>
                        <p>3</p>
                        <div className="title">Posted this week</div>
                    </ItemStatistic>
                </div>
                <div className="calendar">
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default Main;
