
import { Card } from "@/components/ui/card";

const WhySocialize = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-rose-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Äkta möten över äkta måltider.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-semibold mb-3 text-rose-600">Socialt först</h3>
            <p className="text-gray-600 text-sm">Vi handlar inte bara om bord – vi handlar om ögonblick.</p>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600">Bli belönad</h3>
            <p className="text-gray-600 text-sm">20% rabatt + bonusar för trogna användare.</p>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🪑</div>
            <h3 className="text-lg font-semibold mb-3 text-amber-600">Exklusiva platser</h3>
            <p className="text-gray-600 text-sm">Dedikerade bord på våra partnerrestauranger.</p>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold mb-3 text-green-600">Internationell vision</h3>
            <p className="text-gray-600 text-sm">Snart tillgänglig på flera språk och länder.</p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-2xl p-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            "Socialisering ska inte vara ensamt. Låt oss göra det meningsfullt."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhySocialize;
