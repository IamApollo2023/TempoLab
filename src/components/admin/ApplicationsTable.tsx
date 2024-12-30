import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const applications = [
  {
    id: "APP-2024-001",
    name: "John Doe",
    program: "BS Computer Science",
    status: "pending",
    date: "2024-01-15",
  },
  // Add more sample data
];

export function ApplicationsTable() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Applications</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Input placeholder="Search applications..." className="w-[300px]" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.id}</TableCell>
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.program}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      {
                        pending:
                          "bg-yellow-50 text-yellow-700 border-yellow-300",
                        approved:
                          "bg-emerald-50 text-emerald-700 border-emerald-300",
                        rejected: "bg-red-50 text-red-700 border-red-300",
                      }[app.status]
                    }
                  >
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
