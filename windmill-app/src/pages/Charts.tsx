import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

export default function Charts() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Charts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col">
          <h2 className="text-sm font-medium mb-2">Bar Chart</h2>
          <div className="flex-1">
            <BarChart />
          </div>
        </div>

        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col">
          <h2 className="text-sm font-medium mb-2">Line Chart</h2>
          <div className="flex-1">
            <LineChart />
          </div>
        </div>

        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col">
          <h2 className="text-sm font-medium mb-2">Pie Chart</h2>
          <div className="flex-1">
            <PieChart />
          </div>
        </div>

        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col">
          <h2 className="text-sm font-medium mb-2">Doughnut Chart</h2>
          <div className="flex-1">
            <DoughnutChart />
          </div>
        </div>

      </div>
    </div>
  );
}