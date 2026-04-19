"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, Briefcase, Users } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Not-for-Profit Organizations",
    description:
      "Strengthening governance, program effectiveness, and HR foundations to meet funder expectations and advance mission impact.",
    color: "text-accent",
    bg: "bg-accent/10 dark:bg-accent/5",
  },
  {
    icon: Briefcase,
    title: "Small & Micro Businesses",
    description:
      "Helping business owners implement compliant, simple HR systems so they can grow confidently.",
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-primary/10",
  },
  {
    icon: Users,
    title: "Boards & Leadership Teams",
    description:
      "Supporting strategic clarity, accountability, and effective governance oversight.",
    color: "text-accent",
    bg: "bg-accent/10 dark:bg-accent/5",
  },
];

export function WhoWeServe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="who-we-serve"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal max-w-2xl mx-auto text-center mb-16">
          <p className="text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Serve
          </p>
          <h2
            id="who-we-serve-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
          >
            Built for Growing Organizations Navigating Change
          </h2>
          <p className="text-muted-foreground text-lg">
            We support growing organizations and teams with expert, flexible
            leadership at every stage of growth.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Card
                key={audience.title}
                className="reveal group border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${audience.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon size={22} className={audience.color} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground leading-snug">
                    {audience.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
