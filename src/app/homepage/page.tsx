"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutFreelancer from "@/components/fragments/aboutFreelancer";
import CtaSection from "@/components/fragments/Ctasection";
import FeedbackClient from "@/components/fragments/FeedbackClient";
import PreviewProject from "@/components/fragments/PreviewProject";
import PriceList from "@/components/fragments/PriceList";
import LiquidEther from "@/components/LiquidEther";
import LogoLoop from "@/components/LogoLoop";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-white" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-white" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-white" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiSupabase className="text-white" />, title: "Supabase", href: "" },
  { node: <SiPrisma className="text-white" />, title: "Prisma", href: "" },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logo-sneakersco.png",
    title: "Sneakers.co",
    href: "https://sneakersco.vercel.app/",
  },
  {
    src: "/logo-skytrips.png",
    alt: "SkyTrips",
    href: "https://mhmdyoga.github.io/travelbromo/",
  },
  {
    src: "/logo-thesneakers.png",
    alt: "Company 3",
    href: "https://mhmdyoga.github.io/sppp/",
  },
  {
    src: "/logo-genzblog.png",
    alt: "Company 4",
    href: "https://genzblog.vercel.app/",
  },
];

const Homepage = () => {
  
  const redirectToWhatsApp = () => {
  const phoneNumber = "6285135439654"; // ganti dengan nomor WA lo (format internasional tanpa +)
  const message = encodeURIComponent(
    "Halo, saya sepertinya tertarik dengan portofolio dan kinerja dari Jasawebsite.dev, bisa konsultasi untuk kebutuhan business saya ?"
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const redirectToPortofolio = () => {
  window.open('https://mhmdyoga.vercel.app/projects')
}

  return (
    <div>
      {/* hero section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Animasi */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        {/* Konten Hero */}
        <div className="relative z-10 text-center text-white md:px-4">
          <h1 className="text-2xl ml-10 w-2xs md:w-4xl md:text-5xl text-center font-bold drop-shadow-lg">
            Jasa Pembuatan Website Profesional & User-Friendly
          </h1>
          <div className="flex flex-row gap-4 md:mt-8 mt-4 justify-center items-center">
  {/* Tombol WhatsApp */}
          <button
            onClick={redirectToWhatsApp}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 flex flex-row items-center justify-center gap-2 sm:gap-3 bg-white text-black rounded-xl shadow-md hover:bg-gray-200 transition text-sm sm:text-base"
          >
            <BsWhatsapp className="text-lg sm:text-xl" />
            Konsultasi
          </button>

          {/* Tombol Portofolio */}
          <div
            onClick={redirectToPortofolio}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl shadow-md hover:bg-white/20 transition cursor-pointer text-sm sm:text-base text-center"
          >
            Cek Portofolio
          </div>

          </div>
        </div>
      </div>
      {/* tech stack & partners section */}
     {/* tech stack & partners section */}
<div className="mt-8 p-4 flex flex-col gap-10 overflow-hidden">
  <h2 className="text-white font-bold md:text-4xl text-xl text-center">
    Tech Stack & <span className="text-[#4F2CCE]">Partners</span>
  </h2>
  <div
    className="flex flex-col gap-10 overflow-hidden"
    style={{ height: "auto", position: "relative" }}
  >
    <LogoLoop
      logos={techLogos}
      speed={100}
      direction="left"
      logoHeight={50}
      gap={24}
      pauseOnHover
      scaleOnHover
      fadeOut
      fadeOutColor="#111"
      ariaLabel="Technology partners"
    />
    <LogoLoop
      className="text-white"
      logos={imageLogos as any}
      speed={100}
      direction="right"
      logoHeight={48}
      gap={24}
      pauseOnHover
      scaleOnHover
      fadeOut
      fadeOutColor="#111"
      ariaLabel="Technology partners"
    />
  </div>
</div>

      {/* section about me */}
      <div className="p-2">
        <h2 className="text-white font-bold md:text-4xl text-xl text-start md:p-8 p-4 md:ml-6 ml-3 md:mt-10 mt-5">
          About{" "}
          <span className="underline-offset-4 underline decoration-[#4F2CCE] ">
            Freelancer
          </span>
        </h2>
        <AboutFreelancer />
      </div>
      {/* CTA Section */}
      <div className="p-12 mt-10 mb-10">
        <CtaSection />
      </div>
      {/* Preview Project Client */}
      <div>
        <PreviewProject />
      </div>
      {/* feedback client */}
      <div className="p-16 mt-10 mb-10 text-start">
        <h2 className="text-white font-bold md:text-4xl text-xl md:p-8 p-4 md:ml-6 ml-3 md:mt-10 mt-5">
          <span className="underline underline-offset-4 decoration-[#4f2cce]">
            Feedback
          </span>{" "}
          Client
        </h2>
        {/* component feedback client */}
        <FeedbackClient />
      </div>
      {/* pricelist */}
      <div>
        <PriceList />
      </div>
    </div>
  );
};

export default Homepage;
