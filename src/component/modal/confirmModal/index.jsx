import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { notification } from 'antd';
import {setShowDeleteModal, setShowResetModal } from '../../../redux/slice/user';
import { deleteUser } from '../../../api/user';
import { resetPassword } from '../../../api/user';
const DeleteModal = () => { 
   const dispatch = useDispatch();  
   const user = useSelector((state) => state.user)
   const [api, contextHolder] = notification.useNotification();
   const openNotification = (result) => {
    api.open({
      message: 'Xác nhận',
      description:
        `${result.message}`,
      duration: 0,
    });
  };
   const handleOk = async(e) => {
    e.preventDefault();
    try {
      if(user.isShowDeleteModal) {
        let result =  await deleteUser(user.infoUser.user_id)
        dispatch(setShowDeleteModal(false))
        openNotification(result)
        window.location.reload()
      } else if(user.isShowResetModal) { 
        let result = await resetPassword(user.infoUser.user_id);
        dispatch(setShowResetModal(false))
        openNotification(result);
        window.location.reload();
      }
    } catch (error) {
        openNotification(error.message)
    }
   }
   const handleCancel = () => {
        user.isShowDeleteModal ?
        dispatch(setShowDeleteModal(false)) : 
        dispatch(setShowResetModal(false)) 
   }
  return (
    <>
    {contextHolder}
      <Modal
        open={user.isShowDeleteModal || user.isShowResetModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       {user.isShowDeleteModal ?
        <p>Bạn có chắc chắn muốn xóa User</p>: 
            <p> Bạn có chắc chắn muốn reset mật khẩu người dùng này</p>
        } 
      </Modal>
    </>
  );
};
export default DeleteModal;