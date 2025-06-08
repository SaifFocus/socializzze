
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Tack!",
        description: "Du är nu registrerad för vårt nyhetsbrev.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                SOCIALIZE
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Där äkta möten skapas över äkta måltider.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Snabblänkar</h3>
            <div className="space-y-3">
              <button onClick={() => navigate("/")} className="block text-gray-300 hover:text-rose-400 transition-colors">
                Om oss
              </button>
              <button onClick={() => navigate("/how-it-works")} className="block text-gray-300 hover:text-rose-400 transition-colors">
                Så fungerar det
              </button>
              <button onClick={() => navigate("/for-restaurants")} className="block text-gray-300 hover:text-rose-400 transition-colors">
                För restauranger
              </button>
              <button onClick={() => navigate("/contact")} className="block text-gray-300 hover:text-rose-400 transition-colors">
                Kontakt
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Håll dig uppdaterad</h3>
            <form onSubmit={handleNewsletterSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
              >
                Gå med i nyhetsbrevet
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Socialize. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
