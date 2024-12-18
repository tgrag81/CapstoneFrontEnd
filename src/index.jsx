import React from "react";
import ReactDOM from "react-dom";
import { ApiProvider } from "./context/ApiContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApiProvider>
        <App />
    </ApiProvider>
);

