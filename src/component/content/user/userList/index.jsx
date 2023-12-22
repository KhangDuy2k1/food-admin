import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    const { item, index } = props
    const handleUpdate = (e) => {
            e.stopPropagation();
            dispatch((setInfoUser({
                _id: item._id,
                email: item.email,
                password: item.password,
                phonenumber: item.phonenumber,
                role: item.role
            })))
           dispatch(setShowUpdate(''))
    }
    
    const handleDelete = (e) => {
            e.stopPropagation()
            dispatch(setInfoUser({
                _id: item._id
            }))
            dispatch(setShowDelete())
    }
    const getInfoUser = () => {
            dispatch((setInfoUser({
                _id: item._id,
                email: item.email,
                password: item.password,
                phonenumber: item.phonenumber,
                role: item.role
            })))
            dispatch(setShowInfo())
    }
    return (
         <div onClick={getInfoUser} className={cx('user-container')}> 
            <p className={cx('stt')}> {index}</p>
            <p className={cx('email')}>{item.email}</p>
            <div className={cx('btn-container')}>
            <ButtonComponent onClick = { handleUpdate} className = {cx('btn-update')}>Update</ButtonComponent>
            <ButtonComponent onClick = {handleDelete} className = {cx('btn-delete')}>Delete</ButtonComponent>
            </div>
        </div>
    )
}  
export default UserList;