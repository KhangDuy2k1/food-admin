import Home from "../component/content/home"
import Login from "../component/page/login"
import UserContent from "../component/content/user"
import Order from "../component/content/order"
import { DetailUserComponent } from "../component/content/userDetail"
import { StoreComponent } from "../component/content/store"
export const Elms = [
    {
        element : <Login/>,
        path: "/"
    },
    {
        element: <Home/>,
        path: "/home"
    },{
        element: <DetailUserComponent/>,
        path: "/detail_user/:user_id"
    },
    {
        element: <UserContent/>,
        path: "/user"
    },
    {
        element: <StoreComponent/>,
        path: "/store"
    },
    {
        element: <Order/>,
        path: "/order"
    },
]
        
