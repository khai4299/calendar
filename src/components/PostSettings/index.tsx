import "antd/dist/antd.min.css";
import ListImage from "./ListImage";
import Description from "./Description";
import DateOfPosting from "./DateOfPosting";
import Tags from "./Tags";
import styled from "styled-components";
import { TitleStyled } from "../Title/TitleStyled";
import * as Yup from "yup";
import FormCreatePost from "../Form/FormCreatePost";
import moment from "moment";
import { dateFormat, timeFormat } from "../Form/FieldFormats/FieldFormats";

const PostSettingStyled = styled.div`
    flex-direction: column;
    width: 20%;
    padding: 20px;
    background-color: rgba(61, 60, 60, 0.5);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    transition: all 0.5s ease-in-out;
    transform: translateX(200px);
    opacity: 0;

    &.active {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const initialValues = {
    desc: "",
    dateStart: "",
    timeStart: "",
    dateEnd: "",
    timeEnd: "",
    tags: [],
};
const validationSchema = Yup.object({});
const PostSetting = ({
    activePost,
    dateSetting,
    setEvents,
    dateSelected,
    setDateOfUser,
}: any) => {
    const onSubmitForm = (values: any) => {
        const { desc, tags, profile } = values;
        const dateStart = moment(values.dateStart).format(dateFormat);
        const timeStart = moment(values.timeStart).format(timeFormat);
        const dateEnd = moment(values.dateEnd).format(dateFormat);
        const timeEnd = moment(values.timeEnd).format(timeFormat);

        let listImage: any = [];
        let listTags: any = [];
        let base64String = "";
        tags.forEach((tag: any, index: number) => {
            listTags = [
                ...listTags,
                {
                    key: index,
                    title: tag,
                },
            ];
        });
        const uploadDocuments = async (files: any) => {
            const filePromises = [...files].map((file: any, index: number) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = async () => {
                        try {
                            if (reader.result) {
                                base64String = reader.result
                                    .toString()
                                    .replace("data:", "")
                                    .replace(/^.+,/, "");

                                listImage = [
                                    ...listImage,
                                    {
                                        key: index,
                                        src:
                                            "data:image/png;base64," +
                                            base64String,
                                    },
                                ];
                            }
                            resolve(listImage);
                        } catch (err) {
                            reject(err);
                        }
                    };

                    reader.readAsDataURL(file);
                });
            });

            const fileInfos = await Promise.all(filePromises).then(() => {
                const dateOfUser = {
                    dateStr: dateSelected.dateStr,
                    events: {
                        dateOfPosting: [
                            { date: dateStart, time: timeStart },
                            { date: dateEnd, time: timeEnd },
                        ],
                        desc: desc,
                        id: 1,
                        imgs: listImage,
                        tags: listTags,
                    },
                };
                setEvents((prev: any) => [
                    ...prev,
                    {
                        date: dateSelected.dateStr,
                        img: "data:image/png;base64," + base64String,
                        desc: "test",
                    },
                ]);
                setDateOfUser((prev: any) => [...prev, dateOfUser]);
            });

            return fileInfos;
        };

        uploadDocuments(profile);
    };
    return (
        <PostSettingStyled
            className={activePost ? "postSetting active" : "postSetting"}
        >
            {dateSetting && (
                <div className="container">
                    <TitleStyled
                        fontSize="20px"
                        fontWeight="bold"
                        textAlign="center"
                        margin="10px 0"
                    >
                        Post Setting
                    </TitleStyled>
                    <ListImage listImage={dateSetting.events.imgs} />
                    <Description description={dateSetting.events.desc} />
                    <DateOfPosting
                        dateOfPosting={dateSetting.events.dateOfPosting}
                        title={"Date of Posting"}
                    />
                    <Tags tags={dateSetting.events.tags} />
                </div>
            )}
            {!dateSetting && (
                <FormCreatePost
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmitForm={onSubmitForm}
                />
            )}
        </PostSettingStyled>
    );
};

export default PostSetting;
