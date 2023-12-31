import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import ButtonComponent from "../../../button";
import { setShowUpdate, setNotShowUpdate } from "../../../../redux/slice/user/showModalUpdate"
import { setShowDelete, setNotShowDelete } from "../../../../redux/slice/user/delete";
import { setInfoUser } from "../../../../redux/slice/user/infomation";
import { setShowInfo } from "../../../../redux/slice/user/infomation";
import styles from "./userlist.module.scss"
// import UpdateComponent from "../../../modal/user/update";
// import { Navigate } from "react-router-dom";
import classNames  from "classnames/bind";
// import ConfirmLogoutComponent from "../../modal/confirm";
const cx = classNames.bind(styles)
const UserList = (props) => {
    const dispatch = useDispatch();
    const { user } = props;
    // const handleUpdate = (e) => {
    //         e.stopPropagation();
    //         dispatch((setInfoUser({
    //             _id: item._id,
    //             email: item.email,
    //             password: item.password,
    //             phonenumber: item.phonenumber,
    //             role: item.role
    //         })))
    //        dispatch(setShowUpdate(''))
    // }
    
    const handleDelete = (e) => {
            e.stopPropagation()
            dispatch(setInfoUser({
                user_id: user.user_id
            }))
            dispatch(setShowDelete())
    }
    // const getInfoUser = () => {
    //         dispatch((setInfoUser({
    //             _id: item._id,s
    //             email: item.email,
    //             password: item.password,
    //             phonenumber: item.phonenumber,
    //             role: item.role
    //         })))
    //         dispatch(setShowInfo())
    // }
    return (
        <tr>
            <td>{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.fullname}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>
            <RiDeleteBin6Line onClick={handleDelete} style={{cursor: "pointer",fontSize: "20px", color: "red", marginRight: "20px"}}/>
            <MdOutlineSystemUpdateAlt style={{cursor: "pointer",fontSize: "20px", color: "#66b3ff"}}/>
            </td>
        </tr>
      
        
    )
}  
export default UserList;