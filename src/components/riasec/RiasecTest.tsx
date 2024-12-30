import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: number;
  text: string;
  category: "R" | "I" | "A" | "S" | "E" | "C";
}

const questions: Question[] = [
  { id: 1, text: "I like to work on cars", category: "R" },
  { id: 2, text: "I like to solve complex problems", category: "I" },
  { id: 3, text: "I enjoy creating art", category: "A" },
  { id: 4, text: "I like helping others", category: "S" },
  { id: 5, text: "I enjoy leading teams", category: "E" },
  { id: 6, text: "I like following clear procedures", category: "C" },
  // Add more questions for each category
];

const RiasecTest = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: parseInt(value) });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const results: Record<string, number> = {
      R: 0, // Realistic
      I: 0, // Investigative
      A: 0, // Artistic
      S: 0, // Social
      E: 0, // Enterprising
      C: 0, // Conventional
    };

    Object.entries(answers).forEach(([questionId, answer]) => {
      const category = questions[parseInt(questionId)].category;
      results[category] += answer;
    });

    setShowResults(true);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">RIASEC Test</h2>
          <p className="text-gray-600">
            Answer each question with Yes or No based on whether the statement
            describes you.
          </p>
        </div>

        <Progress value={progress} className="w-full" />

        {!showResults ? (
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <p className="text-lg font-medium mb-4">
                {questions[currentQuestion].text}
              </p>
              <RadioGroup onValueChange={handleAnswer} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentQuestion(Math.max(0, currentQuestion - 1))
                }
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  if (currentQuestion === questions.length - 1) {
                    calculateResults();
                  }
                }}
                disabled={!answers[currentQuestion]}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Your Results</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(answers).map(([category, score]) => (
                  <div key={category} className="flex justify-between">
                    <span className="font-medium">{category}:</span>
                    <span>{score}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={() => router.push("/recommend")}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              View Program Recommendations
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RiasecTest;
