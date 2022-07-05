import styled from "styled-components";

export const FullCalendarStyled = styled.div`
    overflow: hidden;
    a {
        color: #fff;
        border: none;
    }
    .fc-header-toolbar {
        h2 {
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
    .fc-scrollgrid {
        margin: auto;
        height: 100%;
        width: 100%;
        border: none;
        thead {
            th {
                border: none;
            }
        }
        tbody {
            background: linear-gradient(
                90deg,
                rgb(136, 84, 208, 0.1) 0%,
                rgb(136, 84, 208, 0.1) 71.5%,
                rgb(136, 84, 208, 0.2) 71.5%,
                rgb(136, 84, 208, 0.2) 100%
            );
        }
    }

    .fc-theme-standard td {
        overflow: hidden;
        border: none;
    }
    .fc-day-today {
        background: var(
            --fc-today-bg-color,
            rgba(255, 220, 40, 0.15)
        ) !important;
    }
    .fc-scrollgrid-sync-table td {
        border: 1px solid rgba(117, 117, 117, 0.3);
    }
    .fc-scrollgrid-section {
        & > td {
            border-radius: 20px;
        }
    }
    .fc-highlight {
        background: transparent;
    }
    .eventImage {
        position: absolute;
    }
    .fc-daygrid-day-events {
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-top: 10px;
        img {
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 5px;
        }
        .fc-daygrid-event-harness {
            &:not(:first-child) {
                margin-left: -10px;
            }
        }
    }
    .fc-media-screen {
        height: 500px !important;
    }
`;
