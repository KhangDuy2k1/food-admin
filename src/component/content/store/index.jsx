import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { StoreListComponent } from "./storeList";
import { Pagination, Button } from "antd"
import { getAllStoreFoot } from "../../../api/store";
import { useDispatch } from "react-redux";
import { setShowAddModal } from "../../../redux/slice/store";
export const StoreComponent = () => { 
     const [page, setPage] = useState(1)
     const [listStores, setListStores] = useState([])
     const dispatch = useDispatch()
     const onChange = (value) => { 
          setPage(value)
     }
     useEffect(() => {
         getAllStoreFoot(page, 7).then((data) => {
             setListStores(data.data)
         }).then((error) => {
            console.error(error)
         })
     }, [page])
     const handleAdd = () => { 
      dispatch(setShowAddModal(true))
     }
     return (
        <div>
           <button onClick={handleAdd} style={{width: "150px", height: "40px", borderRadius: "20px",display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#B8860B", color: "white", marginBottom: '5px'}}>
               Thêm cửa hàng
               <IoAddCircleOutline style={{fontSize: "20px", marginLeft: "5px"}}/>
            </button>
           <table>
                    <tr>
                           <th>STT</th>
                           <th>store_name</th>
                           <th>avatar</th>
                           <th>address</th>
                           <th>phone</th>
                           <th>time_open</th>
                           <th>time_close</th>
                           <th>action</th>
                    </tr>
                     { 
                      listStores?.map((store, index) => {
                         return <StoreListComponent store={store} stt={(page - 1)*8 + index + 1}/>
                      })
                     }
            </table>
            <Pagination onChange={onChange} style={{marginLeft: "50%", transform: "translateX(-80%)", position: "fixed", top: "90%"}} defaultCurrent={page} current={page} total={500} />
        </div>
     )
}