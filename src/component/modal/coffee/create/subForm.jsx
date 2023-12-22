import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImportOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag , notification} from 'antd';
import { validateEmail, validateVolume, validatePrice ,validateImg, validateName } from '../../../../utill/validate';
import { validateDesc } from '../../../../utill/validate';
import { useDispatch } from 'react-redux';
// import { showCreateCoffee, notShowCreateCoffee } from '../../../../redux/slice/coffee/createCoffee';
import { treeData } from './treeData';
import { TreeSelect } from 'antd';
import ButtonComponent from '../../../button';
import styles from "./createCoffee.module.scss"
import classNames from 'classnames/bind';
import {createCoffee} from '../../../../api/coffee/createCoffee';
const cx = classNames.bind(styles)


const FormCreate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (key, message, description) => {
        api.open({
            key: key,
            message: message,
            description: description,
          });
    }
    const onFinish  = async(value) => { 
      const response =  await createCoffee({name: value.name, volume: value.volume, price: value.price, image: value.img, desc : value.desc, category: value.select})
        if(response?.error === "jwt expired"){
                    localStorage.removeItem("accessToken") 
                    openNotification("3", "thông báo", "token hết hạn")
                    navigate("/")
        }else if(response?.mes === "lỗi server"){
                    openNotification("1", "Thông báo", "Có lỗi xảy ra" )
        }else {
             console.log("tao thanh cong")
             openNotification("2", "Thông báo tạo cà phê", "Tạo cà phê thành công")
            //  dispatch(notShowCreateCoffee())
             window.location.reload();
        }
    }
return (    
    <Form
      layout="vertical"
      onFinish={onFinish}
    >
        {contextHolder}
        <Form.Item 
       name="name"
            rules={[
             {
               validator: validateName,
             }
           ]}>
        <Input placeholder="Nhập tên cà phê" allowClear = {true}/>
      </Form.Item>

      <Form.Item
      name="price"
      rules={[
       {
         validator: validatePrice,
       }
     ]} >
        <Input placeholder="nhập giá cà phê" allowClear = {true}/>
      </Form.Item>

      <Form.Item name="volume"
      rules={[
       {
         validator: validateVolume,
       }
     ]}>
        <Input placeholder="thể tích" allowClear = {true}/>
      </Form.Item>

      <Form.Item name="img"
      rules={[  
       {
         validator: validateImg,
       }
     ]}>
        <Input placeholder="điền link ảnh vào đây" allowClear = {true}/>
      </Form.Item>

      <Form.Item 
       name="desc"
      rules={[  
       {
         validator: validateDesc,
       }
     ]}>
      <Input.TextArea 
      
      rows={4} placeholder="Nhập Mô tả"/>
      </Form.Item>
      <Form.Item name="select">
      <TreeSelect
        style={{
            marginTop:"20px",
            width: '200px',
        }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        />
      </Form.Item>
      
    <div style={{display: "flex", justifyContent: 'flex-end'}}>
    <ButtonComponent htmlType="submit" className = {cx('btn-submit')}>Submit</ButtonComponent>
    </div>
   
  </Form>
  )
};
export default FormCreate;