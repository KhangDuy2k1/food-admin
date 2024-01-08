import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io"
import { setShowDeleteModal } from "../../../../redux/slice/user";
import { setInfoUser } from "../../../../redux/slice/user";
import styles from "./userlist.module.scss"
import classNames  from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)
const UserList = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, index } = props;
    const handleDelete = (e) => {
            e.stopPropagation()
            dispatch(setInfoUser({
                user_id: user.user_id
            }))
            dispatch(setShowDeleteModal(true))
    }
    const getInfoUser = () => {
            navigate(`/detail_user/${user.user_id}`)
    }
    return (
        <tr>
            <td>{index}</td>
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