import { Modal, notification } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setShowDeleteModal } from "../../../../redux/slice/product"
import { deleteProductFoot } from "../../../../api/product"

export const ConfirmDeleteProductModal = () => { 
    const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thành công',
      description:
        'Xóa thành công',
    });
  };
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const handleCancle = () => {
        dispatch(setShowDeleteModal(false))
    }
    const handleOk = () => { 
        deleteProductFoot(product.infoProduct.product_id).then((data) => { 
            dispatch(setShowDeleteModal(false))
            openNotificationWithIcon("success")
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <div>
            {contextHolder}
             <Modal
            onOk={handleOk}
            onCancel={handleCancle}
            open = {product.isShowDeleteModal}
            >
                Xác nhận xóa sản phẩm
              
            </Modal>

        </div>
        
    )
}
    