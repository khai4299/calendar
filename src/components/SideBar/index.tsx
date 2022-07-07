import Logo from "./Logo";
import ListPage from "./ListPage";
import AccountLogin from "./AccountLogin";
import { userDataFake } from "../../dataFake/dataFake";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user-slice";
import styled from "styled-components";

const SideBarStyled = styled.div`
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 10px;
`;
const SideBar = () => {
    const dispatch = useDispatch();
    const data = userDataFake;
    const user = data.find((_: any) => _.id === 1);
    dispatch(setUser(user));

    return (
        <SideBarStyled>
            <div className="container">
                <Logo />
                <ListPage />
                <AccountLogin />
            </div>
        </SideBarStyled>
    );
};

export default SideBar;
