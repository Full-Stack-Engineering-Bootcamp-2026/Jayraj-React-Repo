import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

export default function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users",
        data: [200, 150, 300, 170],
        borderColor: "oklch(0.7 0.15 240)",
        backgroundColor: "oklch(0.7 0.15 240)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "oklch(0.7 0.15 240)",
      },
      {
        label: "Revenue",
        data: [100, 250, 200, 350],
        borderColor: "oklch(0.85 0.12 240)",
        backgroundColor: "oklch(0.85 0.12 240 )",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
      <Line data={data} options={options} />
    </div>
  );
}
