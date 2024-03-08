import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Login from './pages/Login.jsx';
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >

        <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)
