
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt meddelande. Vi återkommer snart.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast({
        title: "Välkommen!",
        description: "Du är nu registrerad för vårt nyhetsbrev.",
      });
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <Navbar />
      
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Frågor? Samarbeten?
            </h1>
            <p className="text-xl text-gray-600">Hör av dig.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-rose-100 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-rose-600">Kontakta oss</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Namn
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-rose-200 focus:border-rose-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-rose-200 focus:border-rose-400"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-rose-200 focus:border-rose-400 h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white"
                >
                  Skicka meddelande
                </Button>
              </form>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-100 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-purple-600">Gå med i väntelistan</h2>
              <p className="text-gray-600 mb-8">
                Bli först med att veta när vi lanserar.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-postadress
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="border-purple-200 focus:border-purple-400"
                    placeholder="din@email.se"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 text-white"
                >
                  Gå med i nyhetsbrevet
                </Button>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg">
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm font-medium">342 personer väntar redan</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="text-sm font-medium">Lansering sommaren 2025</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
