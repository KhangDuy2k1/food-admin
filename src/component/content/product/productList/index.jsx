import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setInfoProduct, setShowDeleteModal } from "../../../../redux/slice/product";
export const ProductList = ({product, stt}) => { 
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(setInfoProduct({
            product_id: product.product_id
        }))
        dispatch(setShowDeleteModal(true))
    }
    return (
        <tr>
            <td>{stt}</td>
            <td>{product.product_name}</td>
            <td>
                <img style={{width: "50px", height: "50px"}} src={product.avatar} alt="" />
            </td>
            <td>{product.price}</td>
            <td>{product.discount}</td>
            <td>{product.status}</td>
            <td>{product.rate}</td>
            <td>{product.description}</td>
            <td>
                <MdOutlineDelete onClick={handleDelete} style={{fontSize: "30px", color: "#DC143C", cursor: "pointer"}} />
            </td>
        </tr>
    )
}