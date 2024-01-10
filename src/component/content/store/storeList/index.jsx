import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setInfoStore, setShowDeleteModal } from "../../../../redux/slice/store";
export const StoreListComponent = ({store, stt}) => {
    const dispatch = useDispatch()
    const handleDelete = () => { 
        dispatch(setShowDeleteModal(true))
        dispatch(setInfoStore({
            store_id: store.store_id
        }))
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
                </td>

        </tr>
    )
}