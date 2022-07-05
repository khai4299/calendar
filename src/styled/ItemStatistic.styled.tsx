import styled from "styled-components";

interface Props {
    flex: number;
    alignItems: string;
}

export const ItemStatisticStyled = styled.div<Props>`
    flex: ${(props) => props.flex};
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => props.alignItems};
    flex-direction: column;
    background-color: rgba(102, 109, 139, 0.1);
    padding: 20px 30px;
    border-radius: 30px;

    .head {
        margin: 0px 0px 10px 0;
        font-size: 16px;
        color: #fff;
    }
    p {
        margin: 10px 0 0 0;
        font-weight: bold;
        font-size: 24px;
    }
    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .listImg {
            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 10px;

                &:not(:first-child) {
                    margin-left: -5px;
                }
            }
        }
    }

    .title {
        color: darkgray;
    }
`;
