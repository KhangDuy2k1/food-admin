import React from 'react';  
import styles from "./header.module.scss";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
const HeaderComponent = () => {
   return (
      <div className= {cx('user-container')}>
                  <div  className= {cx('dashboard')}>
                     <p>DASHBOARD</p>
                  </div>
      </div>
   ) 
}
export default HeaderComponent;