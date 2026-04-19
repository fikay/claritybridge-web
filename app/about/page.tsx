/**
 * /about — Scaffolded page (not linked in nav yet).
 * To activate: add a link in Header.tsx and Footer.tsx navLinks arrays.
 * Expand this page with team bios, photos, values, story, etc.
 */
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ClarityBridge",
  description:
    "Learn about ClarityBridge's experienced consultants and our commitment to practical, results-driven HR and program advisory.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <div className="py-16 bg-primary text-primary-foreground text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            About ClarityBridge
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto">
            Experienced advisors helping organizations build clarity, structure,
            and sustainable people systems.
          </p>
        </div>
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
