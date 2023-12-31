import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShowUpdate, setNotShowUpdate } from '../../../../redux/slice/user/showModalUpdate';
import { validateEmail, validatePhoneNumber } from '../../../../utill/validate';
import {udpateUser} from "../../../../api/user/updateUser"
import { Modal, Form, Input, TreeSelect, notification} from 'antd';
import ButtonComponent from '../../../button';
import classNames from 'classnames/bind';
import styles from "./form.module.scss"
const cx = classNames.bind(styles)
const UpdateUserModal = () => {
  const isShowUpdate = useSelector((state) => state.showUpdate.isShowUpdate);
  const user = useSelector(state => state.showInfo.user)
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState(user.email)
  const [phonenumber, setPhonenumber] = useState(user.phonenumber)
  const [role, setRole] = useState(user.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openNotification = (placement) => {
    api.info({
      message: `Thông báo cập nhật`,
      description:
      "cập nhật người dùng thành công",
      placement,
    });
  };
  useEffect(() => {
    setEmail(user.email)
  }, [user.email])
  useEffect(() => {
    setPhonenumber(user.phonenumber)
  }, [user.phonenumber])
  useEffect(() => {
    setRole(user.role)
  }, [user.role])
  const handleEmail = (e) => {
    setEmail(e.target.value)
  } 
  const handlePhone = (e) => {
    setPhonenumber(e.target.value)
  }
  const handleRole = (newValue) => {
    setRole(newValue);
  };
   const handleOk = () => {
    dispatch(setNotShowUpdate())
  }
  const handleCancle = () => {
    dispatch(setNotShowUpdate())
  }
  //==============================

  //=============================
  const onSubmit = () => {
        udpateUser(user._id, {email, phonenumber, role}).then((data) => {
            if(data.error === "jwt expired") {
                localStorage.removeItem("accessToken")
                navigate("/")
            }else if(data.error) {
                // console.log(data.error)
            }else {
              openNotification('top')
              dispatch(setNotShowUpdate())
              window.location.reload();
            }
            }
        )  
  }
  const treeData = [
    {
      title: 'admin',
      value: 'admin',
    },
    {
      title: 'user',
      value: 'user',
    },
  ];
  return (
    <>
      <Modal
        title="Update User"
        style={{
          top: 20,
        }}
        footer = {null}
        open={isShowUpdate}
        onOk={handleOk}
        onCancel={handleCancle}
      >
          <Form 
          layout="horizontal"
          style={{
            maxWidth: 400,
          }}
          // onFinish={onFinish}
          >
            <Form.Item 
            name="email"
            rules={[
             {
               validator: validateEmail,
             }
           ]} 
               style={{width: "300px", marginLeft: "55px"}} label = "Email">
               <Input 
                 allowClear ={true} placeholder={email} onChange={handleEmail}></Input>
            </Form.Item>
            <Form.Item  
             name="phonenumber"
             rules={[
              {
                validator: validatePhoneNumber,
              }
            ]} 
              label = "Phonenumber">
               <Input
                style={{width: "255px"}}
                allowClear ={true}
                placeholder={phonenumber}
                onChange={handlePhone}>
                  </Input>
            </Form.Item>
            <Form.Item name="role" lable = "role">
            <TreeSelect
               style={{ width: '25%' }}
               value={role}
               dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
               treeData={treeData}
               placeholder="Please select"
               treeDefaultExpandAll
               onChange={handleRole}
             />
            </Form.Item>
          </Form>
          <ButtonComponent onClick = {onSubmit} className = {cx('btn-submit')}>Submit</ButtonComponent>
      </Modal>
      {contextHolder}
    </>
  );
};
export default UpdateUserModal;