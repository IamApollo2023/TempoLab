import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, HelpCircle, Search } from "lucide-react";

interface HeroSectionProps {
  onApplyClick?: () => void;
  onTrackClick?: () => void;
  onHelpClick?: () => void;
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  onApplyClick = () => {},
  onTrackClick = () => {},
  onHelpClick = () => {},
  title = "Welcome to DMMMSU Online Admission",
  subtitle = "Start your academic journey with us. Apply now for admission to Don Mariano Marcos Memorial State University.",
}: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] w-full bg-slate-50 flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8"
            onClick={onApplyClick}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full md:w-auto border-slate-300 hover:bg-slate-100"
            onClick={onTrackClick}
          >
            <Search className="mr-2 h-5 w-5" />
            Track Application
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="w-full md:w-auto hover:bg-slate-100"
            onClick={onHelpClick}
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            Need Help?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
