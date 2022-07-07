import {
    DashboardOutlined,
    CalendarOutlined,
    FundOutlined,
    InfoCircleOutlined,
    ProfileOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Menu {
    name: string;
    icon: any;
    path: string;
}

const menus: Menu[] = [
    {
        name: "Dashboard",
        icon: <DashboardOutlined className="icon" />,
        path: "/dashboard",
    },
    {
        name: "Calendar",
        icon: <CalendarOutlined className="icon" />,
        path: "/",
    },
    {
        name: "Analytics",
        icon: <FundOutlined className="icon" />,
        path: "/analytics",
    },
    {
        name: "Ads",
        icon: <ProfileOutlined className="icon" />,
        path: "/ads",
    },
    {
        name: "Campaigns",
        icon: <InfoCircleOutlined className="icon" />,
        path: "/campaigns",
    },
    {
        name: "Settings",
        icon: <SettingOutlined className="icon" />,
        path: "/settings",
    },
];

const ListMenuStyled = styled.ul.attrs({
    className: "listURL",
})`
    margin-top: 20px;
    flex: 6;
    padding-inline-start: 0;
    .active {
        li {
            color: #fff;
            background-color: rgb(136, 84, 208, 0.1);
            .icon {
                color: #634bff;
            }
        }
    }
`;

const NavLinkStyled = styled(NavLink)`
    li {
        background-color: transparent;
        margin: 10px 0;
        border-radius: 30px;
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        list-style: none;
        gap: 15px;
        font-weight: bold;
        color: darkgray;

        .icon {
            font-size: 20px;
            color: darkgray;
        }

        span {
            font-size: 15px;
        }

        &:hover {
            color: #fff;
            background-color: rgb(136, 84, 208, 0.1);
            .icon {
                color: #634bff;
            }
        }
    }
`;
const ListPage = () => {
    return (
        <ListMenuStyled>
            {menus.map((menu, index) => (
                <NavLinkStyled
                    key={index}
                    to={menu.path}
                    className={(navData) => (navData.isActive ? "active" : "")}
                >
                    <li>
                        {menu.icon}
                        <span>{menu.name}</span>
                    </li>
                </NavLinkStyled>
            ))}
        </ListMenuStyled>
    );
};

export default ListPage;
