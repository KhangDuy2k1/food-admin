import classNames from "classnames/bind"
import ButtonComponent from "../../../button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io"
import { RxUpdate } from "react-icons/rx";
import { useDispatch } from "react-redux";
import styles from "./orderList.module.scss";
import { useState } from "react";
import { setShowDeleteOrder } from "../../../../redux/slice/order/InfoOrder";
const cx = classNames.bind(styles);
const OrderList = ({order, index}) => {
    const date = new Date(order.order_date)
    // let formatDate = `${date.getDay}-${date.getMonth()}-${date.getFullYear()} `
    // console.log(item)
    // const date = new Date(order.createAt);
    const year = date.getFullYear(); 
    const month = date.getMonth()+1; 
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();   
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const dispatch = useDispatch()
    // const handleInfo = () => {

     //             email: item.user_id.email,
    //             phonenubmer: item.user_id.phonenumber
    //         }))
    //         dispatch(setShowOrderInfo())
    // }
    const handleDelete = async() => { 
        dispatch(setShowDeleteOrder(true))
    }
    return (
        <tr style={{height: "50px", textAlign: "center"}}>
            <td className={cx('column column-id')}>{index}</td>
            <td className={cx('column column-email')}>{formattedDate}</td>
            <td className={cx('column column-time')}>{order.store_name}</td>
            <td className={cx('column column-name')}>{order.phone}</td>
            <td className={cx('column column-quantity')}>{order.address}</td>
            <td className={cx('column column-quantity')}>{order.total_price}</td>
            <td className={cx('column column-quantity')}>{order.status}</td>
            <td>  
               <RiDeleteBin6Line onClick={handleDelete} style={{cursor: "pointer",fontSize: "30px", color: "red"}}/>
               <IoMdInformationCircleOutline style={{cursor: "pointer",fontSize: "30px"}}/>
               <RxUpdate style={{fontSize: "30px", cursor:"pointer", color: "#3333cc"}}/>
            </td>
        </tr>
    )
}
export default OrderList