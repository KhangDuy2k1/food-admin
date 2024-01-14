import { AiTwotoneDelete } from "react-icons/ai";
import { IoCreate } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setInfoStore, setShowAddModal, setShowDeleteModal, setShowUpdateModal } from "../../../../redux/slice/store";
export const StoreListComponent = ({store, stt}) => {
    const dispatch = useDispatch()
    console.log(store)
    const handleDelete = () => { 
        dispatch(setInfoStore({
                store_id: store.store_id,
        }))
        dispatch(setShowDeleteModal(true))
    }

    const handleUpdate = () => {
        dispatch(setInfoStore({
            store_id: store.store_id,
            store_name: store.store_name,
            avatar: store.avatar,
            address: store.address,
            phone: store.phone,
            rate: store.rate,
            time_open: store.time_open,
            time_close: store.time_close,
            store_type: store.store_type
    }))
        dispatch(setShowUpdateModal(true))
    }
    return (
        <tr>
                <td>{stt}</td>
                <td>
                    {store.store_name}
                </td>
                <td>
                  <img style={{width: "80px", height: "50px"}} src={store?.avatar} alt="" />  
                </td>
                <td>{store.address}</td>
                <td>{store.phone}</td>
                <td style={{color: "green"}}>{store.time_open}</td>
                <td style={{color: "red"}}>{store.time_close}</td>
                <td>
                <AiTwotoneDelete onClick={handleDelete} style={{ cursor: "pointer", fontSize: "20px", color: "red"}}/>
                <IoCreate onClick={handleUpdate} style={{ cursor: "pointer", fontSize: "20px"}}/>
                </td>
               

        </tr>
    )
}