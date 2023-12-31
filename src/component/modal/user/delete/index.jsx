import React from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { notification } from 'antd';
import { setNotShowDelete } from '../../../../redux/slice/user/delete';
import { deleteUser } from '../../../../api/user/deleteUser';
const DeleteModal = () => { 
   const dispatch = useDispatch();   
   const navigate = useNavigate(); 
   const [api, contextHolder] = notification.useNotification();
   const openNotification = () => {
    api.open({
      message: 'Xác nhận xóa người dùng',
      description:
        'xóa người dùng thành công.',
      duration: 0,
    });
  };
   const isShowDelete = useSelector((state) => state.showDelete.isShowDelete)
   const userInfo = useSelector(state => state.showInfo.user)
   const handleOk = (e) => {
      e.preventDefault();
      deleteUser(userInfo.user_id).then((data) => {
               dispatch(setNotShowDelete())
              openNotification()
             window.location.reload()
          })
         .catch((error) => {
        // console.log(error)
      })
   }
   const handleCancel = () => {
        dispatch(setNotShowDelete())
   }
  return (
    <>
    {contextHolder}
      <Modal
        open={isShowDelete}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn xóa User</p>
      </Modal>
    </>
  );
};
export default DeleteModal;