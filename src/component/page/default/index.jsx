import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../../header';
import SidebarComponent from '../../sidebar';
import classNames from 'classnames/bind';
import styles from "./default.module.scss";
import ConfirmModal from '../../modal/user';
import { LogOutModal } from '../../modal/user/logout';
import { UpdateOrderModal } from '../../modal/order/update';
import { ConfirmDeleteStore } from '../../modal/store';
const cx = classNames.bind(styles)
const { Content } = Layout; 
const DefaultComponent = ({children, data}) => {
  return (
    <div> 
          <ConfirmDeleteStore/>
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