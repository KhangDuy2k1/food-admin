import Home from "../component/content/home"
import Login from "../component/page/login"
import UserContent from "../component/content/user"
import Order from "../component/content/order"
import { Coffee } from "../component/content/coffee"
export const Elms = [
    {
        element : <Login/>,
        path: "/"
    },
    {
        element: <Home/>,
        path: "/home"
    },
    {
        element: <UserContent/>,
        path: "/user"
    },
    {
        element: <Order/>,
        path: "/order"
    },
    {
        element: <Coffee/>,
        path: "/coffee"
    }
]
        
