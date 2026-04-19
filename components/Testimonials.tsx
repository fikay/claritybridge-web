"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

/* TODO: Replace placeholder data with real client testimonials */
const testimonials = [
  {
    quote:
      "ClarityBridge helped us establish an HR foundation that gave our team clarity and our funders confidence. Their practical approach was exactly what we needed.",
    name: "Executive Director",
    org: "Community Nonprofit Organization",
    initials: "ED",
  },
  {
    quote:
      "Working with ClarityBridge transformed how we approach strategic planning. We now have a governance framework that actually works for our board.",
    name: "Board Chair",
    org: "Not-for-Profit Board",
    initials: "BC",
  },
  {
    quote:
      "As a small business owner, having fractional HR support meant I could focus on growing the business without worrying about compliance and people issues.",
    name: "Business Owner",
    org: "Small Business, Ontario",
    initials: "BO",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden relative"
      aria-labelledby="testimonials-heading"
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            What Our Clients Say
          </h2>
          {/* Placeholder notice — remove when real testimonials are added */}
          <p className="mt-3 text-primary-foreground/50 text-sm font-sans italic">
            ✦ Placeholder content — real testimonials coming soon
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="reveal bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <CardContent className="pt-6 pb-6 flex flex-col gap-4">
                <Quote size={28} className="text-accent opacity-80" />
                <p className="text-primary-foreground/85 leading-relaxed italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-2">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-semibold text-sm font-sans">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm font-sans">
                      {t.name}
                    </p>
                    <p className="text-primary-foreground/50 text-xs font-sans">
                      {t.org}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
