import 'chart.js/auto';
import { useState, useEffect } from "react";
import { setDataBarChart, setChartDataBar } from "./data";
import { BarChart, PieChart } from "./chart";
import { useNavigate } from "react-router-dom";
import styles from './home.module.scss'
import classNames from "classnames/bind";
import { allUserFootApp } from '../../../api/user';
import { productBestSell } from "../../../api/product";
import { getAllStoreFoot } from "../../../api/store";
import { allOrdersFoot, countOrderByStatus } from '../../../api/order';
import { topBestStore } from './data';
const cx = classNames.bind(styles)
export default function Home() {  
  const navigate = useNavigate();
  const [totalUs, setTotalUs] = useState("");
  const [totalStore, setTotalStore] = useState("");
  const [totalOrder, setTotalOrder] = useState("");
  const [listProductBestSell, setListProductBestSell] = useState([])
  const [listCountOrderByStatus, setListCountOrderByStatus] = useState([])
  const [dataChart, setDataChart] = useState()
  useEffect(() => {
    Promise.all([
       allUserFootApp(),
       getAllStoreFoot(),
       allOrdersFoot(),
       productBestSell(),
       topBestStore(),
       countOrderByStatus()
    ]).then(([allUsers, allStores, allOrders, listProductBestSell, dataChartResponse, listTotalOrderByStatus]) => {
       setTotalUs(allUsers.total)
       setTotalStore(allStores.total)
       setTotalOrder(allOrders.total)
       setListProductBestSell(listProductBestSell)
       setDataChart(dataChartResponse)
       setListCountOrderByStatus(listTotalOrderByStatus)
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, [navigate]);

  let countOrders = listCountOrderByStatus?.map((data) => { 
        return data.count
  })
  let status = listCountOrderByStatus?.map((data) => { 
        return data.status
  })
 
  let arrStoreName = dataChart?.map((store) => { 
        return store.store_name
  })
  let arrStoreTotal = dataChart?.map((store) => { 
        return store.total
  })

    const dataPieChart = setDataBarChart(
    status,
    countOrders
    ) 

    const dataBarChart = setDataBarChart(
     arrStoreName,
     arrStoreTotal
    ) 

    let chartPieData = setChartDataBar(dataPieChart, "số đơn hàng");
    let chartBarData = setChartDataBar(dataBarChart, "doanh thu");
    
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
                    <p className={cx('header-total')}>Tổng số đơn hàng</p>
                    <p className={cx("total")}>{totalOrder}</p>
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
                  <PieChart chartData={chartPieData}/>
                  <BarChart chartData={chartBarData} />
                 </div>
           </div>
    </div>
  );
}