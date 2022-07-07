import { Routes, Route } from "react-router-dom";
import Calendar from "../../pages/Calendar";
import Dashboard from "../../pages/Dashboard";
import Analytics from "../../pages/Analytics";
import Ads from "../../pages/Ads";
import Campaigns from "../../pages/Campaigns";
import Settings from "../../pages/Settings";

const RoutesLink = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Calendar />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};

export default RoutesLink;
