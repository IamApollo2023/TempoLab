import { Card } from "@/components/ui/card";
import { Users, GraduationCap, CheckCircle, Clock } from "lucide-react";
import { AdminChart } from "./AdminChart";

export function AdminDashboard() {
  const stats = [
    {
      label: "Total Applications",
      value: "1,234",
      icon: Users,
      trend: "+12.5%",
      color: "text-blue-600",
    },
    {
      label: "Approved",
      value: "856",
      icon: CheckCircle,
      trend: "+8.2%",
      color: "text-emerald-600",
    },
    {
      label: "Pending",
      value: "378",
      icon: Clock,
      trend: "-2.1%",
      color: "text-yellow-600",
    },
    {
      label: "Programs",
      value: "42",
      icon: GraduationCap,
      trend: "0%",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm ${stat.trend.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}
                >
                  {stat.trend} from last month
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Applications Over Time</h2>
          <AdminChart />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Program Distribution</h2>
          <AdminChart type="doughnut" />
        </Card>
      </div>
    </div>
  );
}
