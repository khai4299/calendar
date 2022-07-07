import { EditOutlined } from "@ant-design/icons";
import { Field } from "formik";
import styled from "styled-components";
import { EditTitleStyled } from "../../Title/EditTitleStyled";
import { TitleStyled } from "../../Title/TitleStyled";

const DescriptionStyled = styled.div`
    flex: 1;
    color: darkgray;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    textarea {
        margin: auto;
        border: none;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        font-size: 13px;
        padding: 10px;
        resize: none;
        background-color: rgb(136, 84, 208, 0.1);

        &:focus {
            outline: none;
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const Description = ({ description, name }: any) => {
    return (
        <DescriptionStyled>
            <EditTitleStyled gap="5px" margin="0 0 10px 0">
                <TitleStyled fontSize="15px" color="darkgray">
                    Description
                </TitleStyled>
                {description && <EditOutlined className="iconEdit" />}
            </EditTitleStyled>
            {description && (
                <textarea name={"desc"} defaultValue={description}></textarea>
            )}
            {!description && <Field as="textarea" name={"desc"} />}
        </DescriptionStyled>
    );
};

export default Description;
