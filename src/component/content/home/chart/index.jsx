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
      <p style={{ textAlign: "center", fontSize: "20px" }}></p>
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