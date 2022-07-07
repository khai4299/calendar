import { CloseCircleOutlined } from "@ant-design/icons";
import { FieldArray } from "formik";
import styled from "styled-components";
import { TextFieldWrapper } from "../../Form/FieldWrapper/FieldWrapper";
import Tag from "../../Tag/Tag";
import { EditTitleStyled } from "../../Title/EditTitleStyled";
import { TitleStyled } from "../../Title/TitleStyled";

const TagsStyled = styled.div`
    flex: 1;
    color: darkgray;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .listTags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const ItemTagStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        position: absolute;
        //right: 0;
        right: 0;
    }
`;

const ButtonStyled = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Tags = ({ tags, valuesTags }: any) => {
    return (
        <TagsStyled>
            <EditTitleStyled gap="5px" margin="0 0 10px 0">
                <TitleStyled fontSize="15px" color="darkgray">
                    Tags
                </TitleStyled>
            </EditTitleStyled>
            <div className="listTags">
                {tags &&
                    tags.map((_: any) => (
                        <Tag
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
                        </Tag>
                    ))}
                {!tags && (
                    <FieldArray name="tags">
                        {(arrayHelpers) => (
                            <>
                                {valuesTags.length > 0 &&
                                    valuesTags.map(
                                        (tag: any, index: number) => (
                                            <ItemTagStyled>
                                                <TextFieldWrapper
                                                    name={`tags[${index}]`}
                                                />
                                                <ButtonStyled
                                                    type="button"
                                                    onClick={() =>
                                                        arrayHelpers.remove(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <span>-</span>
                                                </ButtonStyled>
                                            </ItemTagStyled>
                                        )
                                    )}
                                <ButtonStyled
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                >
                                    <span>+</span>
                                </ButtonStyled>
                            </>
                        )}
                    </FieldArray>
                )}
            </div>
        </TagsStyled>
    );
};

export default Tags;
