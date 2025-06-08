
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksTeaser from "@/components/HowItWorksTeaser";
import WhySocialize from "@/components/WhySocialize";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <Navbar />
      <HeroSection />
      <HowItWorksTeaser />
      <WhySocialize />
      <Footer />
    </div>
  );
};

export default Index;
