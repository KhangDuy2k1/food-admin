import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowDeleteOrder } from '../../../../redux/slice/order/InfoOrder';  
import { Modal } from 'antd';
export const ShowDeleteOrderModal = () => {
  const dispatch = useDispatch()
  const isShowDeleteOrder = useSelector((state) => state.showOrderInfo.isShowDelete)
  const infoUser = useSelector((state) => state.showOrderInfo.user)
  // console.log(infoUser)
  const showModal = () => {

  };
  const handleOk = () => {
    dispatch()
  };
  const handleCancel = () => {
    dispatch(setShowDeleteOrder(false))
  };
  return (
    <>
      <Modal title="xóa " open={isShowDeleteOrder} onOk={handleOk} onCancel={handleCancel}>
         <p>Bạn có chắc chắn muốn xóa</p>
      </Modal>
    </>
  );
};
