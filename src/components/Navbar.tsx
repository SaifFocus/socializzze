
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">S</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              SOCIALIZE
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => navigate("/")} 
              className="text-gray-700 hover:text-rose-500 transition-colors text-sm lg:text-base"
            >
              Hem
            </button>
            <button 
              onClick={() => navigate("/how-it-works")} 
              className="text-gray-700 hover:text-rose-500 transition-colors text-sm lg:text-base"
            >
              Så fungerar det
            </button>
            <button 
              onClick={() => navigate("/for-restaurants")} 
              className="text-gray-700 hover:text-rose-500 transition-colors text-sm lg:text-base"
            >
              För restauranger
            </button>
            <button 
              onClick={() => navigate("/contact")} 
              className="text-gray-700 hover:text-rose-500 transition-colors text-sm lg:text-base"
            >
              Kontakt
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button 
              variant="outline" 
              className="border-rose-300 text-rose-600 hover:bg-rose-50 text-sm px-3 py-2"
              onClick={() => navigate("/partner-form")}
            >
              Bli partner
            </Button>
            <Button 
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm px-3 py-2"
              onClick={() => navigate("/contact")}
            >
              <span className="hidden lg:inline">Gå med i väntelistan</span>
              <span className="lg:hidden">Väntelistan</span>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-rose-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                SOCIALIZE
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-rose-50 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <button 
                onClick={() => handleNavigation("/")}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-rose-500 transition-colors py-3 border-b border-gray-100"
              >
                Hem
              </button>
              <button 
                onClick={() => handleNavigation("/how-it-works")}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-rose-500 transition-colors py-3 border-b border-gray-100"
              >
                Så fungerar det
              </button>
              <button 
                onClick={() => handleNavigation("/for-restaurants")}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-rose-500 transition-colors py-3 border-b border-gray-100"
              >
                För restauranger
              </button>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="block w-full text-left text-lg font-medium text-gray-700 hover:text-rose-500 transition-colors py-3 border-b border-gray-100"
              >
                Kontakt
              </button>
            </div>
          </nav>

          {/* Menu Footer with Buttons */}
          <div className="p-6 border-t border-rose-100 space-y-4">
            <Button 
              variant="outline" 
              className="w-full border-rose-300 text-rose-600 hover:bg-rose-50 py-3 text-base"
              onClick={() => handleNavigation("/partner-form")}
            >
              Bli partner
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-lg py-3 text-base"
              onClick={() => handleNavigation("/contact")}
            >
              Gå med i väntelistan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
