import 'chart.js/auto';
import { useState, useEffect } from "react";
import { setDataBarChart, setChartDataBar } from "./data";
import { BarChart, PieChart } from "./chart";
import { useNavigate } from "react-router-dom";
import styles from './home.module.scss'
import classNames from "classnames/bind";
import { allUserFootApp } from '../../../api/user';
import { allProductFoot, productBestSell } from "../../../api/product";
import { getAllStoreFoot } from "../../../api/store";
import { topBestStore } from './data';
const cx = classNames.bind(styles)
export default function Home() {  
  const navigate = useNavigate();
  const [totalUs, setTotalUs] = useState("");
  const [totalStore, setTotalStore] = useState("");
  const [totalProduct, setTotalProduct] = useState("");
  const [listProductBestSell, setListProductBestSell] = useState([])
  const [dataChart, setDataChart] = useState()

  useEffect(() => {
    Promise.all([
       allUserFootApp(),
       getAllStoreFoot(),
       allProductFoot(),
       productBestSell(),
       topBestStore()
    ]).then(([allUsers, allOrders, allProducts, listProductBestSell, dataChartResponse]) => {
       setTotalUs(allUsers.total)
       setTotalStore(allOrders.total)
       setTotalProduct(allProducts.total)
       setListProductBestSell(listProductBestSell)
       setDataChart(dataChartResponse)
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, [navigate]);
  let arrStoreName = dataChart?.map((store) => { 
        return store.store_name
  })
  let arrStoreTotal = dataChart?.map((store) => { 
        return store.total
  })
  const dataBarChart = setDataBarChart(
     arrStoreName,
     arrStoreTotal
    ) 
    let chartBarData = setChartDataBar(dataBarChart);
  return (
    <div>
            <div className={cx('total-container')} >
                  <div className= {cx("s1","sub-total-container")} >
                    <p className={cx('header-total')}>Tổng số người dùng</p>
                    <p className={cx("total")}>{totalUs}</p>
                  </div>
                  <div className= {cx("s2","sub-total-container")} >
                    <p className={cx('header-total')}>Tổng số cửa hàng</p>
                    <p className={cx("total")}>{totalStore}</p>
                   </div>
                   <div className= {cx("s3","sub-total-container")}>
                    <p className={cx('header-total')}>Tổng số sản phẩm</p>
                    <p className={cx("total")}>{totalProduct}</p>
                   </div>
            </div>
            <div className="App" style={{width : "100%", display: "flex", marginTop: "10px", justifyContent: "space-between"}}>
                <div style={{backgroundColor: "#FFFFE0", padding: "5px", width: "350px", marginLeft: "18px"}}>
                  <h4>Top sản phẩm bán chạy nhất</h4>
                  <ol>
                    {listProductBestSell?.map((product, index) => {
                         return(
                            <li>
                              <p className={index === 0 ? cx('product-best'): cx('product-name')}>
                                {product.product_name}
                              </p>
                              <p className={cx('quantity')}>{product.product_count} đơn hàng đã bán</p>
                            </li>
                         ) 
                    })}
                  </ol>
                </div>
                 <div style={{display: "flex"}}>
                  <PieChart chartData={chartBarData}/>
                  <BarChart chartData={chartBarData} />
                 </div>
              
           </div>
    </div>
  );
}