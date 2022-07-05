import { ExportOutlined } from "@ant-design/icons";
import Button from "../../Button";
import ItemStatistic from "../../ItemStatistic";
const avatar4 = require("../../../assets/img4.jpg");

const Statistic = () => {
    return (
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
    );
};

export default Statistic;
