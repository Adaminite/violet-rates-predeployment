import React from "react";
import {createRoot} from "react-dom/client";
import App from "./main/App.js";
import './frontend/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById("root");
const root = createRoot(container);
root.render( <App/> );