import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Order from '../Pages/Order';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app")
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app")
            },
            {
                path: "/chicken",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/chicken")
            },
            {
                path: "/burger",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/burger")
            },
            {
                path: "/juice",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/juice")
            },
            {
                path: "/cream",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/cream")
            },
            {
                path: "/veggie",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/veggie")
            },
            {
                path: "/fish",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/fish")
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    }
]);

export default router;