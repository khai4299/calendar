import React from "react";
import { ItemStatisticStyled } from "../../styled/ItemStatistic.styled";

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
