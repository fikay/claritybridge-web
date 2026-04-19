"use client";

import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarCheck, Send } from "lucide-react";

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Mailto fallback — opens default mail client with pre-filled content
    const to = "info@claritybridge.ca"; // TODO: update with real email
    const subject = encodeURIComponent("Discovery Call Request – ClarityBridge");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — CTA copy */}
          <div>
            <p className="reveal text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-3">
              Let's Talk
            </p>
            <h2
              id="contact-heading"
              className="reveal font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Ready to Bring Clarity to Your Organization?
            </h2>
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-8">
              Schedule a complimentary discovery call to discuss how HR,
              strategy, or program advisory support could strengthen your
              organization.
            </p>

            {/* Calendly CTA */}
            <div className="reveal">
              {/* TODO: Replace href with real Calendly URL */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ size: "lg" })} bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-200 flex items-center`}
              >
                <CalendarCheck size={18} className="mr-2" />
                Schedule a Discovery Call
              </a>
              <p className="mt-3 text-muted-foreground text-sm font-sans">
                Complimentary 30-minute call — no commitment required
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="reveal bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <Send size={32} className="text-accent" />
                <p className="font-heading text-lg font-semibold text-foreground">
                  Message sent!
                </p>
                <p className="text-muted-foreground text-sm">
                  Your email client should have opened. We'll get back to you
                  shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                aria-label="Contact form"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground font-sans"
                  >
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground font-sans"
                  >
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@organization.ca"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground font-sans"
                  >
                    How Can We Help? <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your organization and what support you're looking for..."
                    required
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-sans ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-5 font-semibold"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
