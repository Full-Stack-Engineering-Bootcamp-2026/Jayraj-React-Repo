import StatCard from "@/components/extra/StatCard";
import PaginatedTable from "@/components/tables/PaginatedTable";
import LineChart from "@/components/charts/LineChart";
import DoughnutChart from "@/components/charts/DoughnutChart";

import { FiUsers, FiDollarSign, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      
      
      <h1 className="text-lg font-semibold">Dashboard</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <StatCard
          title="Users"
          value={1245}
          icon={FiUsers}
          color="bg-primary/10 text-primary"
        />

        <StatCard
          title="Revenue"
          value={32400}
          prefix="$"
          icon={FiDollarSign}
          color="bg-green-500/10 text-green-500"
        />

        <StatCard
          title="Orders"
          value={845}
          icon={FiShoppingCart}
          color="bg-blue-500/10 text-blue-500"
        />

        <StatCard
          title="Growth"
          value={78907}
          prefix=""
          icon={FiTrendingUp}
          color="bg-purple-500/10 text-purple-500"
        />

      </div>

      
      <PaginatedTable />

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col">
          <h2 className="text-sm font-medium mb-2">Line Chart</h2>
          <div className="flex-1">
            <LineChart />
          </div>
        </div>

        
        <div className="bg-background p-3 rounded-md border h-80 flex flex-col ">
          <h2 className="text-sm font-medium mb-2">Doughnut Chart</h2>
          <div className="flex-1">
            <DoughnutChart />
          </div>
        </div>

      </div>

    </div>
  );
}