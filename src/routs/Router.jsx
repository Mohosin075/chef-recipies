import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/pages/shared/login/Login";
import Register from "../components/pages/register/Register";
import Blog from "../components/pages/blog/Blog";
import Home from "../components/pages/home/home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../components/pages/Error404/Error";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/blog',
            element : <PrivateRoutes><Blog></Blog></PrivateRoutes>
        },
        {
            path : '*',
            element : <Error></Error>
        },
      ]
    },
  ]);

  export default router;