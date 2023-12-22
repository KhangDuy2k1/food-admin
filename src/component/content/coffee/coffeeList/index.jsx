import ButtonComponent from "../../../button"
import { useDispatch, useSelector } from "react-redux"
// import { showUpdateCoffee, notShowCreateCoffee, setCoffee } from "../../../../redux/slice/coffee/createCoffee";
import { setCoffee, setShowUpdateCoffee, setCoffeeId, setShowDeleteCoffee} from "../../../../redux/slice/coffee/createCoffee"
import styles from "./coffeeList.module.scss"
import classNames from "classnames/bind"
const cx = classNames.bind(styles)
export const CoffeeList = ({item, index}) => {
        console.log(item.name)
        const dispatch = useDispatch()
        const handleUpdateCoffee = () => {
          dispatch(setCoffeeId(item._id))
          dispatch(setShowUpdateCoffee(true))
        }
        const handleDeleteCoffee = () => { 
             dispatch(setShowDeleteCoffee(true))
            dispatch(setCoffeeId(item._id))
        }
        return (
        <tr style={{textAlign: "center"}}>
          <td className= {cx('id')}>{index}</td>
          <td className= {cx('name')}>{item.name}</td>
          <td className= {cx('price')}>{item.price}</td>
          <td className= {cx('stars')}>{Math.round(item.stars)}</td>
          <td  className= {cx('volume')}>{item.volume}</td>
          <td  className= {cx('category')}>{item.category.title}</td>
          <td className = {cx('desc')}>{item.desc}</td>
          <td className= {cx('funtion')}> 
            <div className={cx('container')}>
                 <ButtonComponent onClick = {handleUpdateCoffee} className = {cx('btn-update')}>
                       Cập nhật
                 </ButtonComponent>
                 <ButtonComponent onClick = {handleDeleteCoffee} className = {cx('btn-delete')}>
                     Xóa 
                  </ButtonComponent>
                <ButtonComponent className = {cx("btn-detail")}>
                  Chi tiết
                </ButtonComponent>
            </div>
               
          </td>
        </tr>
        )
}