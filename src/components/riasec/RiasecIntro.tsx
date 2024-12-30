import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";

const RiasecIntro = () => {
  const router = useRouter();

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-white shadow-md">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            RIASEC Personality Test
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your ideal career path through the RIASEC personality
            assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
            <h3 className="text-lg font-semibold mb-2">Personality Types</h3>
            <p className="text-gray-600">
              Understand your personality traits across six different
              dimensions.
            </p>
          </div>

          <div className="p-6 border rounded-lg text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
            <h3 className="text-lg font-semibold mb-2">Career Insights</h3>
            <p className="text-gray-600">
              Get personalized career recommendations based on your results.
            </p>
          </div>

          <div className="p-6 border rounded-lg text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
            <h3 className="text-lg font-semibold mb-2">Program Match</h3>
            <p className="text-gray-600">
              Find academic programs that align with your interests and
              strengths.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">About RIASEC</h2>
          <div className="space-y-4 text-gray-600">
            <p>The RIASEC model identifies six personality types:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Realistic (R):</strong> Practical, physical, hands-on
                problem solver
              </li>
              <li>
                <strong>Investigative (I):</strong> Analytical, intellectual,
                scientific investigator
              </li>
              <li>
                <strong>Artistic (A):</strong> Creative, original, independent
                innovator
              </li>
              <li>
                <strong>Social (S):</strong> Cooperative, supporting, helping
                others
              </li>
              <li>
                <strong>Enterprising (E):</strong> Competitive environments,
                leadership, persuading
              </li>
              <li>
                <strong>Conventional (C):</strong> Detail-oriented, organizing,
                following procedures
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => router.push("/riasec/test")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RiasecIntro;
