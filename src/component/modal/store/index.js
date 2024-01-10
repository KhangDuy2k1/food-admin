import { ExclamationCircleOutlined } from '@ant-design/icons';
import React  from 'react';
import { Modal, notification  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDeleteModal } from '../../../redux/slice/store';
import { deleteStoreFoot } from '../../../api/store';
export const ConfirmDeleteStore = () => {
    
    const dispatch = useDispatch()
    const store = useSelector((state) => state.store) 
   const handleOk = async() => { 
    try {
     
       const result =  await deleteStoreFoot(store.infoStore.store_id)
       console.log("==============")
       dispatch(setShowDeleteModal(false))
       window.location.reload();
    } catch (error) {
        console.log(error)
    }  
   }

   const handleCancle = () => {  
        dispatch(setShowDeleteModal(false))
   }
  return (
    <>
      <Modal
        title= {
        <>
         <ExclamationCircleOutlined style={{color: "#DAA520", fontSize: "20px", marginRight: "10px"}}/>
          <span>Bạn có chắc chắn muốn xóa cửa hàng này?</span>
        </>
        }
        onOk={handleOk}
        onCancel={handleCancle}
        open={store.isShowDeleteModal}
        okText="OK"
        cancelText="Hủy"
      >
      </Modal>
    </>
  );
};