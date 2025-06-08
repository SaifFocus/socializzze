
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ForRestaurants = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <Navbar />
      
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 py-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent leading-relaxed">
              Fler gäster. Fler bokningar.
            </h1>
            <p className="text-xl text-gray-600">
              Framtidens matupplevelse börjar här.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">Varför bli partner?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">📢</div>
                <h3 className="text-xl font-semibold mb-4 text-rose-600">Marknadsföringshjälp</h3>
                <p className="text-gray-600">Vi lyfter fram er i appen och på våra sociala medier.</p>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">👥</div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Socialt engagerade gäster</h3>
                <p className="text-gray-600">Vi skickar människor som vill mer än bara äta.</p>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-100 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">💼</div>
                <h3 className="text-xl font-semibold mb-4 text-amber-600">Enkel uppstart</h3>
                <p className="text-gray-600">Välj 6 eller 12 månaders abonnemang – så är ni igång.</p>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-amber-700">Bonus för tidiga partners</h2>
            <p className="text-lg text-center text-amber-600">
              De första 10 restaurangerna i varje stad får extra synlighet och kampanjstöd.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">FAQ</h2>
            
            <div className="space-y-6">
              <Card className="p-8 bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-rose-600">Vad om vi inte har ett bokningssystem?</h3>
                <p className="text-gray-600">Vi kan hjälpa till att sätta upp det – eller bygga det åt er.</p>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Vad om någon bokar men vi är fullbokade?</h3>
                <p className="text-gray-600">Vi har ett avtal: Hedersgästen ska få kompensation – ni erbjuder gratis måltid, och vi täcker det.</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-12 py-4 text-xl"
              onClick={() => navigate("/contact")}
            >
              Bli partner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForRestaurants;
