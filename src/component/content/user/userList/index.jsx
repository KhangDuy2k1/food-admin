import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io"
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
    const handleDelete = (e) => {
            e.stopPropagation()
            dispatch(setInfoUser({
                user_id: user.user_id
            }))
            dispatch(setShowDelete())
    }
    const getInfoUser = () => {
            dispatch((setInfoUser({
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                fullname: user.fullname,
                gender: user.gender,
                phone: user.phone,
                address: user.address
            })))
            dispatch(setShowInfo())
    }
    return (
        <tr>
            <td>{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.fullname}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td style={{display: "flex", justifyContent: "space-around"}}>
            <RiDeleteBin6Line onClick={handleDelete} style={{cursor: "pointer",fontSize: "20px", color: "red"}}/>
            <IoMdInformationCircleOutline onClick={getInfoUser}  style={{cursor: "pointer",fontSize: "20px", color: "#004080"}}/>
            </td>
        </tr>
    )
}  
export default UserList;