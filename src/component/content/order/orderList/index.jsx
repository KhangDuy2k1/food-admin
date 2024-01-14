import classNames from "classnames/bind"
import { formatDate } from "../../../../utill/formatDate";
import { LuPenLine } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io"
import styles from "./orderList.module.scss";
import { useDispatch } from "react-redux";
import { setShowUpdateOrder } from "../../../../redux/slice/order";
import { setInfoOrder } from "../../../../redux/slice/order";
const cx = classNames.bind(styles);
const OrderList = ({order, index}) => {
    const formattedDate = formatDate(order.order_date)
    const dispatch = useDispatch()
    const handleUpdate = () => { 
        dispatch(setInfoOrder({ 
            id: order.order_id,
            address: order.address_order,
            phone: order.phone_order,
            status: order.status
        }))
        dispatch(setShowUpdateOrder(true))
    }
    return (
        <tr style={{height: "50px", textAlign: "center"}}>
            <td className={cx('column column-id')}>{index}</td>
            <td className={cx('column column-email')}>{formattedDate}</td>
            <td className={cx('column column-time')}>{order.store_name}</td>
            <td className={cx('column column-name')}>{order.phone_order}</td>
            <td className={cx('column column-quantity')}>{order.address_order}</td>
            <td className={cx('column column-quantity')}>{order.total_price} VND</td>
            <td className={cx('column column-quantity')}>{order.status}</td>
            <td>  
               <IoMdInformationCircleOutline style={{cursor: "pointer",fontSize: "30px"}}/>
               <LuPenLine onClick={handleUpdate} style={{fontSize: "30px", cursor:"pointer", color: "#3333cc"}}/>
            </td>
        </tr>
    )
}
export default OrderList