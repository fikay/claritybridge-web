"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  UserCheck,
  BarChart3,
  ClipboardList,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "HR Foundations & Advisory",
    badge: "People",
    description:
      "Employee handbooks, policies, recruitment frameworks, and ongoing HR support tailored to your organization's stage and sector.",
    highlights: ["Employee Handbooks", "Recruitment Frameworks", "HR Policies"],
  },
  {
    icon: BarChart3,
    title: "Strategic Planning & Governance",
    badge: "Strategy",
    description:
      "Facilitated planning, board governance frameworks, and performance measurement systems that create clarity and accountability.",
    highlights: ["Facilitated Planning", "Board Governance", "Performance Systems"],
  },
  {
    icon: ClipboardList,
    title: "Program Design & Evaluation",
    badge: "Programs",
    description:
      "Logic models, outcomes frameworks, inception & reflection sessions, and funder-aligned reporting systems for mission-driven organizations.",
    highlights: ["Logic Models", "Outcomes Frameworks", "Funder Reporting"],
  },
  {
    icon: Briefcase,
    title: "Fractional HR / Program Manager",
    badge: "Fractional",
    description:
      "Fractional HR and program management expertise without the cost of a full-time hire. Flexible, result-driven support delivered exactly when you need it.",
    highlights: ["Fractional Leadership", "Flexible Engagements", "Expert Support"],
  },
];

export function Services() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
          >
            Specialized Support for Every Stage of Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in helping growing businesses and nonprofits through
            critical growth phases with strategic management and program
            effectiveness services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="reveal group flex flex-col border-border hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/8 dark:bg-primary/15 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-200">
                      <Icon size={20} className="text-primary dark:text-primary group-hover:text-accent transition-colors duration-200" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-sans font-medium"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs font-sans text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom call-out */}
        <p className="reveal mt-12 text-center text-muted-foreground font-sans italic">
          Flexible, result-driven support — delivered exactly when you need it.
        </p>
      </div>
    </section>
  );
}
