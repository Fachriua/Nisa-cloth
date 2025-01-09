import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router/index"
import reportWebVitals from "./reportWebVitals";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals();