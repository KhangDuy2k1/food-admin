import styles from "./user.module.scss"
import { listUsers } from "../../../api/user/listUser";
import classNames  from "classnames/bind";
import UserList from "./userList";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles)
const UserContent = () => {
    const [userLists, setUserLists] = useState()
    useEffect(() => {
    listUsers().then((data) => {
        if(data.error){
            console.log("có lỗi")
        }else {
            setUserLists(data.allUser)
        }   
    })
    }, [])
    return (
         <div className={cx('user-container')}> 
            {userLists?.map((item, index) => {
                 return <UserList key ={index} index = {index} item = {item}/>
            })}
        </div>
    )
}  
export default UserContent;