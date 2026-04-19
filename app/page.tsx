import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhoWeServe />
        <Services />
        <About />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
