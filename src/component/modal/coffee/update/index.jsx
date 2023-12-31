import { Modal, Form, Input, TreeSelect, notification } from "antd"
import ButtonComponent from "../../../button"
import { treeData } from "../create/treeData"
import { validateName, validatePrice, validateVolume, validateImg, validateDesc  } from "../../../../utill/validate"
import { useDispatch, useSelector } from "react-redux"
import { updateCoffee } from "../../../../api/coffee/updateCoffee"
import styles from "./udpate.module.scss"
import { setShowUpdateCoffee } from "../../../../redux/slice/coffee/createCoffee"
import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const cx = classNames.bind(styles)
export const UpdateCoffeeModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [image, setImage] = useState()
    const [volume, setVolume] = useState()
    const [desc, setDesc] = useState()
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (key, message, description) => {
        api.open({
            key: key,
            message: message,
            description: description,
          });
    }
    const isShow = useSelector((state) => state.showCreateCoffee.visibleUpdateCoffee)
    const coffee = useSelector((state) => state.showCreateCoffee.coffee)
    // console.log("================================")
    const handleCancle = () => {
        dispatch(setShowUpdateCoffee(false))
    }
    const handleSubmit = async() => {
           const response = await updateCoffee({_id: coffee._id,  name, price, category, image,volume, desc})
           if(response.mes === "jwt expired"){
                    localStorage.removeItem("accessToken")
                    navigate('/')
           }else {
                openNotification("1", "thông báo", "cập nhật thành công")
               window.location.reload()
           }
    }
    return (
        <Modal title="Update" open={isShow}  onCancel={handleCancle} footer={false}>
        <Form
        layout="vertical"
      >
        {contextHolder}
          <Form.Item 
             name="name"
              rules={[
               {
                 validator: validateName,
               }
             ]}>
          <Input placeholder="nhập tên coffe cần update" allowClear = {true} onChange={(e) => setName(e.target.value)}/>
        </Form.Item>
        <Form.Item
        name="price"
        rules={[
         {
           validator: validatePrice,
         }
       ]} >
          <Input placeholder= "nhập giá coffee cần update" allowClear = {true} onChange={(e) => {
                setPrice(e.target.value)
          }}/>
        </Form.Item>
  
        <Form.Item name="volume"
        rules={[
         {
           validator: validateVolume,
         }
       ]}>
          <Input placeholder="nhập dung tích cần cập nhật" allowClear = {true} onChange={(e) => setVolume(e.target.value)}/>
        </Form.Item>
  
        <Form.Item name="img"
        rules={[  
         {
           validator: validateImg,
         }
       ]}>
          <Input placeholder="nhập link ảnh" onChange={e => setImage(e.target.value)} allowClear = {true}/>
        </Form.Item>
  
        <Form.Item 
         name="desc"
        rules={[  
         {
           validator: validateDesc,
         }
       ]}>
        <Input.TextArea 
        
        rows={4} placeholder="nhập mô tả cho cà phê" onChange={e => setDesc(e.target.value)}/>
        </Form.Item>
        <Form.Item name="select">
        <TreeSelect
          onChange={(value) => {
              // console.log(value)
            return setCategory(value)}}
          defaultValue={category}
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
      <ButtonComponent onClick  ={ handleSubmit} className = {cx('btn-submit')}>Cập nhật</ButtonComponent>
      </div>
     
    </Form>
    </Modal>
    )
}
