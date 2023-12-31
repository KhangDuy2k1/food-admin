import OrderList from "./orderList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { allOrdersFoot } from "../../../api/user/footapp/allOrders";
import classNames from "classnames/bind"
import styles from "./order.module.scss"
import { useEffect, useState } from "react"
const cx = classNames.bind(styles)
const Order = () => {
    const [listOrders, setListOrders] = useState();
    const [page, setPage] = useState(1);
    useEffect(() => {
        allOrdersFoot(page, 8).then((data) => {
                  setListOrders(data.data)
        }).then((error) => {
               console.error(error)
        })
    }, [page])
    return (
        <div> 
            <table className={cx('table')} style={{width: "100%"}}>
                <tr>
                    <th>STT</th>
                    <th>Thời gian đặt hàng</th>
                    <th>Tên cửa hàng</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
             {
                listOrders?.map((order, index) => { 
                   return <OrderList order = {order} index={index} />
                })
             }
           </table>
           <div className={cx('pagination-container')}>
        <PaginationControl
            page={page}
            between={4}
            total={250}
            limit={10}
            changePage={(page) => {
            setPage(page)
            }}
            ellipsis={1}
        />
        </div>
        </div>
    )
}
export default Order