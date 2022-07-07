import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { FullCalendarStyled } from "../../styled/Calendar.styled";
import { dataFake } from "../../dataFake/dataFake";

const Calendar = React.memo(
    ({
        setActivePost,
        setDateSetting,
        events,
        setEvents,
        dateSelected,
        setDateSelected,
        dateOfUser,
        setDateOfUser,
    }: any) => {
        const user: any = useSelector((state: RootState) => state.user.user);
        useEffect(() => {
            if (user) {
                const data: any = dataFake.find(
                    (_: any) => _.users.id === user.id
                );
                let eventsRes: any = [];
                data.dates.forEach((date: any) => {
                    eventsRes = [
                        ...eventsRes,
                        {
                            date: date.dateStr,
                            img: date.events.imgs[0].src,
                            desc: date.events.desc,
                        },
                    ];
                });
                setEvents(eventsRes);
                setDateOfUser(data.dates);
            }
        }, [user, setDateOfUser, setEvents]);

        const renderEventContent = (eventInfo: any) => {
            const props = eventInfo.event.extendedProps;
            return <img src={props.img} alt="" />;
        };

        const handleEventClick = (event: any) => {
            event.jsEvent.preventDefault();
            if (dateSelected) {
                dateSelected.dayEl.style.background = "transparent";
            }
            if (dateSelected && dateSelected.dateStr === event.dateStr) {
                setActivePost(false);
                setDateSelected(null);
            } else {
                const daySelect = dateOfUser.find(
                    (_: any) => _.dateStr === event.dateStr
                );
                setActivePost(true);
                setDateSetting(daySelect);
                setDateSelected(event);
                event.dayEl.style.background = `linear-gradient(
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
    }
);

export default Calendar;
