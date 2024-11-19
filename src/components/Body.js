import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import SearchMovie from './SearchMovie';
import Header from './Header';

const Body = ()=> {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/search",
            element:
            <>
            <Browse/>
            </>
        }
    ]
    )
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body