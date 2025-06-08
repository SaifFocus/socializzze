
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HowItWorksTeaser = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Hur funkar det?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">💖</div>
            <h3 className="text-xl font-semibold mb-4 text-rose-600">Välj din vibe</h3>
            <p className="text-gray-600">Hitta min dejt eller Boka bord</p>
          </Card>

          <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">🍽️</div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Välj restaurang</h3>
            <p className="text-gray-600">Med SOCIALIZE-erbjudande</p>
          </Card>

          <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl mb-6">😊</div>
            <h3 className="text-xl font-semibold mb-4 text-amber-600">Möt. Ät. Le.</h3>
            <p className="text-gray-600">Njut av upplevelsen</p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
            onClick={() => navigate("/how-it-works")}
          >
            Läs mer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTeaser;
