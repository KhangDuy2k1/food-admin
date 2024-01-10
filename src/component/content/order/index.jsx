import OrderList from "./orderList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Pagination} from "antd"
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { allOrdersFoot, newOrderFoot, searchOdersFoot } from "../../../api/order";
import classNames from "classnames/bind"
import styles from "./order.module.scss"
import Search from "antd/es/input/Search";
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
    const onSearch = async(value) => { 
        try {
            let result = await searchOdersFoot(value)
            setListOrders(result)
        } catch (error) {
            console.log(error)
        }
          
    }
    const handleSelect = async(e) => {
       try {
       const result =  await allOrdersFoot()
            let dataSort = result.data;
            if(e.target.value === "tlc"){
                for(let i = 0; i < dataSort.length; i++){ 
                    for(let j = i + 1; j < dataSort.length; j++){
                        if(parseInt(dataSort[i].total_price) > parseInt(dataSort[j].total_price)){
                                 let temp = dataSort[i]
                                 dataSort[i] = dataSort[j]
                                 dataSort[j] = temp
                        }
                    }
                }
                dataSort.length > 8 ? 
                setListOrders(dataSort.slice(0,8)):
                setListOrders(dataSort)
            }else if(e.target.value === "cxt"){
                for(let i = 0; i < dataSort.length; i++){ 
                    for(let j = i + 1; j < dataSort.length; j++){
                        if(parseInt(dataSort[i].total_price) < parseInt(dataSort[j].total_price)){
                                 let temp = dataSort[i]
                                 dataSort[i] = dataSort[j]
                                 dataSort[j] = temp
                        }
                    }
                }
                dataSort.length > 8 ? 
                setListOrders(dataSort.slice(0,8)):
                setListOrders(dataSort)
            }else { 
               newOrderFoot().then((data) => { 
                   if(data.data.length > 8){
                    setListOrders(data.data.slice(0,8))
                   }else {
                    setListOrders(data.data)
                   }
               })
            }
       } catch (error) {
          console.error(error)
       } 
    }
    const onChange = (value) => {
            setPage(value)
    }
    return (
        <div> 
            <div style={{display: "flex"}}>
            <Search style={{width: "300px"}} placeholder="Tìm kiếm đơn hàng" onSearch={onSearch} enterButton />
              <div>
                      <select onChange={handleSelect} style={{height: "30px", marginLeft: "300px", backgroundColor: "#5F9EA0", color:" white", borderRadius: "5px"}}>
                            <option value="new">Mới nhất</option>
                            <option value="cxt">Tổng tiền từ cao xuống thấp</option>   
                            <option value="tlc">Tổng tiền từ thấp lên cao</option>
                     </select>
              </div>
           
            </div>
              
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
                   return <OrderList order = {order} index={index + 1 + (page-1)*8}/>
                })
             }
           </table>
           <ul>
            <li>0: Chờ xác nhận</li>
            <li style={{color: "blue"}}>1: Đang giao hàng</li>
            <li style={{color: "green"}}>2: Giao hàng thành công</li>
            <li style={{color: "red"}}>3: Đơn hàng bị hủy</li>
           </ul>
            <Pagination onChange={onChange} style={{marginLeft: "50%", transform: "translateX(-80%)", position: "fixed", top: "90%"}} defaultCurrent={page} current={page} total={500} />
        </div>
    )
}
export default Order