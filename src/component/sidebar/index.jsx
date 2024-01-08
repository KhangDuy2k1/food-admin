import { Layout, Menu} from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoStorefrontOutline,IoHome } from "react-icons/io5";
import { FaShoppingBag, FaUserFriends} from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { setLogoutModal } from '../../redux/slice/user';
const { Sider } = Layout;
const SidebarComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
    return (
        <Sider style={{position: "fixed", bottom: 0, top: 0}} trigger={null} collapsible> 
          <div className="demo-logo-vertical" />
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenu}
          items={[
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
            
          ]}
        />
      </Sider> 
    )
}
export default SidebarComponent;