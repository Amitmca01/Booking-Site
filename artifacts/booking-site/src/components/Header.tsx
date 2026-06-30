import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b border-border"
          : "bg-transparent py-5"
      }`}
      data-testid="site-header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-testid="link-home">
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              {CONTENT.business.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}

            <div
              className={`flex items-center gap-4 border-l pl-6 ml-2 transition-colors duration-300 ${
                isScrolled ? "border-border" : "border-white/25"
              }`}
            >
              <a
                href={`tel:${CONTENT.business.phone.replace(/[^0-9+]/g, "")}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid="link-phone"
              >
                {CONTENT.business.phone}
              </a>
              <Button
                asChild
                data-testid="button-book-nav"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? ""
                    : "bg-white text-primary hover:bg-white/90 border-transparent"
                }`}
              >
                <a href="#booking">Book Now</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground p-2 hover:bg-muted hover:text-primary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`mobile-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${CONTENT.business.phone.replace(/[^0-9+]/g, "")}`}
            className="text-base font-medium text-muted-foreground p-2"
          >
            Call: {CONTENT.business.phone}
          </a>
          <Button
            asChild
            className="w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="#booking">Book Now</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
