import Calendar from "../Calendar";
import ListUser from "./ListUser";
import PostSchedule from "./PostSchedule";
import Statistic from "./Statistic";
import styled from "styled-components";
import PostSetting from "../PostSettings";
import { useState } from "react";

const MainStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(43, 42, 44, 0.5);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    flex-direction: column;
    padding: 30px;
    .container {
        margin-right: calc(20% + 50px);
    }
`;
const Main = () => {
    const [activePost, setActivePost] = useState<boolean>(false);
    const [dateSetting, setDateSetting] = useState<any>(null);
    const [events, setEvents] = useState<any>([]);
    const [dateOfUser, setDateOfUser] = useState<any>({});
    const [dateSelected, setDateSelected] = useState<any>();
    return (
        <>
            <MainStyled>
                <div className="container">
                    <ListUser />
                    <PostSchedule />
                    <Statistic />
                    <Calendar
                        setActivePost={setActivePost}
                        setDateSetting={setDateSetting}
                        events={events}
                        setEvents={setEvents}
                        dateSelected={dateSelected}
                        setDateSelected={setDateSelected}
                        dateOfUser={dateOfUser}
                        setDateOfUser={setDateOfUser}
                    />
                </div>
            </MainStyled>
            <PostSetting
                activePost={activePost}
                dateSetting={dateSetting}
                setEvents={setEvents}
                dateSelected={dateSelected}
                setDateOfUser={setDateOfUser}
            />
        </>
    );
};

export default Main;
