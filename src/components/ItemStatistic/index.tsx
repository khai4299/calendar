import React from "react";
import styled from "styled-components";

const ItemStatisticStyled = styled.div<Props>`
    flex: ${(props) => props.flex};
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    align-items: ${(props) => props.alignItems};
    flex-direction: column;
    background-color: rgba(102, 109, 139, 0.1);
    padding: 20px 30px;
    border-radius: 30px;
    .title {
        color: darkgray;
    }
`;

interface Props {
    children: React.ReactNode;
    flex: number;
    alignItems: string;
}
const ItemStatistic: React.FC<Props> = ({ children, flex, alignItems }) => {
    return (
        <ItemStatisticStyled flex={flex} alignItems={alignItems}>
            {children}
        </ItemStatisticStyled>
    );
};

export default ItemStatistic;
