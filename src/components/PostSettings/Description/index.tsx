import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";

const DescriptionStyled = styled.div`
    .description {
        textarea {
            margin: auto;
            border: none;
            border-radius: 20px;
            width: 100%;
            height: 150px;
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
    }
`;
const Description = ({ description }: any) => {
    return (
        <DescriptionStyled>
            <div className="description">
                <div className="edit">
                    <span>Description</span>
                    <EditOutlined className="iconEdit" />
                </div>
                <textarea name="" value={description}></textarea>
            </div>
        </DescriptionStyled>
    );
};

export default Description;
