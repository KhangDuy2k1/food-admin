import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogoutModal } from '../../../../redux/slice/user';
export const LogOutModal = () => {
   const isOpen = useSelector((state) => state.user.logoutShowModal)
   const navigate = useNavigate();
   const dispatch = useDispatch()
  const handleOk = () => {
     dispatch(setLogoutModal(false))
     navigate('/')
  }
  const handleCancel = () => {
     dispatch(setLogoutModal(false))
  };
  return (
    <>
      <Modal
        title="Bạn có chắc chắn muốn đăng xuất ?"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
    </>
  );
};
