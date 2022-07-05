import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import {
    activePostSetting,
    getDataSetting,
} from "../../redux/slices/post-slice";
import { AppDispatch } from "../../redux";
import { FullCalendarStyled } from "../../styled/Calendar.styled";
const avatar4 = require("../../assets/img4.jpg");

const Calendar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const dataSettting = useSelector((state: any) => state.post);
    const [events, setEvents] = useState<any>([]);
    const [dateSelected, setDateSelected] = useState<any>();

    function createEvent(e: any) {
        const event: any = {
            date: e.dateStr,
            backgroundColor: "transparent",
            img: avatar4,
        };
        setEvents([...events, event]);
    }

    const renderEventContent = (eventInfo: any) => {
        const props = eventInfo.event.extendedProps;
        return <img src={props.img} alt="" />;
    };

    const handleEventClick = (e: any) => {
        e.jsEvent.preventDefault();

        if (dateSelected) {
            dateSelected.dayEl.style.background = "transparent";
        }
        if (dateSelected && dateSelected.dateStr === e.dateStr) {
            dispatch(activePostSetting(false));
            setDateSelected(null);
        } else {
            dispatch(activePostSetting(true));
            const number = Math.floor(Math.random() * 2) + 1;
            dispatch(getDataSetting(number));
            setDateSelected(e);
            e.dayEl.style.background = `linear-gradient(
                180deg,
                rgb(152, 99, 206, 0.5) 0%,
                rgb(99, 75, 255, 0.5) 100%
            )`;
        }
    };

    return (
        <FullCalendarStyled>
            <FullCalendar
                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "title",
                    right: "prev,next",
                }}
                firstDay={1}
                eventContent={renderEventContent}
                dateClick={handleEventClick}
                events={events}
            />
        </FullCalendarStyled>
    );
};

export default Calendar;
