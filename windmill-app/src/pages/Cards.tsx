import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiUsers, FiDollarSign, FiShoppingCart } from "react-icons/fi";
import StatCard from "@/components/extra/StatCard";

export default function Cards() {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold">Cards</h1>

      <Card className="bg-background">
        <CardHeader>
          <CardTitle>Main Section</CardTitle>
          <CardDescription>Overview</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          This is your main content area.
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-sm font-medium">Stats</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>Information</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">This is a default card.</CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Colored Card</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Information
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            This card uses primary color.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
