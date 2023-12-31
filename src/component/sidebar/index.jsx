import { Layout, Menu, Button, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BiCoffeeTogo } from 'react-icons/bi'
import {
    ArrowLeftOutlined,
    UserOutlined,
    ShoppingOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import { setShow } from '../../redux/slice/user/showModalLogout';
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
          dispatch(setShow())
        }
        if(item.key === "5"){
          navigate('/coffee')
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
                icon: <HomeOutlined style={{fontSize: "18px"}}/> ,
                label: 'Home',
            },
            {
              key: '2',
              icon: <UserOutlined style={{fontSize: "18px"}}/>,
              label: 'User',
            },
            {
              key: '3',
              icon: <ShoppingOutlined style={{fontSize: "18px"}}/> ,
              label: 'Order',
            },
            {
              key: "5",
              icon: <BiCoffeeTogo style={{fontSize: "18px"}}/>,
              label: "Product"
            },
            {
              key: '4',
              icon: <ArrowLeftOutlined style={{fontSize: "18px"}}/>,
              label: 'Log out',
            },
            
          ]}
        />
      </Sider> 
    )
}
export default SidebarComponent;