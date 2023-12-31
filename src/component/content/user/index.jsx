import styles from "./user.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { listUsers } from "../../../api/user/listUser";
import classNames  from "classnames/bind";
import UserList from "./userList";
import { useEffect, useState } from "react";
import { allUserFootApp } from "../../../api/user/footapp/allUserFoot";
const cx = classNames.bind(styles)
const UserContent = () => {
    const [userLists, setUserLists] = useState()
    const [page, setPage] = useState(1)
    useEffect(() => {
    allUserFootApp(page).then((data) => {
            setUserLists(data.data)   
    })
    }, [page])
    return (
       <div>
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
            {/* <tr>
               <td>Alfreds Futterkiste</td>
               <td>Maria Anders</td>
               <td>Alfreds Futterkiste</td>
               <td>Maria Anders</td>
               <td>Germany</td>
               <td>Alfreds Futterkiste</td>
               <td>Maria Anders</td>
               <td>Germany</td>
            </tr> */}
            {userLists?.map((user) => {
                return <UserList user = {user}/>
            })}
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
export default UserContent;