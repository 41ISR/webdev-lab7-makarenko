import Board from "../pages/Board";
import Layout from "../pages/Layout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter(
    [
        {
            path:"/signup",
            element: <SignUp  />
        },
        {
            path:"/signin",
            element: <SignIn />
        },
        {
            path:"/",
            element: <Layout />,
            children: [
                {
                    index: "true",
                    element: <Board />
                }
            ]
        },

    ]
)