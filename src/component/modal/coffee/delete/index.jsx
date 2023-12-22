import React, { useState } from 'react';
import { deleteCoffeeAxios } from '../../../../api/coffee/deleteCoffee';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, notification } from 'antd';
import { setShowDeleteCoffee } from '../../../../redux/slice/coffee/createCoffee';
const DeleteCoffeeModal = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (key, message, description) => {
    api.open({
        key: key,
        message: message,
        description: description,
      });
}
     const navigate = useNavigate();
     const dispatch = useDispatch();
    const isShowDelete = useSelector((state) => state.showCreateCoffee.visibleDeleteCoffee)
    const idCoffeeDelete = useSelector((state) => state.showCreateCoffee.coffee._id)
    console.log(idCoffeeDelete)
  const showModal = () => {
    
  };
  const handleOk = () => {
    
    deleteCoffeeAxios(idCoffeeDelete).then((data) => {
        console.log(data)
        if(data.error === "jwt expired"){
           localStorage.removeItem("accessToken")
           navigate('/')
        }else if(data.error) {
           console.log(data.error)
        }else {
          openNotification("1", "Thông báo", "Xóa người dùng thành công")
           window.location.reload()
          dispatch(setShowDeleteCoffee(false))

           
        }
    })
  }
    
  const handleCancel = () => {
    dispatch(setShowDeleteCoffee(false))
  }
  return (
    <>
      {contextHolder}
      <Modal
        title="Title"
        open={isShowDelete}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        Bạn có chắc chắn muốn xóa coffee
      </Modal>
    </>
  );
};
export default DeleteCoffeeModal;