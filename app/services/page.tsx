/**
 * /services — Scaffolded page (not linked in nav yet).
 * To activate: add a link in Header.tsx and Footer.tsx navLinks arrays.
 * Expand this page with full service details, case studies, etc.
 */
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | ClarityBridge",
  description:
    "Explore ClarityBridge's HR, strategic planning, program design, and fractional leadership services for nonprofits and small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <div className="py-16 bg-primary text-primary-foreground text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto">
            Flexible, result-driven advisory support tailored to your
            organization&apos;s stage and sector.
          </p>
        </div>
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
