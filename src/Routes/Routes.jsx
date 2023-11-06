import {
    createBrowserRouter
} from "react-router-dom";

import Root from "../Layout/Pages/Root";
import Home from "../Layout/Pages/Home/Home";
import Addfood from "../Layout/Pages/Addfood/Addfood";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Availablefood from "../Layout/Pages/Availablefood/Availablefood";
import Singlefood from "../Layout/Pages/Availablefood/Singlefood";
import Managefood from "../Layout/Pages/Managemyfood/Managefood";
import Myfoodrequest from "../Layout/Pages/MyFoodRequest/Myfoodrequest";
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
                element:<PrivateRoute> <Addfood/></PrivateRoute>,
            },
            {
                path: "/avfood",
                element: <Availablefood/>,
                // loader: () => fetch(`http://localhost:5000/foods`)
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            },
            {
                path: "/managefood",
                element: <PrivateRoute><Managefood/></PrivateRoute>,
            },
            {
                path: "/foodrequest",
                element: <PrivateRoute><Myfoodrequest/></PrivateRoute>,
            },
            
            {
                path: "/singlefood/:id",
                element: <PrivateRoute><Singlefood></Singlefood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singlefood/${params.id}`)
              },
        ],
    },
]);

export default Routes;