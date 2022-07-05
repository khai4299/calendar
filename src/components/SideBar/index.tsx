import "./SideBar.scss";
import Logo from "./Logo";
import ListPage from "./ListPage";
import AccountLogin from "./AccountLogin";

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="container">
                <Logo />
                <ListPage />
                <AccountLogin />
            </div>
        </div>
    );
};

export default SideBar;
