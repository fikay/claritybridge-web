import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/*
 * SOCIAL LINKS — Currently hidden (no social media yet).
 * To enable: uncomment the social links section below and
 * fill in the real URLs.
 */
// const socialLinks = [
//   { label: "LinkedIn", href: "https://linkedin.com/company/claritybridge" },
//   { label: "Twitter / X", href: "https://twitter.com/claritybridge" },
//   { label: "Instagram", href: "https://instagram.com/claritybridge" },
//   { label: "Facebook", href: "https://facebook.com/claritybridge" },
// ];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/logo.svg"
              alt="ClarityBridge"
              width={160}
              height={28}
              className="h-7 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Practical, affordable advisory support for nonprofits, small
              businesses, and boards across Canada.
            </p>

            {/* Social links placeholder — uncomment when ready */}
            {/* <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-primary-foreground/50 mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-primary-foreground/50 mb-5">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:info@claritybridge.ca"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {/* TODO: update with real email */}
                  info@claritybridge.ca
                </a>
              </li>
              <li className="text-primary-foreground/50">
                Canada
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Book a discovery call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs font-sans">
          <p>© {year} ClarityBridge. All rights reserved.</p>
          <div className="flex gap-6">
            {/* TODO: add real privacy policy and terms pages */}
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
