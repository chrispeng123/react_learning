import {createBrowserRouter} from "react-router-dom";
import Main from "../pages/main";
import {Component} from "react";
import Home from "../pages/home";

const routes = [
    {
        path: "/",
        Component: Main,
        Children : [
            {
                path: "home",
                Component: Home
            }
        ]
    }
]

export default createBrowserRouter(routes)