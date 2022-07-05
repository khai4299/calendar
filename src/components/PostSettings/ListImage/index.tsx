import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Carousel } from "antd";

const ListImageStyled = styled.div.attrs({ className: "image" })`
    .listImg {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 20px;
        }

        .slick-dots {
            bottom: -25px;
        }
    }
`;
const ListImage = ({ listImage }: any) => {
    return (
        <ListImageStyled>
            <div className="edit">
                <span>Image</span>
                <DeleteOutlined className="iconEdit" />
            </div>
            <div className="listImg">
                <div style={{ width: "100%" }}>
                    <Carousel>
                        {/* <div>
                                <img src={listImage[0].src} alt="" />
                            </div>
                            <div>
                                <img src={listImage[0].src} alt="" />
                            </div>
                            <div>
                                <img src={listImage[0].src} alt="" />
                            </div>
                            <div>
                                <img src={listImage[0].src} alt="" />
                            </div> */}
                        {listImage.map((_: any) => (
                            <img src={_.src} alt="" />
                        ))}
                    </Carousel>
                </div>
            </div>
        </ListImageStyled>
    );
};

export default ListImage;
