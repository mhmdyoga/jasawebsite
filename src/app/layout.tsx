import type { Metadata } from "next";
import { Geist, Geist_Mono, Ramabhadra } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import PixelProvider from "@/providers/Providers";
import { Suspense } from "react";

const Ramabadrha = Ramabhadra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ramabhadra",
})

export const metadata: Metadata = {
  title: "Codeverse Studio | Jasa Pembuatan Website Profesional & Terjangkau",
  description:
    "Codeverse Studio menyediakan jasa pembuatan website: landing page, company profile, dan e-commerce. Cepat, SEO-friendly, modern, dan terjangkau untuk bisnis Anda.",
  keywords: [
    "jasa website",
    "jasa pembuatan website",
    "jasa landing page",
    "jasa company profile",
    "jasa ecommerce",
    "jasa website murah",
    "Codeverse Studio",
  ],
  icons: {
    icon: "/logo-jasawebsite.png",
  },
  openGraph: {
    title: "Codeverse Studio | Jasa Pembuatan Website Profesional",
    description:
      "Bikin website cepat, modern, dan SEO friendly bersama Codeverse Studio. Layanan pembuatan landing page, company profile, dan e-commerce.",
    url: "https://codeverse.xyz",
    siteName: "Codeverse Studio",
    images: [
      {
        url: "https://codeverse.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codeverse Studio | Jasa Pembuatan Website Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeverse Studio | Jasa Pembuatan Website Profesional & Modern",
    description:
      "Codeverse Studio menyediakan jasa pembuatan website dan aplikasi profesional untuk bisnis, UMKM, dan startup di seluruh Indonesia.",
    images: ["https://codeverse.xyz/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <link rel="icon" href="/yg-icon.png" type="image/png"/>   
      <body
        className={`${Ramabadrha.className} antialiased bg-black`}
      >
        <Suspense>
        <PixelProvider/>
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/> 
        </Suspense>
       
         <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Codeverse Studio",
      url: "https://codeverse.xyz",
      description:
        "Codeverse Studio menyediakan jasa pembuatan website dan aplikasi profesional untuk bisnis, UMKM, dan startup.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tangerang",
        addressCountry: "ID",
      },
      sameAs: [
        "https://www.instagram.com/codeverse_studio.id",
      ],
    }),
  }}
/>   

<noscript>
  <img 
    height="1"
    width="1"
    style={{ display: 'none' }}
    src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
    alt=""
  />
</noscript>
      </body>
    </html>
  );
}
