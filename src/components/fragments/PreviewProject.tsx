import React from "react";
import CardSwap, { Card } from "../CardSwap";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../ui/button";

const PreviewProject = () => {

  const redirectToWhatsApp = () => {
  const phoneNumber = "6285135439654"; // ganti dengan nomor WA lo (format internasional tanpa +)
  const message = encodeURIComponent(
    "Halo, saya sepertinya tertarik dengan portofolio dan kinerja dari Codeverse Studio, bisa konsultasi untuk kebutuhan business saya ?"
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

  return (
    <div className="md:mt-40 mt-10">
      <div className="text-start p-8 ml-6 mb-4 text-white relative">
        <h2 className="text-xl md:text-4xl font-bold w-2xs md:w-3xl ">Sedikit cuplikan Project-Project yang Kami buat untuk para <span className="text-[#4F2CCE]">Client Kami</span></h2>
        <div className="md:mt-16 mt-4">
          <h5 className="text-white italic font-semibold w-2xs text-xs md:text-xl md:w-2xl">Kami membantu para Bussiness Owner untuk memiliki website modern, cepat, dan SEO-friendly 
  agar mudah ditemukan di mesin pencari seperti Google. Bussiness Kamu Pengen Punya <span className="text-[#4F2CCE]">Website Profesional</span> Kayak Gini ?? Yok, Konsultasiin Sekarang Biar Bussiness Kamu Growth & Modern.</h5>
                 <Button
            onClick={redirectToWhatsApp}
            className="bg-[#4F2CCE] flex flex-row gap-2 items-center text-white text-xs sm:text-sm md:text-lg px-4 py-2 rounded-md mt-4 hover:bg-[#3b1fae] transition duration-300"
          >
            <BsWhatsapp /> Konsultasi Sekarang
          </Button>

        </div>
      </div>
      {/* Card Swap Component */}
      <div className="-mt-80 md:-mt-0" style={{ height: "600px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card className="-ml-40 -mt-60">
            <h3 className="text-white font-bold text-lg p-4 text-start">
              Sneakers.co
            </h3>
            <p  className="text-white font-bold text-xs ml-4 text-start">E-Commerce Platform</p>
            <div className="flex justify-center items-center p-4">
              <Image
                src="/sneakersco-hero.png"
                alt="sneakersco platform E-commerce Sneakers sperti Nike, Adidas, Aerostreet, compass"
                width={428}
                height={389}
                className="w-auto h-auto"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="-ml-40 -mt-60">
            <h3 className="text-white font-bold text-lg p-4">The Sneakers</h3>
            <p  className="text-white font-bold text-xs ml-4 text-start">Landing Page</p>
            <div className="flex justify-center items-center p-4">
              <Image
                src="/the-sneakers-hero.png"
                alt="Sneakersco Platform E commerce sneakers seperti Nike"
                width={428}
                height={389}
                className="w-auto h-auto"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="-ml-40 -mt-60">
            <h3 className="text-white font-bold text-lg p-4">
              SkyTrips Travel
            </h3>
            <p  className="text-white font-bold text-xs ml-4 text-start">Travel Platform</p>
            <div className="flex justify-center items-center p-4">
              <Image
                src="/skytrips-hero.png"
                alt="Trips bareng Skytrips murah dan terpecaya, Platform Travel seluruh indonesia"
                width={428}
                height={389}
                className="w-auto h-auto"
                loading="lazy" 
              />
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default PreviewProject;
