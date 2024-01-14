import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Form, notification, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAddModal } from '../../../../redux/slice/product';
import { getAllStoreFoot } from '../../../../api/store';
import { addProductFoot } from '../../../../api/product';

export const AddProductModal = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [storeLists, setStoreLists] = useState([]);
  const [selectValue, setSelectValue]= useState()
  useEffect(() => {
    getAllStoreFoot().then((data) => {
      setStoreLists(data.data);
    });
  }, []);

  const handleCancel = () => {
    dispatch(setShowAddModal(false));
  };

  const handleFinish = async (value) => {
        console.log(selectValue)
        try {
            const result = await addProductFoot({store_id: selectValue, ...value})
            console.log(result)
        } catch (error) {
            console.log(error)
        }

  };
  const handleSelect = (value) => {
     setSelectValue(value)
  }
 
  return (
    <>
      {contextHolder}
      <Modal
        title="Thêm sản phẩm"
        onCancel={handleCancel}
        open={product.isShowAddModal}
        okText="OK"
        footer={false}
        cancelText="Hủy"
      >
        <Form style={{ maxWidth: 600 }} onFinish={handleFinish}>
          <Form.Item
            label="tên sản phẩm"
            name="product_name"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên sản phẩm',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Tên cửa hàng"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn cửa hàng',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Select
              placeholder="Chọn cửa hàng"
              onChange={handleSelect}
            >
              {storeLists?.map((store) => (
                <Select.Option key={store.store_id} value={store.store_id}>
                  {store.store_name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="avatar"
            name="avatar"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập avatar',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập avatar" />
          </Form.Item>

          <Form.Item
            label="size"
            name="size"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập size',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập size" />
          </Form.Item>

          <Form.Item
            label="giá"
            name="price"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập giá',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập giá" />
          </Form.Item>

          <Form.Item
            label="giảm giá"
            name="discount"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập giảm giá',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập giảm giá" />
          </Form.Item>

          <Form.Item
            label="status"
            name="status"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập status',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập status" />
          </Form.Item>

          <Form.Item
            label="rate"
            name="rate"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập rate',
              },
            ]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input style={{ width: '100%' }} placeholder="Nhập rate" />
            </Form.Item>

<Form.Item
  label="description"
  name="description"
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập description',
    },
  ]}
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
>
  <Input style={{ width: '100%' }} placeholder="Nhập description" />
</Form.Item>

<Button htmlType="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
  Thêm sản phẩm
</Button>
</Form>
</Modal>
</>
);
};

