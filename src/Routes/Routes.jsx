import {
    createBrowserRouter
} from "react-router-dom";

import Root from "../Layout/Pages/Root";
import Home from "../Layout/Pages/Home/Home";
import Addfood from "../Layout/Pages/Addfood/Addfood";
import Login from "../Layout/Pages/Login/Login";
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addfood",
                element: <Addfood/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
        ],
    },
]);

export default Routes;