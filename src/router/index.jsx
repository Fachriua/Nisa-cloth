import { createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Wtops from "../pages/Wtops";
import Bottoms from "../pages/Bottoms";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "products",
                element: <Products/>,
            },
            {
                path: "wtops",
                element: <Wtops/>,
            },
            {
                path: "bottoms",
                element: <Bottoms/>,
            },
            {
                path: "about",
                element: <About/>,
            }
        ]
    }
])

export default router