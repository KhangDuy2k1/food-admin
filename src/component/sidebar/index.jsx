import { Layout, Menu} from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoStorefrontOutline,IoHome } from "react-icons/io5";
import { FaShoppingBag, FaUserFriends} from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { setLogoutModal } from '../../redux/slice/user';
const { Sider } = Layout;
let arrMenu = [
  {
      key: '1',
      icon: <IoHome style={{fontSize: "18px"}}/> ,
      label: 'Home',
  },
  {
      key: '2',
      icon: <FaUserFriends style={{fontSize: "18px"}}/>,
      label: 'User',
  },
  {
      key: '3',
      icon: <FaShoppingBag style={{fontSize: "18px"}}/> ,
      label: 'Order',
  },
  {
      key: "5",
      icon: <IoStorefrontOutline style={{fontSize: "18px"}}/>,
      label: "Store"
  },
  {
      key: '4',
      icon: <VscSignOut style={{fontSize: "18px"}}/>,
      label: 'Log out',
  },
]
const SidebarComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pathName = useLocation().pathname;
    const handleMenu = (item) => { 
        if(item.key === '1'){
        navigate('/home')
        } 
        if(item.key === '2'){
        navigate('/user')
        }
        if(item.key === '3') {
         navigate('/order')
        }
        if(item.key === '4') {
          dispatch(setLogoutModal(true))
        }
        if(item.key === "5"){
          navigate('/store')
        }
     }
    const checkKeyDefault = () => { 
          return pathName === "/home" ? ["1"] : (
               pathName === "/user" ? ["2"]: (
            pathName === "/order" ? ["3"] : ["5"]
          )
        )
    }
    return (
        <Sider style={{position: "fixed", bottom: 0, top: 0}} trigger={null} collapsible> 
          <div className="demo-logo-vertical" />
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={checkKeyDefault}
          onClick={handleMenu}
          items={arrMenu}
        />
      </Sider> 
    )
}
export default SidebarComponent;