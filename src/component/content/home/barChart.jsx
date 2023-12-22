import { Line } from "react-chartjs-2";
export const LineChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center"}}>Tổng số Item trong một loại</h2>
      <Line
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