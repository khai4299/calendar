import { ExportOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Button from "../../Button";
import Image from "../../Image/ImageStyled";
import ItemStatistic from "../../ItemStatistic";
import { TitleStyled } from "../../Title/TitleStyled";
const avatar4 = require("../../../assets/img4.jpg");

const StatisticStyled = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
`;

const ContentStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ListImage = [
    {
        src: avatar4,
    },
    {
        src: avatar4,
    },
    {
        src: avatar4,
    },
    {
        src: avatar4,
    },
];
const Statistic = () => {
    return (
        <StatisticStyled>
            <ItemStatistic flex={2} alignItems={"start"}>
                <TitleStyled margin="0px 0px 10px 0" fontSize="16px">
                    Last Month Highlights
                </TitleStyled>
                <ContentStyled>
                    <div className="listImg">
                        {ListImage.map((_: any, index: number) => (
                            <Image
                                key={index}
                                src={_.src}
                                margin="10px 5px"
                                width="50px"
                                height="50px"
                                borderRadius="10px"
                            />
                        ))}
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
                </ContentStyled>
            </ItemStatistic>
            <ItemStatistic flex={2} alignItems={"center"}>
                <TitleStyled fontSize="25px" fontWeight="bold">
                    2
                </TitleStyled>
                <TitleStyled fontSize="17px" color="darkgray">
                    Scheduled for today
                </TitleStyled>
            </ItemStatistic>
            <ItemStatistic flex={2} alignItems={"center"}>
                <TitleStyled fontSize="25px" fontWeight="bold">
                    3
                </TitleStyled>
                <TitleStyled fontSize="17px" color="darkgray">
                    Posted this week
                </TitleStyled>
            </ItemStatistic>
        </StatisticStyled>
    );
};

export default Statistic;
