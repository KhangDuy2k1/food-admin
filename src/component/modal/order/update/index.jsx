import React, { useEffect, useState } from 'react';
import { Modal, Input, Form, notification  } from 'antd';
import ButtonComponent from '../../../button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShowUpdateOrder } from '../../../../redux/slice/order';
import { statusArr } from './data';
import { SelectComponent } from './sub';
import { updateOrdersFoot } from '../../../../api/order';
export const UpdateOrderModal = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const order = useSelector((state) => state.order)
   const [phoneNumber, setPhoneNumber] = useState();
   const [statusState, setStatusState] = useState()
   const [address, setAddress] = useState("jfaosfjai");
   const [idOrder, setIdOrder] = useState()
   const [api, contextHolder] = notification.useNotification();
   const openNotification = (placement) => {
     api.info({
       description: "Cập nhật thành công",
       placement,
     });
   };
   useEffect(() => { 
      setIdOrder(order.infoOrder.id)
      setAddress(order.infoOrder.address)
      setStatusState(order.infoOrder.status)
      setPhoneNumber(order.infoOrder.phone)
   }, [order])
  const handleCancel = () => {
     dispatch(setShowUpdateOrder(false))
  };

  const onChangeStatus = (value) => {
       setStatusState(value)
  }
  const onChangePhoneNumber = (e) => { 
        setPhoneNumber(e.target.value);
}

const onChangeAddress = (e) => { 
  setAddress(e.target.value);
}
const handleUpdate = () => {
     
        updateOrdersFoot(
          {
            status : statusState,
             phone_order: phoneNumber,
              address_order: address,
               id_order: idOrder
          }).then((data) => {
              dispatch(setShowUpdateOrder(false))
              openNotification('topRight')
        }).catch((error) => {
          console.error(error)
        })
}
  return (
    <>
    {contextHolder}
      <Modal
        footer={null}
        title="Cập nhật đơn hàng"
        open={order.isShowUpdateOrderModal}
        onCancel={handleCancel}
      >
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    autoComplete="off"
    >
    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "40px"}}> 
      <label style={{marginLeft: "14%"}} htmlFor="">Địa chỉ:</label>
      <Input onChange={onChangeAddress} style={{width: "67%"}} placeholder='nhập địa chỉ đơn hàng' value={address}/>
    </div>

    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "40px"}}> 
      <label style={{marginLeft: "14%"}} htmlFor="">Số điện thoại: </label>
      <Input onChange={onChangePhoneNumber} style={{width: "67%"}} placeholder='nhập số điện thoại' value={phoneNumber}/>
    </div>

       <div>
       <SelectComponent  dataArr={statusArr} pld="Chọn trạng thái" onChange={onChangeStatus} value={statusState}/>
       </div>
       
        <ButtonComponent onClick = {handleUpdate} style={{backgroundColor: "blue", color: "white", marginLeft: "82%"}}>Cập nhật</ButtonComponent>
    
  </Form>
      </Modal>
    </>
  );
};
