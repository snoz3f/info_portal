import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, POST_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Post from "./pages/Post";
import Registration from "./pages/registration/Registration";
import Login from "./pages/Login/Login";

export const authRoutes  = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: POST_ROUTE,
        Component: Post
    }
]