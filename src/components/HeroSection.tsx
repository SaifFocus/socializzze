
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-purple-100/30 to-amber-100/50 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200/30 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-bounce delay-2000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-amber-200/30 rounded-full blur-xl animate-bounce delay-500"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              Möt.
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
              Ät.
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Knyt kontakter.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Boka bord, träffa nya människor och få exklusiva förmåner – allt i en enda app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              Gå med i väntelistan
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/for-restaurants")}
            >
              Driver du restaurang? Bli partner
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Lansering sommaren 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
              <span>342 personer väntar redan</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-rose-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
