import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker } from "antd";
import styled from "styled-components";
import moment from "moment";
import { TitleStyled } from "../../Title/TitleStyled";
import { EditTitleStyled } from "../../Title/EditTitleStyled";
import { Field } from "formik";
import {
    AntDatePicker,
    AntTimePicker,
} from "../../CreateAntdField/CreateAntdField";

const DateOfPostingStyle = styled.div`
    flex: 1;
    color: darkgray;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
`;
const ListDateStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

const DateAndTimeStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
    }
`;
const DateOfPosting = ({ dateOfPosting, title }: any) => {
    return (
        <DateOfPostingStyle>
            <EditTitleStyled gap="5px" margin="0 0 10px 0">
                <TitleStyled fontSize="15px" color="darkgray">
                    {title}
                </TitleStyled>
                {dateOfPosting && <PlusCircleOutlined className="iconEdit" />}
            </EditTitleStyled>
            <ListDateStyled>
                {dateOfPosting &&
                    dateOfPosting.map((_: any, index: number) => (
                        <DateAndTimeStyled key={index}>
                            <DatePicker
                                format={"D MMMM"}
                                defaultValue={moment(_.date)}
                            />
                            <div className="dot"></div>
                            <TimePicker
                                format={"hh:mm A"}
                                defaultValue={moment("12:08:23", "hh:mm")}
                            />
                        </DateAndTimeStyled>
                    ))}
                {!dateOfPosting && (
                    <>
                        <ListDateStyled>
                            <DateAndTimeStyled>
                                <Field
                                    component={AntDatePicker}
                                    name="dateStart"
                                    format={"D MMMM"}
                                />
                                <Field
                                    component={AntTimePicker}
                                    name="timeStart"
                                    format={"hh:mm A"}
                                />
                            </DateAndTimeStyled>
                            <DateAndTimeStyled>
                                <Field
                                    component={AntDatePicker}
                                    name="dateEnd"
                                    format={"D MMMM"}
                                />
                                <Field
                                    component={AntTimePicker}
                                    name="timeEnd"
                                    format={"hh:mm A"}
                                />
                            </DateAndTimeStyled>
                        </ListDateStyled>
                    </>
                )}
            </ListDateStyled>
        </DateOfPostingStyle>
    );
};

export default DateOfPosting;
