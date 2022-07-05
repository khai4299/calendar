import { CloseCircleOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const TagsStyled = styled.div`
    .tags {
        .listTags {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            gap: 1rem;
        }
    }
`;
const Tags = ({ tags }: any) => {
    return (
        <TagsStyled>
            <div className="tags">
                <div className="edit">
                    <span>Tags</span>
                </div>
                <div className="listTags">
                    {tags.map((_: any) => (
                        <Button
                            key={_.key}
                            padding={"10px 20px"}
                            color={"#fff"}
                            alignItems={"center"}
                            backgroundColor={
                                "linear-gradient(45deg, #9863ce 0%, #634bff 100%)"
                            }
                        >
                            <span>{_.title}</span>
                            <CloseCircleOutlined className="icon" />
                        </Button>
                    ))}
                </div>
            </div>
        </TagsStyled>
    );
};

export default Tags;