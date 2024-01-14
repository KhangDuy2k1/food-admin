import { useEffect, useState } from "react"
import { Pagination } from "antd"
import { ProductList } from "./productList"
import { allProductFoot } from "../../../api/product"
import { useDispatch } from "react-redux"
import { setShowAddModal } from "../../../redux/slice/product"
export const ProductContentComponent = () => { 
      const [listProducts, setListProducts] = useState([])
      const [page, setPage] = useState(1)
      const dispatch  =useDispatch()
      useEffect(() => {
            allProductFoot(page, 8).then((data) => {
            setListProducts(data.data)
            
            }).catch((error) => {
              console.error(error)
            }
            )
      }, [page])
      const handlePag = (page) => {
           setPage(page)
      }
      const handleAdd = () => {
        dispatch(setShowAddModal(true))
      }
     return (
        <div>
           <button onClick={handleAdd} style={{width: "150px", height: "40px", borderRadius: "20px",display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#B8860B", color: "white", marginBottom: '5px'}}>
               Thêm Sản Phẩm
            </button>
           <table>
                    <tr>
                           <th>STT</th>
                           <th>product_name</th>
                           <th>avatar</th>
                           <th>price</th>
                           <th>discount</th>
                           <th>status</th>
                           <th>rate</th>
                           <th>description</th>
                           <th>action</th>
                    </tr>
                     {listProducts?.map((product, index) => {
                            return <ProductList product={product} stt={(page-1)*8 + 1 + index} />

                     })}                     
            </table>
            <Pagination style={{position: "fixed", marginLeft: "50%", transform: "translate(-100%)", bottom: "5px"}} onChange={handlePag} defaultCurrent={1} total={100} />
        </div>
     )
}