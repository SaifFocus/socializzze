
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  return (
    <div className="w-full">
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
          
          {/* Desktop Menu */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-rose-600" />
            ) : (
              <Menu className="h-6 w-6 text-rose-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeMobileMenu();
            }}
          />
        )}

        {/* Mobile Menu */}
        <div className={`
          fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-md border-l border-rose-100 shadow-2xl z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-6 pt-20 h-full overflow-y-auto">
            {/* Mobile Navigation Links */}
            <div className="space-y-6 mb-8">
              <button 
                onClick={() => handleNavigation("/")} 
                className="block w-full text-left text-lg text-gray-700 hover:text-rose-500 transition-colors py-2"
              >
                Hem
              </button>
              <button 
                onClick={() => handleNavigation("/how-it-works")} 
                className="block w-full text-left text-lg text-gray-700 hover:text-rose-500 transition-colors py-2"
              >
                Så fungerar det
              </button>
              <button 
                onClick={() => handleNavigation("/for-restaurants")} 
                className="block w-full text-left text-lg text-gray-700 hover:text-rose-500 transition-colors py-2"
              >
                För restauranger
              </button>
              <button 
                onClick={() => handleNavigation("/contact")} 
                className="block w-full text-left text-lg text-gray-700 hover:text-rose-500 transition-colors py-2"
              >
                Kontakt
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full border-rose-300 text-rose-600 hover:bg-rose-50"
                onClick={() => handleNavigation("/partner-form")}
              >
                Bli partner
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleNavigation("/contact")}
              >
                Gå med i väntelistan
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
