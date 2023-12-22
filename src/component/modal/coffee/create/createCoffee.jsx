import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showCreateCoffee, notShowCreateCoffee } from '../../../../redux/slice/coffee/createCoffee';
import { Button, Modal } from 'antd';
import FormCreate from './subForm';
const CreateCoffeeModal = () => {
  const dispatch = useDispatch()
  const isShow = useSelector(state => state.showCreateCoffee.isShowCreateCoffee)
  const showModal = () => {
   
  };
  const handleOk = () => {
    
  };
  const handleCancel = () => {
    dispatch(notShowCreateCoffee());
  };
  return (
    <>
      <Modal title="Tạo Cà Phê" open={isShow} onOk={handleOk} onCancel={handleCancel} footer={false}>
       <FormCreate/>
      </Modal>
    </>
  );
};
export default CreateCoffeeModal;