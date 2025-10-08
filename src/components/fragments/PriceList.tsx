/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  Star,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "../ui/button";

const landingPageData = [
  {
    id: 1,
    title: "Standart",
        paket: "landing-page",
    price: "1.200.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (6 Bulan)" },
      { id: 3, name: "Free Maintenance 30 Hari" },
      { id: 4, name: "2x Revisi Desain" },
      { id: 5, name: "Responsive Layout (Web & Mobile)" },
      { id: 6, name: "5 Section Landing Page" },
      { id: 7, name: "Include 1 Business Email" },
      { id: 8, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 9, name: "SEO Friendly Structure" },
      { id: 10, name: "Analytics Setup" },
      { id: 11, name: "Free SSL Security (HTTPS)" },
      { id: 12, name: "Priority Support via Email/Chat" },
    ],
  },
  {
    id: 2,
    title: "Premium",
        paket: "landing-page",
    price: "2.700.000",
    benefits: [
      {
        id: 1,
        name: "Free Domain (.com) 1 Tahun",
      },
      { id: 2, name: "Free Hosting Setup (12 Bulan)"},
      { id: 3, name: "Free Maintenance 60 Hari (bug fixing & minor update)" },
      { id: 4, name: "4x Revisi Desain" },
      { id: 5, name: "Responsive Layout (Web & Mobile)" },
      { id: 6, name: "7 Section Landing Page" },
      { id: 7, name: "Include 2 Business Email" },
      { id: 8, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 9, name: "SEO Friendly Structure + Basic On-Page SEO" },
      { id: 10, name: "Analytics Setup" },
      { id: 11, name: "Free SSL Security (HTTPS)" },
      { id: 12, name: "Priority Support via Email/Chat" },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
        paket: "landing-page",
    price: "4.500.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting 12Bulan" },
      { id: 3, name: "Free Maintenance 90 Hari" },
      { id: 4, name: "Unlimited Revisi Desain (selama masa maintanance)" },
      { id: 5, name: "Responsive Layout (Web & Mobile)" },
      { id: 6, name: "10 Section Landing Page" },
      { id: 7, name: "Include 4 Business Email" },
      { id: 8, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 9, name: "Advanced SEO Optimization" },
      { id: 10, name: "Setup Analytics" },
      { id: 11, name: "Free SSL Security (HTTPS)" },
      { id: 13, name: "Performance Optimization" },
      { id: 14, name: "Backup & Recovery" },
    ],
  },
];

const companyProfileData = [
  {
    id: 1,
    title: "Standart",
        paket: "company-profile",
    price: "2.800.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (6 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 30 Hari" },
      { id: 5, name: "3 Halaman Utama (Home, About, Contact)" },
      { id: 6, name: "2x Revisi Desain" },
      { id: 7, name: "Include 1 Business Email" },
      { id: 8, name: "SEO Friendly Structure" },
      { id: 9, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 10, name: "Basic Analytics Setup" },
    ],
  },
  {
    id: 2,
    title: "Growth",
        paket: "company-profile",
    price: "4.200.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting  (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 60 Hari" },
      { id: 5, name: "6 Halaman Utama (Home, About, Services, Portfolio, Blog, Contact)" },
      { id: 6, name: "4x Revisi Desain" },
      { id: 7, name: "Include 3 Business Emails" },
      { id: 8, name: "SEO Optimization + Meta Tag Setup" },
      { id: 9, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 10, name: "Analytics & Performance Monitoring" },
      { id: 11, name: "Bonus 2 page Artikel" },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
        paket: "company-profile",
    price: "6.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting di Vercel (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 90 Hari" },
      { id: 5, name: "10+ Halaman (Home, About, Services, Portfolio, Blog, Careers, Contact, dsb)" },
      { id: 6, name: "Unlimited Revisi Desain (hingga launching)" },
      { id: 7, name: "Include 5 Business Emails" },
      { id: 8, name: "Advanced SEO + Schema Markup" },
      { id: 9, name: "Fast Global CDN (akses cepat dari seluruh dunia)" },
      { id: 10, name: "Custom Feature (misal: form karir, gallery, blog CMS)" },
      { id: 11, name: "Analytics Setup" },
      { id: 12, name: "Bonus 4 page artikel" },
      { id: 13, name: "Priority Support & Consultation" },
    ],
  },
];

