import Button from "../../Button";
import styled from "styled-components";
import { TitleStyled } from "../../Title/TitleStyled";

const PostScheduleStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
`;
const PostSchedule = () => {
    const handleOnClick = () => {};
    return (
        <PostScheduleStyled>
            <TitleStyled fontSize="24px" fontWeight="bold">
                Post Schedule
            </TitleStyled>
            <Button
                padding={"15px 40px"}
                color={"#fff"}
                alignItems={"center"}
                backgroundColor={"#634BFF"}
                onClick={handleOnClick}
            >
                <span>Create a Post</span>
            </Button>
        </PostScheduleStyled>
    );
};

export default PostSchedule;
