import classNames from "classnames/bind"
import ButtonComponent from "../../../button";
import { useDispatch } from "react-redux";
import styles from "./orderList.module.scss"
import { useState } from "react";
import { setShowOrderInfo, setOrderInfo } from "../../../../redux/slice/order/InfoOrder";
const cx = classNames.bind(styles);
const OrderList = ({item, index}) => {
    // console.log(item)
    const date = new Date(item.createAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();   
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const dispatch = useDispatch()
    const handleInfo = () => {

            dispatch(setOrderInfo({
                email: item.user_id.email,
                phonenubmer: item.user_id.phonenumber
            }))
            dispatch(setShowOrderInfo())
    }
    return (
        <tr style={{height: "50px", textAlign: "center"}}>
            <td className={cx('column column-id')}>{index}</td>
            <td className={cx('column column-email')}>{item.user_id?.email}</td>
            <td className={cx('column column-time')}>{formattedDate}</td>
            <td className={cx('column column-name')}>{item.coffeeItem_id?.name}</td>
            <td className={cx('column column-quantity')}>{item?.quantity}</td>
            <td className={cx('column column-total')}>{item?.total} VNĐ</td>
            <td className={cx('column column-action')}>
                    <ButtonComponent onClick = {handleInfo} className ={cx('btn-information')}>Thông tin liên hệ</ButtonComponent>                    
            </td>
            <td className={cx("column-status")}>
                {item?.status}
            </td>
        </tr>
    )
}
export default OrderList