import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClarityBridge | HR, Strategy & Program Advisory",
  description:
    "Practical, affordable advisory support helping nonprofits, small businesses, and boards build strong people systems, strategic clarity, and sustainable operations.",
  keywords: [
    "HR advisory",
    "nonprofit HR",
    "strategic planning",
    "program management",
    "fractional HR",
    "board governance",
    "small business HR",
    "ClarityBridge",
  ],
  openGraph: {
    title: "ClarityBridge | HR, Strategy & Program Advisory",
    description:
      "We help nonprofits, small businesses, and boards build strong people systems, program excellence, and strategic clarity.",
    url: "https://www.claritybridge.ca",
    siteName: "ClarityBridge",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.png", // TODO: add real OG image
        width: 1200,
        height: 630,
        alt: "ClarityBridge – HR, Strategy & Program Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClarityBridge | HR, Strategy & Program Advisory",
    description:
      "Practical advisory support for nonprofits, small businesses, and boards.",
  },
  metadataBase: new URL("https://www.claritybridge.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
