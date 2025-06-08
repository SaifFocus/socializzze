import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
const HowItWorks = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Börja socialisera – i tre enkla steg.
            </h1>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <Card className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm border-rose-100 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-0 sm:mr-6">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-rose-600">Välj din väg</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Här för att träffa någon ny? Eller vill du bara ha en riktigt god måltid till ett bättre pris?
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                → Tryck på "Hitta min dejt" eller "Boka bord" i appen.
              </p>
            </Card>

            <Card className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm border-purple-100 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-0 sm:mr-6">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-600">Välj en restaurang</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Utforska våra noggrant utvalda partnerrestauranger. Varje ställe har ett dedikerat SOCIALIZE-bord och exklusiv rabatt.
              </p>
            </Card>

            <Card className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm border-amber-100 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-0 sm:mr-6">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-600">Njut av förmånerna</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Boka via appen, visa din kod, och få 20% rabatt.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Boka ofta? Nästa måltid kan bli gratis. 🎉
              </p>
            </Card>
          </div>

          <div className="text-center mt-12 sm:mt-16 p-8 sm:p-12 bg-gradient-to-r from-rose-100 to-purple-100 rounded-2xl">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6 sm:mb-8 px-4">Allt börjar med ett bord – låt det bli början på något större</blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[48px]" onClick={() => navigate("/contact")}>
                <span className="hidden sm:inline">Ladda ner app – Kommer snart</span>
                <span className="sm:hidden">Ladda ner app</span>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-purple-300 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[48px]" onClick={() => navigate("/contact")}>
                Gå med i väntelistan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HowItWorks;