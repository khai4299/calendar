import React from "react";
import Button from "../../Button";

const PostSchedule = () => {
    return (
        <div className="post">
            <h2>Post Schedule</h2>
            <Button
                padding={"15px 40px"}
                color={"#fff"}
                alignItems={"center"}
                backgroundColor={"#634BFF"}
            >
                <span>Create a Post</span>
            </Button>
        </div>
    );
};

export default PostSchedule;
