import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src="/assets/generated/charity-logo.dim_400x120.png"
              alt="Saidi Shema Foundation"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "-")}.link`}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 font-body ${
                  scrolled
                    ? "text-foreground hover:text-primary hover:bg-muted"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#get-involved")}
              data-ocid="nav.donate.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu.toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg rounded-b-lg pb-4">
            <div className="flex flex-col gap-1 pt-2 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <Button
                  onClick={() => handleNavClick("#get-involved")}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
