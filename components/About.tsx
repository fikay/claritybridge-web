"use client";

import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const trustPoints = [
  "Vast Program Management experience across sectors",
  "Extensive nonprofit, community org & small business support",
  "Practical systems that reduce risk and improve accountability",
  "Trusted advisory without unnecessary complexity",
  "Partner closely with leadership teams and boards",
  "We help business owners sleep better at night",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <p className="reveal text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2
              id="about-heading"
              className="reveal font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Get to Know Us
            </h2>
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-6">
              Our Consultants have vast Program Management and strategic HR
              management experience, extensively supporting nonprofits, community
              organizations, and small businesses. Our work focuses on building
              practical systems that reduce risk, improve accountability, and
              support sustainable growth.
            </p>
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-8">
              We partner closely with leadership teams and boards, bringing
              clarity, structure, and trusted advisory support without
              unnecessary complexity.
            </p>
            <p className="reveal font-heading text-xl font-semibold text-primary italic">
              &ldquo;We help business owners sleep better at night by taking HR and
              program management off their plate.&rdquo;
            </p>
          </div>

          {/* Trust signals column */}
          <div className="reveal">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Why Organizations Choose ClarityBridge
              </h3>
              <ul className="flex flex-col gap-4">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-muted-foreground leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
