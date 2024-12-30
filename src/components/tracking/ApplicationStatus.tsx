import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ClipboardList, Clock, CheckCircle, XCircle } from "lucide-react";

interface ApplicationStatusProps {
  applicationId?: string;
  status?: "pending" | "approved" | "rejected";
  timeline?: Array<{
    date: string;
    title: string;
    description: string;
    status: "completed" | "pending" | "rejected";
  }>;
}

const ApplicationStatus = ({
  applicationId = "APP-2024-001",
  status = "pending",
  timeline = [
    {
      date: "2024-01-01",
      title: "Application Submitted",
      description: "Your application has been successfully submitted.",
      status: "completed",
    },
    {
      date: "2024-01-02",
      title: "Document Verification",
      description: "Your documents are being verified by our admissions team.",
      status: "pending",
    },
    {
      date: "2024-01-03",
      title: "RIASEC Test",
      description: "Pending completion of RIASEC personality test.",
      status: "pending",
    },
  ],
}: ApplicationStatusProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-300"
          >
            <Clock className="w-4 h-4 mr-1" /> Pending
          </Badge>
        );
      case "approved":
        return (
          <Badge
            variant="outline"
            className="bg-emerald-50 text-emerald-700 border-emerald-300"
          >
            <CheckCircle className="w-4 h-4 mr-1" /> Approved
          </Badge>
        );
      case "rejected":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-300"
          >
            <XCircle className="w-4 h-4 mr-1" /> Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Application Status
          </h2>
          <p className="text-gray-500">Application ID: {applicationId}</p>
        </div>
        {getStatusBadge(status)}
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {timeline.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ClipboardList className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                  {getStatusBadge(event.status)}
                </div>
              </div>
              {index < timeline.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ApplicationStatus;
