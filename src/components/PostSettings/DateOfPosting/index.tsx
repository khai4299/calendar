import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker } from "antd";
import styled from "styled-components";
import moment from "moment";

const DateOfPostingStyle = styled.div.attrs({ className: "dateOfPosting" })`
    .listDate {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .dateAndTime {
            display: flex;
            gap: 10px;

            .ant-picker {
                background-color: rgb(136, 84, 208, 0.1);
                border-radius: 20px;
                color: darkgray;

                .ant-picker-suffix {
                    color: darkgray;
                }
                .ant-picker-input {
                    input {
                        color: darkgray;
                    }
                }
            }
        }
    }
`;

const DateOfPosting = ({ dateOfPosting }: any) => {
    console.log(dateOfPosting[0].date);
    return (
        <DateOfPostingStyle>
            <div className="edit">
                <span>Date of Posting</span>
                <PlusCircleOutlined className="iconEdit" />
            </div>
            <div className="listDate">
                {/* <div className="dateAndTime">
                        <DatePicker value={}/>
                        <div className="dot"></div>
                        <TimePicker />
                    </div>
                    <div className="dateAndTime">
                        <DatePicker />
                        <div className="dot"></div>
                        <TimePicker />
                    </div> */}
                {dateOfPosting.map((_: any) => (
                    <div className="dateAndTime">
                        <DatePicker
                            format={"D MMMM"}
                            defaultValue={moment(_.date)}
                        />
                        <div className="dot"></div>
                        <TimePicker
                            format={"hh:mm a"}
                            defaultValue={moment("12:08:23", "hh:mm")}
                        />
                    </div>
                ))}
            </div>
        </DateOfPostingStyle>
    );
};

export default DateOfPosting;