const businessPlatformData = [
  {
    id: 1,
    title: "Standart",
    paket: "business-platform",
    price: "4.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (6 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 30 Hari" },
      { id: 5, name: "Dashboard Admin Sederhana" },
      { id: 6, name: "Manajemen Produk / Jasa (Add, Edit, Delete)" },
      { id: 7, name: "1 Business Email" },
      { id: 8, name: "Integrasi WhatsApp Chat" },
      { id: 9, name: "SEO Friendly Structure" },
      { id: 10, name: "Basic Analytics Setup ( Vercel )" },
      { id: 11, name: "Metode Pembayaran Melalui WA (transfer manual)" },
    ],
  },
  {
    id: 2,
    title: "Growth",
    paket: "business_patform",
    price: "7.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 60 Hari" },
      { id: 5, name: "Advanced Dashboard Admin (multi user)" },
      { id: 6, name: "Manajemen Produk & Kategori" },
      { id: 7, name: "Integrasi Payment Gateway (Midtrans)" },
      { id: 8, name: "3 Business Emails" },
      { id: 9, name: "Integrasi WhatsApp / Email Marketing" },
      { id: 10, name: "Analytics & Performance Monitoring" },
      { id: 11, name: "2 Blog / Artikel untuk Branding" },
      { id: 12, name: "Motode Pembayaran Bank VA" },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    paket: "bussiness_patform",
    price: "12.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 90 Hari" },
      { id: 5, name: "Full Custom Dashboard Admin" },
      { id: 6, name: "Multi User & Role Management" },
      { id: 7, name: "Integrasi Payment Gateway ( Midtrans ) + notifikasi Penjualan (owner) & Pembelian (user)" },
      { id: 8, name: "4 Business Emails" },
      { id: 10, name: "Integrasi API ( Ekspedisi )" },
      { id: 11, name: "Bonus 4 page Artikel" },
      { id: 12, name: "Advanced SEO + Schema Markup" },
      { id: 13, name: "Analytics Setup (Google Analytics, Vercel)" },
      { id: 14, name: "Priority Support & Business Consultation" },
      { id: 15, name: "Metode Pembayaran ( Qris, Bank VA )" },
    ],
  },
];

const articleBlogData = [
  {
    id: 1,
    title: "Standart",
    paket: "artikel-blog",
    price: "2.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com) 1 Tahun" },
      { id: 2, name: "Free Hosting (6 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 30 Hari" },
      { id: 5, name: "Halaman Utama + 5 Halaman Artikel" },
      { id: 6, name: "Kategori Artikel Dasar" },
      { id: 7, name: "1 Business Email" },
      { id: 8, name: "SEO Friendly Structure" },
      { id: 9, name: "Basic Analytics Setup (Google Analytics / Vercel)" },
      { id: 10, name: "Integrasi Share ke Sosial Media" },
    ],
  },
  {
    id: 2,
    title: "Growth",
        paket: "artikel-blog",
    price: "4.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com / .go.id) 1 Tahun" },
      { id: 2, name: "Free Hosting (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 60 Hari" },
      { id: 5, name: "Halaman Utama + 20 Halaman Artikel" },
      { id: 6, name: "Kategori Artikel" },
      { id: 7, name: "3 Business Emails" },
      { id: 8, name: "SEO Optimization (Meta Tag)" },
      { id: 9, name: "Advanced Analytics ( Vercel Analytics )" },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
        paket: "artikel-blog",
    price: "7.000.000",
    benefits: [
      { id: 1, name: "Free Domain (.com / go.id ) 1 Tahun" },
      { id: 2, name: "Free Hosting di Vercel (12 Bulan)" },
      { id: 3, name: "Responsive Layout (Web & Mobile)" },
      { id: 4, name: "Free Maintenance 90 Hari" },
      { id: 5, name: "Halaman Utama + Unlimited Artikel" },
      { id: 6, name: "Kategori Artikel" },
      { id: 7, name: "5 Business Emails" },
      { id: 8, name: "Full SEO Optimization + Keyword Strategy" },
      { id: 9, name: "Advanced Analytics (Vercel Analytics)" },
      { id: 10, name: "Custom Editor (Markdown / Rich Text)" },
      { id: 11, name: "Priority Support & Business Consultation" },
    ],
  },
];


