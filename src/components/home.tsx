import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import AdmissionProcess from "./sections/AdmissionProcess";
import Footer from "./navigation/Footer";
import AuthForm from "./auth/AuthForm";

interface HomeProps {
  isAuthenticated?: boolean;
}

const Home = ({ isAuthenticated = false }: HomeProps) => {
  const router = useRouter();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleApply = () => {
    setShowAuthModal(true);
  };

  const handleTrack = () => {
    router.push("/track");
  };

  const handleHelp = () => {
    // Handle help action
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r">
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogin={() => setShowAuthModal(true)}
        onRegister={() => setShowAuthModal(true)}
      />
      <main className="flex-grow pt-20">
        <HeroSection
          onApplyClick={handleApply}
          onTrackClick={handleTrack}
          onHelpClick={handleHelp}
        />

        <div className="py-16 px-4">
          <AdmissionProcess
            steps={[
              {
                id: 1,
                title: "Registration",
                isCompleted: false,
                isActive: true,
              },
              {
                id: 2,
                title: "Application Form",
                isCompleted: false,
                isActive: false,
              },
              {
                id: 3,
                title: "RIASEC Test",
                isCompleted: false,
                isActive: false,
              },
              {
                id: 4,
                title: "Submission",
                isCompleted: false,
                isActive: false,
              },
              {
                id: 5,
                title: "Status Tracking",
                isCompleted: false,
                isActive: false,
              },
            ]}
            currentStep={1}
          />
        </div>
      </main>
      <Footer
        admissionGuidelineLinks={[
          { title: "Admission Requirements", href: "#" },
          { title: "Application Process", href: "#" },
          { title: "Important Dates", href: "#" },
          { title: "FAQs", href: "#" },
        ]}
        quickLinks={[
          { title: "About DMMMSU", href: "#" },
          { title: "Academic Programs", href: "#" },
          { title: "Student Life", href: "#" },
          { title: "Contact Us", href: "#" },
        ]}
        contactInfo={{
          email: "admissions@dmmmsu.edu.ph",
          phone: "+63 (123) 456-7890",
          address: "DMMMSU Main Campus, City of San Fernando, La Union",
        }}
      />

      <AuthForm
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
};

export default Home;
