import React from 'react';
import { Modal, Button, Checkbox, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogoutModal } from '../../../../redux/slice/user';
export const UpdateOrderModal = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch()
  const handleOk = () => {
     dispatch(setLogoutModal(false))
     navigate('/')
  }
  const handleCancel = () => {
     dispatch(setLogoutModal(false))
  };
  const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <>
      <Modal
        footer={null}
        title="Cập nhật đơn hàng"
        open={true}
        onOk={handleOk}
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
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Địa chỉ"
      name="address"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Số điện thoại"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </>
  );
};
