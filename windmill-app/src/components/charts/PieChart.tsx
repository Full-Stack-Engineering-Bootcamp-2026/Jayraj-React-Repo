import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
  labels: ["Alive", "Dead", "Unknown", "Pending", "Other"],
  datasets: [
    {
      data: [300, 200, 126, 90, 60],
      backgroundColor: [
        "oklch(0.7 0.15 240)",  
        "oklch(0.65 0.18 20)",   
        "oklch(0.7 0.12 300)",   
        "oklch(0.75 0.16 70)",   
        "oklch(0.7 0.12 180)",   
      ],
      borderWidth: 0,
    },
  ],
};

  const options: ChartOptions<"pie"> = {
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
  };

  return (
    <div className="h-full">
      <Pie data={data} options={options} />
    </div>
  );
}