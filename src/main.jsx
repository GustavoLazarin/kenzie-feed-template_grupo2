import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./sass/index.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";
import { NewsProvider } from "./providers/NewsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NewsProvider>
          <App />
        </NewsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
