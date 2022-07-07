import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Carousel } from "antd";
import { TitleStyled } from "../../Title/TitleStyled";
import Image from "../../Image/ImageStyled";
import { EditTitleStyled } from "../../Title/EditTitleStyled";
import { Field } from "formik";
const ListImageStyled = styled.div`
    flex: 1;
    color: darkgray;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .slick-dots {
        position: relative;
        bottom: 0;
        margin-top: 10px;
    }
`;

const ListImage = ({ listImage }: any) => {
    return (
        <ListImageStyled>
            <EditTitleStyled gap="5px" margin="0 0 10px 0">
                <TitleStyled fontSize="15px" color="darkgray">
                    Image
                </TitleStyled>
                {listImage && <DeleteOutlined className="iconEdit" />}
            </EditTitleStyled>
            {listImage && (
                <div style={{ width: "100%" }}>
                    <Carousel>
                        {listImage.map((_: any, index: number) => (
                            <Image
                                key={index}
                                src={_.src}
                                borderRadius="20px"
                                width="100%"
                                height="200px"
                            />
                        ))}
                    </Carousel>
                </div>
            )}
            {!listImage && (
                <Field name="uploader" type={"file"} />
                // <Upload {...props}>
                //     <Button icon={<UploadOutlined />}>Click to Upload</Button>
                // </Upload>
            )}
        </ListImageStyled>
    );
};

export default ListImage;
