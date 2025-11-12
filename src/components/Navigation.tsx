import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-logistics-navy/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink 
            to="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            JuanChini
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={`transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={`transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={`transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
            >
              Contact
            </NavLink>
            <Button variant="default" size="lg" asChild>
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden pb-6 space-y-4 animate-fade-in ${
            isScrolled ? "bg-background" : "bg-logistics-navy/95"
          }`}>
            <NavLink
              to="/"
              className={`block py-2 transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`block py-2 transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={`block py-2 transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={`block py-2 transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
              activeClassName={isScrolled ? "text-primary font-semibold" : "text-white font-semibold"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button variant="default" size="lg" className="w-full" asChild>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
