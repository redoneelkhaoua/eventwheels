import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EventWheels",
    default: "EventWheels — The Right Car for Your Event",
  },
  description:
    "Luxury and event car rental in Morocco. Premium fleet for weddings, corporate events, airport transfers, parties, and road trips. Book your perfect car today.",
  keywords: [
    "car rental Morocco",
    "wedding car rental",
    "corporate car hire",
    "event car rental",
    "luxury car Morocco",
    "EventWheels",
  ],
  openGraph: {
    title: "EventWheels — The Right Car for Your Event",
    description:
      "Premium event car rental for weddings, corporate events, airports, parties & road trips across Morocco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-sand-50 text-navy-800 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
