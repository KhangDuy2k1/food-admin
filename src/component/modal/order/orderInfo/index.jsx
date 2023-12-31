import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setNotShowOrderInfo} from "../../../../redux/slice/order/InfoOrder";
import { Button, Modal } from 'antd';
const ShowInfoModal = () => {
  const dispatch = useDispatch()
  const isShow = useSelector((state) => state.showOrderInfo.isShowOrderInfo)
  // console.log(isShow)
  const infoUser = useSelector((state) => state.showOrderInfo.user)
  // console.log(infoUser)
  const showModal = () => {

  };
  const handleOk = () => {
    dispatch(setNotShowOrderInfo())
  };
  const handleCancel = () => {
    dispatch(setNotShowOrderInfo())
  };
  return (
    <>
      <Modal title="Thông tin liên hệ" open={isShow} onOk={handleOk} onCancel={handleCancel}>
        <p style={{fontSize: "20px"}}><span style={{fontWeight: "500"}}>Email: </span >{infoUser.email}</p>
        <p style={{fontSize: "20px"}}><span style={{fontWeight: "500"}}>Số điện thoại: </span>{infoUser.phonenubmer}</p>
        {/* <p>Some contents...</p> */}
      </Modal>
    </>
  );
};
export default ShowInfoModal;
