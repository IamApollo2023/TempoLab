import React from "react";
import { Card } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

interface AdmissionStep {
  id: number;
  title: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

interface AdmissionProcessProps {
  steps?: AdmissionStep[];
  currentStep?: number;
}

const defaultSteps: AdmissionStep[] = [
  { id: 1, title: "Registration", isCompleted: false, isActive: true },
  { id: 2, title: "Application Form", isCompleted: false, isActive: false },
  { id: 3, title: "RIASEC Test", isCompleted: false, isActive: false },
  { id: 4, title: "Submission", isCompleted: false, isActive: false },
  { id: 5, title: "Status Tracking", isCompleted: false, isActive: false },
];

const AdmissionProcess = ({
  steps = defaultSteps,
  currentStep = 1,
}: AdmissionProcessProps) => {
  return (
    <Card className="w-full max-w-[1200px] mx-auto p-8 bg-white shadow-md">
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admission Process
        </h2>

        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold
                    ${
                      step.isCompleted
                        ? "bg-emerald-500 text-white"
                        : step.isActive
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {step.isCompleted ? <Check className="w-6 h-6" /> : step.id}
                </div>
                <p
                  className={`mt-2 text-sm text-center
                  ${step.isActive ? "text-emerald-600 font-medium" : "text-gray-600"}`}
                >
                  {step.title}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-grow hidden md:block">
                  <div
                    className={`h-0.5 w-full
                    ${step.isCompleted ? "bg-emerald-500" : "bg-gray-200"}`}
                  ></div>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="md:hidden">
                  <ChevronRight className="text-gray-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AdmissionProcess;
