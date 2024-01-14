import React from 'react';
import { Button, Input, Modal, Form, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAddModal } from '../../../../redux/slice/store';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { addStoreFoot } from '../../../../api/store';

let cx = classNames.bind(styles);

export const AddStoreModal = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  const handleCancle = () => {
    dispatch(setShowAddModal(false));
  };

  const onFinish = async(value) => {
    try {
        console.log(value)
        const result = await addStoreFoot(value);
        openNotificationWithIcon('success')
        dispatch(setShowAddModal(false))
    } catch (error) {
        openNotificationWithIcon('error')
    }
    
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thông báo',
      description:
        'Thêm cửa hàng thành công',
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Thêm cửa hàng"
        onCancel={handleCancle}
        open={store.isShowAddModal}
        okText="OK"
        footer={false}
        cancelText="Hủy"
      >
        <Form onFinish={onFinish} style={{ maxWidth: 600 }}>
          {/* Các Form.Item */}
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
            <Input placeholder="nhập tên cửa hàng" />
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
            Thêm Cửa hàng
          </Button>
        </Form>
      </Modal>
    </>
  );
};
