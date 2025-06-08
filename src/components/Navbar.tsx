
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            SOCIALIZE
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigate("/")} className="text-gray-700 hover:text-rose-500 transition-colors">
            Hem
          </button>
          <button onClick={() => navigate("/how-it-works")} className="text-gray-700 hover:text-rose-500 transition-colors">
            Så fungerar det
          </button>
          <button onClick={() => navigate("/for-restaurants")} className="text-gray-700 hover:text-rose-500 transition-colors">
            För restauranger
          </button>
          <button onClick={() => navigate("/contact")} className="text-gray-700 hover:text-rose-500 transition-colors">
            Kontakt
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-rose-300 text-rose-600 hover:bg-rose-50"
            onClick={() => navigate("/partner-form")}
          >
            Bli partner
          </Button>
          <Button 
            className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            Gå med i väntelistan
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
