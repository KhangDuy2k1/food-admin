import { Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setNotShow, setShow } from '../../../../redux/slice/user/showModalLogout';
const ConfirmLogoutModal = () => {
  const [handleLogout, setHandleLogout] = useState(false);
  const dispatch = useDispatch();
  const isShowModal = useSelector((state) => state.showLogout.isShowLogout);
  const handleOk = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('avatar');
        localStorage.removeItem('email');
        dispatch(setNotShow(''))
        setHandleLogout(true)
  }
  const handleCancle = () => {
       dispatch(setNotShow())
  }
  return (  
    <>
      {handleLogout && (<Navigate to = "/" replace = {true}/>)}
      <Modal open={isShowModal} onOk={handleOk} onCancel={handleCancle}> 
         Bạn có chắc chắn muốn đăng xuất
      </Modal>
    </>
  );
};
export default ConfirmLogoutModal;