import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Form, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowUpdateModal } from '../../../../redux/slice/store';
import { updateStoreFoot } from '../../../../api/store';


export const UpdateStoreModal = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thành công',
      description:
        'Cập nhật Thông tin cửa hàng thành công',
    });
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  const handleCancel = () => {
    dispatch(setShowUpdateModal(false));
  };

  const handleFinish = async(values) => {
   try {
    const result = await updateStoreFoot ({
        store_id: store.infoStore.store_id,
        ...values
    })
    dispatch(setShowUpdateModal(false))
    openNotificationWithIcon('success')
    
   } catch (error) {
    console.error(error)
   }
  };

  useEffect(() => {
    if (store.infoStore) {
      form.setFieldsValue({
        store_name: store.infoStore.store_name,
        avatar: store.infoStore.avatar,
        address: store.infoStore.address,
        phone: store.infoStore.phone,
        rate: store.infoStore.rate,
        time_open: store.infoStore.time_open,
        time_close: store.infoStore.time_close,
        store_type: store.infoStore.store_type,
      });
    }
  }, [store]);
  return (
    <div> 
    {contextHolder}
    <Modal
      title="Cập nhật thông tin cửa hàng"
      onCancel={handleCancel}
      visible={store.isShowUpdateModal}
      okText="OK"
      footer={false}
      cancelText="Hủy"
    >
      <Form
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="tên cửa hàng"
          name="store_name"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="avatar"
          name="avatar"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập link avatar" />
        </Form.Item>

        <Form.Item
          label="địa chỉ"
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập địa chỉ" />
        </Form.Item>

        <Form.Item
          label="số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập số điện thoại" />
        </Form.Item>

        <Form.Item
          label="đánh giá"
          name="rate"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập đánh giá" />
        </Form.Item>

        <Form.Item
          label="giờ mở cửa"
          name="time_open"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập giờ mở cửa" />
        </Form.Item>

        <Form.Item
          label="giờ đóng cửa"
          name="time_close"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập giờ đóng cửa" />
        </Form.Item>

        <Form.Item
          label="loại cửa hàng"
          name="store_type"
          rules={[
            {
              required: true,
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: '100%' }} placeholder="nhập loại cửa hàng" />
        </Form.Item>

        <Button htmlType="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
          Cập nhật thông tin
        </Button>
      </Form>
    </Modal>
    </div>
    
  );
};

