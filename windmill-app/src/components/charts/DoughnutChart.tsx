import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Alive", "Dead", "Unknown", "Pending", "Other"],
    datasets: [
      {
        data: [150, 200, 126, 300, 60],
        backgroundColor: [
          "oklch(0.7 0.12 300)", 
          "oklch(0.7 0.15 240)",   
          "oklch(0.65 0.18 20)",
          "oklch(0.75 0.16 70)",   
          "oklch(0.7 0.12 180)",  
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", 
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          boxHeight: 15,
        },
      },
    },
  };

  return (
    <div className="h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
}