const PriceList = () => {

  const redirectToWhatsApp = (category: string, paket: string) => {
  const phoneNumber = "6285135439654"; // ganti dengan nomor WA lo (format internasional tanpa +)
  const message = encodeURIComponent(
    `Halo, saya sepertinya tertarik dengan portofolio dan kinerja dari Jasawebsite.dev,saya tertarik dengan paket: ${category} dengan kategori: ${paket} bisa konsultasi untuk kebutuhan business saya ?`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

  return (
    <div>
      <div className="min-h-screen bg-[#000]">
        {/* Header */}
        <div className="bg-[#111] border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="text-center mb-4">
              <p className="text-white">
                Tertarik dengan{" "}
                <span className="text-[#4f2cce] text-xl italic font-semibold">
                  Codeverse Studio
                </span> 
                {" "} ?
              </p>
            </div>

            {/* Navigation Tabs */}
            <Tabs defaultValue="company-profile" className="w-full">
              <TabsList className="grid w-auto h-auto gap-6 grid-cols-2 md:grid-cols-4 bg-[#111]">
                <TabsTrigger
                  value="landing-page"
                  className="text-sm text-[#4f2cce] w-auto h-auto p-2 font-semibold"
                >
                  Landing Page
                </TabsTrigger>
                <TabsTrigger
                  value="company-profile"
                  className="text-sm text-[#4f2cce] font-semibold"
                >
                  Company Profile
                </TabsTrigger>
                <TabsTrigger
                  value="bussiness-platform"
                  className="text-sm text-[#4f2cce]  font-semibold"
                >
                  Bussiness Platform
                </TabsTrigger>
                <TabsTrigger
                  value="artikel-blog"
                  className="text-sm text-[#4f2cce]  font-semibold"
                >
                  Artikel & Blog
                </TabsTrigger>
              </TabsList>

              <TabsContent value="landing-page" className="mt-8">
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {landingPageData.map((data: any) => (
                      <div key={data.id} className="mt-40">
                         <Card className={data.title === "Premium" ? "bg-[#4f2cce] scale-y-110" : "bg-white shadow-lg"}>
                          {data.title === "Premium" ? (<div className="bg-white rounded-full p-4 w-12 h-10 flex items-center justify-center ml-52"><Star className="text-[#4f2cce] font-bold"/></div>) : null}
                      <CardContent className={data.title === "Premium" ? "text-white font-bold" : "text-gray"}>
                        <div className="flex  flex-col gap-3 items-center justify-center mb-4">
                          <h3 className="text-xl font-semibold">
                            {data.title}
                          </h3>
                          <h1 className="text-2xl font-bold">Rp. {data.price}</h1>
                        </div>
                        <ul className="space-y-2">
                        {data.benefits.map((item: any) => (
                          <li key={item.id} className={data.title === "Premium" ? "flex items-center text-sm text-[#d4d3d3]" : "flex items-center text-sm text-gray-600"}>
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {item.name}
                            </li>
                        ))}
                        </ul>
                      </CardContent>
                      <Button onClick={() => redirectToWhatsApp(data.paket, data.title) } className={data.title === "Premium" ? "bg-white text-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 flex flex-row gap-2 items-center justify-center" : "bg-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 text-white flex flex-row gap-2 items-center justify-center"}><BsWhatsapp/> Order Sekarang</Button>
                    </Card>
                      </div>
                    ))}

                  </div>
                </div>
              </TabsContent>

              <TabsContent value="company-profile" className="mt-8">
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {companyProfileData.map((data: any) => (
                      <div key={data.id} className="mt-40">
                         <Card className={data.title === "Growth" ? "bg-[#4f2cce] scale-y-110" : "bg-white shadow-lg"}>
                          {data.title === "Growth" ? (<div className="bg-white rounded-full p-4 w-12 h-10 flex items-center justify-center ml-52"><Star className="text-[#4f2cce] font-bold"/></div>) : null}
                      <CardContent className={data.title === "Growth" ? "text-white font-bold" : "text-gray"}>
                        <div className="flex  flex-col gap-3 items-center justify-center mb-4">
                          <h3 className="text-xl font-semibold">
                            {data.title}
                          </h3>
                          <h1 className="text-2xl font-bold">Rp. {data.price}</h1>
                        </div>
                        <ul className="space-y-2">
                        {data.benefits.map((item: any) => (
                          <li key={item.id} className={data.title === "Growth" ? "flex items-center text-sm text-[#d4d3d3]" : "flex items-center text-sm text-gray-600"}>
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {item.name}
                            </li>
                        ))}
                        </ul>
                      </CardContent>
                      <Button onClick={() => redirectToWhatsApp(data.paket, data.title) } className={data.title === "Premium" ? "bg-white text-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 flex flex-row gap-2 items-center justify-center" : "bg-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 text-white flex flex-row gap-2 items-center justify-center"}><BsWhatsapp/> Order Sekarang</Button>
                    </Card>
                      </div>
                    ))}

                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bussiness-platform" className="mt-8">
                <div className="max-w-6xl mx-auto">

                  <div className="grid md:grid-cols-3 gap-6 mb-12">

                    {businessPlatformData.map((data: any) => (
                      <div key={data.id} className="mt-40">
                         <Card className={data.title === "Growth" ? "bg-[#4f2cce] scale-y-110" : "bg-white shadow-lg"}>
                          {data.title === "Growth" ? (<div className="bg-white rounded-full p-4 w-12 h-10 flex items-center justify-center ml-52"><Star className="text-[#4f2cce] font-bold"/></div>) : null}
                      <CardContent className={data.title === "Growth" ? "text-white font-bold" : "text-gray"}>
                        <div className="flex  flex-col gap-3 items-center justify-center mb-4">
                          <h3 className="text-xl font-semibold">
                            {data.title}
                          </h3>
                          <h1 className="text-2xl font-bold">Rp. {data.price}</h1>
                        </div>
                        <ul className="space-y-2">
                        {data.benefits.map((item: any) => (
                          <li key={item.id} className={data.title === "Growth" ? "flex items-center text-sm text-[#d4d3d3]" : "flex items-center text-sm text-gray-600"}>
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {item.name}
                            </li>
                        ))}
                        </ul>
                      </CardContent>
                       <Button onClick={() => redirectToWhatsApp(data.paket, data.title) } className={data.title === "Premium" ? "bg-white text-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 flex flex-row gap-2 items-center justify-center" : "bg-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 text-white flex flex-row gap-2 items-center justify-center"}><BsWhatsapp/> Order Sekarang</Button>
                    </Card>
                      </div>
                    ))}

                  </div>
                </div>
              </TabsContent>

              <TabsContent value="artikel-blog" className="mt-8">
                <div className="max-w-6xl mx-auto">

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                     {articleBlogData.map((data: any) => (
                      <div key={data.id} className="mt-40">
                         <Card className={data.title === "Growth" ? "bg-[#4f2cce] scale-y-110" : "bg-white shadow-lg"}>
                          {data.title === "Growth" ? (<div className="bg-white rounded-full p-4 w-12 h-10 flex items-center justify-center ml-52"><Star className="text-[#4f2cce] font-bold"/></div>) : null}
                      <CardContent className={data.title === "Growth" ? "text-white font-bold" : "text-gray"}>
                        <div className="flex  flex-col gap-3 items-center justify-center mb-4">
                          <h3 className="text-xl font-semibold">
                            {data.title}
                          </h3>
                          <h1 className="text-2xl font-bold">Rp. {data.price}</h1>
                        </div>
                        <ul className="space-y-2">
                        {data.benefits.map((item: any) => (
                          <li key={item.id} className={data.title === "Growth" ? "flex items-center text-sm text-[#d4d3d3]" : "flex items-center text-sm text-gray-600"}>
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            {item.name}
                            </li>
                        ))}
                        </ul>
                      </CardContent>
                      <Button onClick={() => redirectToWhatsApp(data.paket, data.title) } className={data.title === "Premium" ? "bg-white text-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 flex flex-row gap-2 items-center justify-center" : "bg-[#4f2cce] font-semibold p-2 w-full max-w-52 h-auto rounded-2xl ml-8 text-white flex flex-row gap-2 items-center justify-center"}><BsWhatsapp/> Order Sekarang</Button>
                    </Card>
                      </div>
                    ))}
                  </div>

                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
