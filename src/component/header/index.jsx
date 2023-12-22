import React from 'react';  
import { Avatar } from 'antd';
import styles from "./header.module.scss";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
const HeaderComponent = () => {
   const email = localStorage.getItem("email")
   const avatar = localStorage.getItem("avatar")
   return (
      <div className= {cx('user-container')}>
                  <div  className= {cx('dashboard')}>
                     <p>DASHBOARD</p>
                  </div>
                  <div className={cx('info-container')}>
                  <p className={cx('email')}>{email}</p>
                    <div className={cx("avt-container")}>
                       <Avatar className={cx('avt')} src={avatar} />
                    </div>
                  </div>
                   
      </div>
   ) 
}
export default HeaderComponent;