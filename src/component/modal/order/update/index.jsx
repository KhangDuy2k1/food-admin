import React, { useEffect, useState } from 'react';
import { Modal, Input, Form, notification  } from 'antd';
import ButtonComponent from '../../../button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShowUpdateOrder } from '../../../../redux/slice/order';
import { addressVN } from '../../../../api/utillApi';
import { statusArr } from './data';
import { SelectComponent } from './sub';
import { updateOrdersFoot } from '../../../../api/order';
export const UpdateOrderModal = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const order = useSelector((state) => state.order)
   const [allAdress, setAlldress] = useState([])
   const [province, setProvince] = useState()
   const [districts, setDistricts] = useState([])
   const [district, setDistinct] = useState()
   const [phoneNumber, setPhoneNumber] = useState();
   const [statusState, setStatusState] = useState()
   const [address, setAddress] = useState()
   const [idOrder, setIdOrder] = useState()
   const [api, contextHolder] = notification.useNotification();
   const openNotification = (placement) => {
     api.info({
      //  message: `Notification ${placement}`,
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
   useEffect(() => { 
    addressVN().then((data) => { 
      setAlldress(data)
    }).catch((error) => {
      console.log(error)
    })
   }, [])
  const handleCancel = () => {
     dispatch(setShowUpdateOrder(false))
  };


const onChangeProvince = (value) => {
    const result =  allAdress?.filter((data) => {
      return data.name === value
     })[0].districts
     setDistricts(result)
     setAddress(null)
     setProvince(value)
};

const onChangeDistricts = (value) => { 
      setAddress(null)
      setDistinct(value)
}


const onChangeStatus = (value) => {
       setStatusState(value)
}
const onChangePhoneNumber = (e) => { 
        setPhoneNumber(e.target.value);
}

const handleUpdate = () => {
     
        updateOrdersFoot(
          {
            status : statusState,
             phone: phoneNumber,
              address: address ? address : `${district}-${province}`,
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

    <Form.Item
      label="Địa chỉ"
      name="address"
    >

     <div style={{display: "flex"}}>
         <SelectComponent dataArr={allAdress} pld = "Chọn Tỉnh Thành" onChange={onChangeProvince} value={address ? address?.split('-')[1] : province}/>
         <SelectComponent dataArr={districts} pld = "Chọn Quận/Huyện" onChange={onChangeDistricts} value={address ? address?.split('-')[0] : district}/>
    </div>

    </Form.Item>

    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "40px"}}> 
      <label style={{marginLeft: "14%"}} htmlFor="">Số điện thoại: </label>
      <Input onChange={onChangePhoneNumber} style={{width: "67%"}} value={phoneNumber}/>
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
