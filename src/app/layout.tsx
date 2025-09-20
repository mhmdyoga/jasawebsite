import type { Metadata } from "next";
import { Geist, Geist_Mono, Ramabhadra } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const Ramabadrha = Ramabhadra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ramabhadra",
})

export const metadata: Metadata = {
  title: "Jasawebsite.dev | Affordable Website Development Services",
  description: "Jasa pembuatan website: landing page, company profile, ecommerce. Cepat, SEO friendly, Murah, Terjangkau, responsive, dan modern.",
  icons: {
    icon: "/logo-jasawebsite.png",
  },
  keywords: [
    "jasa website",
    "jasa pembuatan website",
    "jasa landing page",
    "jasa company profile",
    "jasa ecommerce",
    "jasa website murah",
    "jasa website Terjangkau",
  ],
  openGraph: {
    title: "Jasa Pembuatan Website Profesional & user friendly",
    description:
      "Bikin website lebih cepat, modern, dan SEO friendly bersama jasawebsite.dev, Layanan pembuatan landing page, company profile, dan e-commerce.",
    url: "https://jasawebsite.dev",
    siteName: "jasawebsite.dev",
    images: [
      {
        url: "https://jasawebsite.dev/og-jasawebsite.png",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional & user-friendly",
    description:
      "Jasa pembuatan website: landing page, company profile, ecommerce. Cepat, SEO friendly, responsive, dan modern.",
    images: ["https://jasawebsite.dev/og-jasawebsite.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/yg-icon.png" type="image/png"/>
      <body
        className={`${Ramabadrha.className} antialiased bg-black`}
      >
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
