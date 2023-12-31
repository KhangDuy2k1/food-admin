import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Data, getallcoffeeCategory } from "./data";
import { LineChart } from "./barChart";
import { notification } from "antd";
import PieChart from "./pieChart";
// import { totalUser } from "../../../api/user/totaluser";
// import { totalOrder } from "../../../api/order/totalorder";
// import { listAllOrders } from "../../../api/order/listOrder";
import { useNavigate } from "react-router-dom";
import styles from './home.module.scss'
import classNames from "classnames/bind";
// import { totalCancled } from "../../../api/order/totalOrderCancle";
import { allUserFootApp } from "../../../api/user/footapp/allUserFoot";
import { allOrdersFoot } from "../../../api/user/footapp/allOrders";
import { allProductFoot } from "../../../api/user/footapp/allProducts";
const cx = classNames.bind(styles)
export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState([])
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (key, message, description) => {
    api.open({
      key: key,
      message: message,
      description: description,
    });
  };
  
  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [chartTotal, setChartTotal] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [totalUs, setTotalUs] = useState("");
  const [totalOd, setTotalOd] = useState("");
  const [totalProduct, setTotalProduct] = useState("");

  useEffect(() => {
    Promise.all([
      allUserFootApp(),
      allOrdersFoot(),
      allProductFoot()
    ]).then(([allUsers, allOrders, allProducts]) => {
       setTotalUs(allUsers.total)
       setTotalOd(allOrders.total)
       setTotalProduct(allProducts.total)
      // totalUser(),
        //   return order.coffeeItem_id.category === "6502f78da7cec6a1ae697144";
        // });
        // let totalOrderCoffee = arrCoffee.length;

        // const arrTea = orders.allOrder.filter((order) => {
        //   return order.coffeeItem_id.category === "6502f794a7cec6a1ae697147";
        // });
        // let totalOrderTea = arrTea.length;

        // const arrDaxay = orders.allOrder.filter((order) => {
        //   return order.coffeeItem_id.category === "6502f7a3a7cec6a1ae69714a";
        // });
        // let totalDaxay = arrDaxay.length;

        // const arrTaybac = orders.allOrder.filter((order) => {
        //   return order.coffeeItem_id.category === "6502f7ada7cec6a1ae69714d";
        // });
        // let totalTayBac = arrTaybac.length;

        // const newData = [
        //   {
        //     id: 1,
        //     name: "cà phê",
        //     total: totalOrderCoffee,
        //   },
        //   {
        //     id: 2,
        //     name: "trà",
        //     total: totalOrderTea,
        //   },
        //   {
        //     id: 3,
        //     name: "đồ uống đá xay",
        //     total: totalDaxay,
        //   },
        //   {
        //     id: 4,
        //     name: "trà xanh tây bắc",
        //     total: totalTayBac,
        //   },
        // ];
        // setData(newData);
        // setTotal(getTotalCoffeeResponse)
        // console.log(getTotalCoffeeResponse)
        // // Cập nhật chartData
        // setChartData({
        //   labels: newData.map((item) => item.name),
        //   datasets: [
        //     {
        //       label: "Users Gained",
        //       data: newData.map((item) => item.total),
        //       backgroundColor: [
        //         "rgba(75,192,192,1)",
        //         "#ecf0f1",
        //         "#50AF95",
        //         "#f3ba2f",
        //         "#2a71d0",
        //       ],
        //       borderColor: "black",
        //       borderWidth: 2,
        //     },
        //   ],
        // });
        // setChartTotal({
        //   labels: getTotalCoffeeResponse.map((item) => item.name),
        //   datasets: [
        //     {
        //       label: "Tổng số c",
        //       data: getTotalCoffeeResponse.map((item) => item.total),
        //       backgroundColor: [
        //         "rgba(75,192,192,1)",
        //         "#ecf0f1",
        //         "#50AF95",
        //         "#f3ba2f",
        //         "#2a71d0",
        //       ],
        //       borderColor: "black",
        //       borderWidth: 2,
        //     },
        //   ],
        // });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, [navigate]);
  return (
    <div>
            <div className={cx('total-container')} >
                  <div className= {cx('sub-total-container')} >
                    <p className={cx('header-total')}>Tổng số người dùng</p>
                    <p className={cx("total")}>{totalUs}</p>
                  </div>
                  <div className= {cx('sub-total-container')} >
                    <p className={cx('header-total')}>Tổng số đơn hàng</p>
                    <p className={cx("total")}>{totalOd}</p>
                   </div>
                   <div className= {cx('sub-total-container')}>
                    <p className={cx('header-total')}>Tổng số sản phẩm</p>
                    <p className={cx("total")}>{totalProduct}</p>
                   </div>
            </div>
            <div className="App" style={{width : "100%", display: "flex",     justifyContent: "space-around", marginTop: "10px"}}>
                <PieChart chartData={chartData}/>
                <LineChart chartData={chartTotal}/>
           </div>
    </div>
  );
}