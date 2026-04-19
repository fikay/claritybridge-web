"use client";

import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const offset = window.scrollY * 0.3;
      heroRef.current.style.setProperty("--parallax-y", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-primary-foreground"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Decorative amber accent orb */}
      <div
        className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full bg-accent/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow */}
        <p className="animate-fade-up delay-100 inline-block text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-6">
          Advisory · Strategy · People
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="animate-fade-up delay-200 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
        >
          HR, Strategy & Program
          <br />
          <span className="text-accent">Advisory</span> for Growing
          <br />
          Organizations
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-300 max-w-2xl mx-auto text-primary-foreground/75 text-lg sm:text-xl leading-relaxed mb-10">
          Practical, affordable advisory support helping nonprofits, small
          businesses, and boards build strong people systems, program
          excellence, strategic clarity, and sustainable operations.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className={`${buttonVariants({ size: "lg" })} bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-200 flex items-center`}
          >
            <CalendarCheck size={18} className="mr-2" />
            Book a Discovery Call
          </a>
          <a
            href="#services"
            className={`${buttonVariants({ variant: "outline", size: "lg" })} rounded-full px-8 py-6 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 flex items-center`}
          >
            Explore Services
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>

        {/* Trust bar */}
        <div className="animate-fade-up delay-500 mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/50 text-sm font-sans">
          {[
            "Nonprofits",
            "Small Businesses",
            "Boards & Leadership Teams",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/30">
        <ArrowRight size={20} className="rotate-90" />
      </div>
    </section>
  );
}
