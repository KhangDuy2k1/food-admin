import OrderList from "./orderList"
import ButtonComponent from "../../button"
import { listAllOrders } from "../../../api/order/listOrder"
import classNames from "classnames/bind"
import styles from "./order.module.scss"
import { useEffect, useState } from "react"
const cx = classNames.bind(styles)
const Order = () => {
    const [listOrders, setListOrders] = useState()
    useEffect(() => {
        listAllOrders().then((data) => { 
             if(data.success) { 
                  setListOrders(data.allOrder)
             }
        }).then((error) => {
               console.error(error)
        })
    }, [])
    return (
        <div> 
            <table className={cx('table')} style={{width: "100%"}}>
                <tr>
                    <th>mã đơn hàng</th>
                    <th>email</th>
                    <th>thời gian đặt hàng</th>
                    <th>tên coffee</th>
                    <th>số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Thông tin đơn hàng</th>
                    <th>Trạng thái</th>
                </tr>
             {
                listOrders?.map((item, index) => { 
                   return <OrderList key={index} index = {index} item ={item}/>
                })
             }
           </table>
          
        </div>
    )
}
export default Order