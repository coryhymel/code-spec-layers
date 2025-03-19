
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold font-display tracking-tight">
            Code<span className="text-primary">to</span>Spec
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#api" className="nav-link">
            API
          </a>
          <a href="#documentation" className="nav-link">
            Documentation
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </a>
          <a href="#" className="btn-primary text-sm py-2">
            Get API Key
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#api"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              API
            </a>
            <a
              href="#documentation"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="#"
                className="text-center py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                Sign In
              </a>
              <a href="#" className="btn-primary text-center">
                Get API Key
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
