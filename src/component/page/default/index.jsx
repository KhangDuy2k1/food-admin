import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import  ConfirmLogoutModal from '../../modal/logout/confirm';
import HeaderComponent from '../../header';
import SidebarComponent from '../../sidebar';
import classNames from 'classnames/bind';
import styles from "./default.module.scss";
import UpdateUserModal from '../../modal/user/update';
import DeleteModal from '../../modal/user/delete';
import InfoUserModal from '../../modal/user/infomation';
import ShowInfoModal from '../../modal/order/orderInfo';
import CreateCoffeeModal from '../../modal/coffee/create/createCoffee';
import { UpdateCoffeeModal } from '../../modal/coffee/update';
import DeleteCoffeeModal from '../../modal/coffee/delete';
import { ShowDeleteOrderModal } from '../../modal/order/deleteOrder';
const cx = classNames.bind(styles)
const { Content } = Layout; 
const DefaultComponent = ({children, data}) => {
  return (
    <div>
        {/* <h2 style={{marginBottom: "10px"}}>ADMIN DASHBOARD</h2> */}
          <DeleteCoffeeModal/>
          <ShowDeleteOrderModal/>
          <UpdateCoffeeModal/> 
         <CreateCoffeeModal/> 
         <ShowInfoModal/>
         <InfoUserModal/>
         <DeleteModal/>
         <UpdateUserModal/>
         <ConfirmLogoutModal/>  
     <Layout>
       <SidebarComponent/>
       <Layout style={{marginLeft: "210px"}}>
       <HeaderComponent/>
        <Content className= {cx('content')}>
          {children}
        </Content>
      </Layout>
    </Layout>
    </div>
    
  );
};
export default DefaultComponent;