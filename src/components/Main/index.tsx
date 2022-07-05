import "./Main.scss";

import Calendar from "../Calendar";
import ListUser from "./ListUser";
import PostSchedule from "./PostSchedule";
import Statistic from "./Statistic";

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <ListUser />
                <PostSchedule />
                <Statistic />
                <Calendar />
            </div>
        </div>
    );
};

export default Main;
