import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../../header';
import SidebarComponent from '../../sidebar';
import classNames from 'classnames/bind';
import styles from "./default.module.scss";
import ConfirmModal from '../../modal/confirmModal';
import { LogOutModal } from '../../modal/confirmModal/logout';
import { UpdateOrderModal } from '../../modal/order/update';
const cx = classNames.bind(styles)
const { Content } = Layout; 
const DefaultComponent = ({children, data}) => {
  return (
    <div>
          <LogOutModal/>
          <ConfirmModal/>
          <UpdateOrderModal/>
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