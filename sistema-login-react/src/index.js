import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/global";
//import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import Login from "./Pages/Login/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Login />
    </React.StrictMode>
);
