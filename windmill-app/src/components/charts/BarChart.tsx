import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users",
        data: [120, 190, 300, 250],
        backgroundColor: "oklch(0.7 0.15 240)", 
        borderRadius: 6,
      },
      {
        label: "Revenue",
        data: [80, 140, 220, 200],
        backgroundColor: "oklch(0.85 0.12 240)", 
        borderRadius: 6,
      },
    ],
  };

  const options : ChartOptions<"bar"> ={
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          boxHeight: 15,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Bar data={data} options={options} />
    </div>
  );
}