import { Provider } from "react-redux";
import "./App.scss";
import Main from "./components/Main";
import PostSetting from "./components/PostSettings";
import SideBar from "./components/SideBar";
import { store } from "./redux";
import React from "react";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <SideBar />
                <Main />
                <PostSetting />
            </div>
        </Provider>
    );
}

export default App;
