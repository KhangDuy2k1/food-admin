import styles from "./user.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import classNames  from "classnames/bind";
import UserList from "./userList";
import { useEffect, useState } from "react";
import { allUserFootApp } from "../../../api/user";
import Search from "antd/es/input/Search";
import { Pagination } from "antd"
// import 
const cx = classNames.bind(styles)
const UserContent = () => {
    const [userLists, setUserLists] = useState()
    const [page, setPage] = useState(1)
    useEffect(() => {
    allUserFootApp(page).then((data) => {
            setUserLists(data.data)   
    })
    }, [page])
    const onSearch = (value) => {
       allUserFootApp().then((data) => {
            const users =  data.data.filter((user) => {
                return user.username.includes(value) || user.email.includes(value)
            })  
            if(users.length > 5){ 
                setUserLists(users.slice(0, 5))
            }else {
                setUserLists(users)
            }
       })
    }
    const onChange = (value) => {
        setPage(value)
    }
    return (
       <div>
        <Search style={{width: "300px"}} placeholder="Tìm kiếm người dùng" onSearch={onSearch} enterButton />
        <div style={{display: "flex", flexDirection: "column"}}>
        <table>
            <tr>
               <th>stt</th>
               <th>username</th>
               <th>email</th>
               <th>fullname</th>
               <th>gender</th>
               <th>phone</th>
               <th>address</th>
               <th>action</th>
            </tr>
            {userLists?.map((user, index) => {
                return <UserList user = {user} index = {index}/>
            })}
        </table>
        <Pagination onChange={onChange} style={{marginLeft: "50%", transform: "translateX(-80%)", position: "fixed", top: "90%"}} defaultCurrent={page} current={page} total={500} />
        </div>
        
       </div>
      
        
    )
}  
export default UserContent;