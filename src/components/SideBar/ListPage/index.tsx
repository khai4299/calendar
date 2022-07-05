import {
    DashboardOutlined,
    CalendarOutlined,
    FundOutlined,
    InfoCircleOutlined,
    ProfileOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const ListPage = () => {
    return (
        <div className="listURL">
            <ul>
                <li>
                    <DashboardOutlined className="icon" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <CalendarOutlined className="icon" />
                    <span>Calendar</span>
                </li>
                <li>
                    <FundOutlined className="icon" />
                    <span>Analytics</span>
                </li>
                <li>
                    <ProfileOutlined className="icon" />
                    <span>Ads</span>
                </li>
                <li>
                    <InfoCircleOutlined className="icon" />
                    <span>Campaigns</span>
                </li>
                <li>
                    <SettingOutlined className="icon" />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    );
};

export default ListPage;
