import { Bar,  Pie } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div style={{ marginTop: "50px", }}>
      <p style={{ textAlign: "center", fontSize: "20px" }}>4 cửa hàng có doanh thu cao nhất</p>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
export function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <div>
      <p style={{ textAlign: "center"}}>Tổng số đơn hàng theo trạng thái đơn</p>
      <ul>
        <li>0: Chờ xác nhận</li>
        <li style={{color: "blue"}}>1: Đang giao hàng</li>
        <li style={{color: "green"}}>2: Giao hàng thành công</li>
        <li style={{color: "red"}}>3: Đơn hàng bị hủy</li>

      </ul>
      </div>
     
      <Pie
        
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,  
            }
          }
        }}
      />
    </div>
  );
}