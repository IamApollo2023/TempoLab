import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Building2, Users, Clock } from "lucide-react";

interface Program {
  id: string;
  name: string;
  description: string;
  college: string;
  matchScore: number;
  duration: string;
  careers: string[];
}

const defaultPrograms: Program[] = [
  {
    id: "bscs",
    name: "Bachelor of Science in Computer Science",
    description:
      "Study computer programming, software development, and computational theory.",
    college: "College of Engineering",
    matchScore: 95,
    duration: "4 years",
    careers: ["Software Developer", "Systems Analyst", "Data Scientist"],
  },
  {
    id: "bsit",
    name: "Bachelor of Science in Information Technology",
    description:
      "Focus on practical applications of computing in business environments.",
    college: "College of Engineering",
    matchScore: 90,
    duration: "4 years",
    careers: ["IT Specialist", "Network Administrator", "Web Developer"],
  },
  // Add more programs as needed
];

const ProgramRecommender = () => {
  const router = useRouter();

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-white shadow-md">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Recommended Programs
          </h1>
          <p className="text-lg text-gray-600">
            Based on your RIASEC profile:{" "}
            <Badge variant="outline" className="ml-2 text-lg">
              IEC
            </Badge>
          </p>
        </div>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {defaultPrograms.map((program) => (
              <Card
                key={program.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {program.name}
                      </h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {program.college}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Career Opportunities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {program.careers.map((career, index) => (
                          <Badge key={index} variant="secondary">
                            <Users className="w-3 h-3 mr-1" />
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Badge
                    className={`ml-4 ${program.matchScore >= 90 ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`}
                  >
                    {program.matchScore}% Match
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <div className="text-center pt-6">
          <Button
            size="lg"
            onClick={() => router.push("/apply")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Continue to Application
            <GraduationCap className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramRecommender;
