import "./App.scss";
import SideBar from "./components/SideBar";
import RoutesLink from "./components/Router-dom/RoutesLink";

function App() {
    return (
        <div className="app">
            <SideBar />
            <RoutesLink />
        </div>
    );
}

export default App;
