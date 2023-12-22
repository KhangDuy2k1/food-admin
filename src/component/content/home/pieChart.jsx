import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Số đơn hàng theo loại cà phê</h2>
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
export default PieChart;