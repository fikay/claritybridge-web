"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Smooth scroll to anchor
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-primary hover:opacity-80 transition-opacity"
            aria-label="ClarityBridge home"
          >
            <Image
              src="/logo.svg"
              alt="ClarityBridge"
              width={180}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className={`hidden md:inline-flex ${buttonVariants({ size: "sm" })} bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-5 shadow-sm`}
            >
              Book a Call
            </a>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger>
                <button
                  className="md:hidden p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
                  aria-label="Open menu"
                  data-testid="mobile-menu-trigger"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-4" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className={`mt-4 w-full flex justify-center ${buttonVariants({})} bg-accent hover:bg-accent/90 text-accent-foreground rounded-full`}
                  >
                    Book a Call
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
