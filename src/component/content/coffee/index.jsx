import ButtonComponent from "../../button";
import { showCreateCoffee } from "../../../redux/slice/coffee/createCoffee";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./coffee.module.scss";
import { CoffeeList } from "./coffeeList"
import { notification } from "antd";
import { BiPlusCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { getListCoffee } from "../../../api/coffee/listCoffees";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)

export const Coffee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (key, message, description) => {
        api.open({
            key: key,
            message: message,
            description: description,
          });
    }
    const [listCoffees, setListCoffees ] = useState()
    const handleCreateCoffee = () => { 
        dispatch(showCreateCoffee())
    }
    useEffect(() => {
       getListCoffee().then((data) => {
             if(data.error === "jwt expired"){
                    localStorage.removeItem("accessToken")
                    openNotification("1", "Thông báo", "Token hết hạn")
                    navigate("/")
             }else if(data.error === "lỗi server") {
                    openNotification("2", "Thông báo", "có lỗi xảy ra")
             }else {
                setListCoffees(data.allCoffee.allCoffee)
             }
       });
    }, [])
    return (
        <div>
            <div className={cx('container')}>
                  <ButtonComponent onClick = {handleCreateCoffee} className= {cx('btn-create')}>
                    <BiPlusCircle className={cx('plus-icon')}/>
                      Tạo Cà Phê
                  </ButtonComponent>
            </div>
        <table>
        <tr> <th>id cà phê</th>
             <th>Tên cà phê</th>
             <th>Giá</th>
             <th>stars</th>
             <th>thể tích</th>
             <th>Loại cà phê</th>
             <th>Mô tả</th>
             <th>Chức năng</th>
         </tr>
         {listCoffees?.map((item, index) => {
             return  <CoffeeList key={index} item = {item} index = {index}/> 
            }
            )
         }
        
      </table>
        </div>
       
    )
}
