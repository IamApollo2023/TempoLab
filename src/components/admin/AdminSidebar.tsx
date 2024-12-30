import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  FileText,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Applications", href: "/admin/applications" },
  { icon: GraduationCap, label: "Programs", href: "/admin/programs" },
  { icon: FileText, label: "Reports", href: "/admin/reports" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-8 px-2">
        <img src="/vite.svg" alt="DMMMSU Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">DMMMSU Admin</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Button
        variant="ghost"
        className="mt-auto w-full justify-start text-red-400 hover:text-red-300 hover:bg-gray-800"
      >
        <LogOut className="mr-2 h-5 w-5" />
        Logout
      </Button>
    </div>
  );
}
