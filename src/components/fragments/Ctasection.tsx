import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IPhoneXRMockup } from "../iphone-mockup";
import { CheckCheck, ChevronsDown } from "lucide-react";

const CtaSection = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row-reverse text-[#f1f1f1] justify-between">
      <div className="md:p-8 p-2">
        <h2 className="text-[#f1f1f1] text-lg md:text-4xl font-bold text-start w-2xs md:w-2xl">
          Kenapa sih harus <span className="underline underline-offset-4 decoration-[#4f2cce]">Jasawebsite.dev</span> ?? ini Benefits yang akan Client
          terima:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          {/* point 1 */}
          <Collapsible className="mt-4 p-8">
            <CollapsibleTrigger className="md:text-xl text-sm cursor-pointer font-bold flex flex-row-reverse items-center justify-center gap-2">
              <ChevronsDown /> Aplikasi Responsif & UI Modern{" "}
              <CheckCheck className=" text-green-700 font-bold w-6 h-auto" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-xs w-2xs md:text-sm">
              Kami Mengutamakan User Experience, sehingga Aplikasi yang kami
              buat memiliki tampilan yang menarik dan mudah digunakan di
              berbagai perangkat. dan Membuat Perusahaan Anda Terlihat Lebih
              Profesional di Mata Klien.
            </CollapsibleContent>
          </Collapsible>
          {/* point 2 */}
          <Collapsible className="mt-4 p-8">
            <CollapsibleTrigger className="md:text-xl cursor-pointer text-sm font-bold flex flex-row-reverse items-center justify-center gap-2">
              <ChevronsDown /> High Performance & Scalable{" "}
              <CheckCheck className=" text-green-700 font-bold w-6 h-auto" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-xs w-2xs md:text-sm">
              Selain Kami mengutamakn User Exprerience, Kami juga mengutamakan
              Performa Aplikasi, sehingga Aplikasi yang kami buat memiliki
              performa yang cepat dan dapat diandalkan. Kami juga memastikan
              Aplikasi yang kami buat dapat dengan mudah di skalakan sesuai
              dengan kebutuhan bisnis Anda.
            </CollapsibleContent>
          </Collapsible>
          {/* point 3 */}
          <Collapsible className="mt-4 p-8">
            <CollapsibleTrigger className="md:text-xl cursor-pointer text-sm font-bold flex flex-row-reverse items-center justify-center gap-2">
              <ChevronsDown /> Keamanan Terjamin 100%{" "}
              <CheckCheck className=" text-green-700 font-bold w-6 h-auto" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-xs w-2xs md:text-sm">
              Kami sangat memperhatikan aspek keamanan dalam setiap aplikasi
              yang kami buat. Kami menerapkan praktik keamanan terbaik untuk
              melindungi data dan informasi sensitif perushaan Anda dari ancaman
              cyber.
            </CollapsibleContent>
          </Collapsible>
          {/* point 4 */}
          <Collapsible className="mt-4 p-8">
            <CollapsibleTrigger className="md:text-xl cursor-pointer text-sm font-bold flex flex-row-reverse items-center justify-center gap-2">
              <ChevronsDown /> SEO-Friendly{" "}
              <CheckCheck className=" text-green-700 font-bold w-6 h-auto" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-xs w-2xs md:text-sm">
              Kami memahami pentingnya visibilitas online untuk bisnis Anda.
              Oleh karena itu, kami mengembangkan aplikasi yang dioptimalkan
              untuk mesin pencari (SEO), sehingga membantu meningkatkan peringkat
              situs web Anda di hasil pencarian dan menarik lebih banyak
              pengunjung.
            </CollapsibleContent>
          </Collapsible>
          {/* point 5 */}
          <Collapsible className="mt-4 p-8">
            <CollapsibleTrigger className="md:text-xl cursor-pointer text-sm font-bold flex flex-row-reverse items-center justify-center gap-2">
              <ChevronsDown /> Support & Maintenance{" "}
              <CheckCheck className=" text-green-700 font-bold w-6 h-auto" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 text-xs w-2xs md:text-sm">
              Kami tidak hanya berhenti setelah build aplikasi, kami memberikan
              dukungan berkelanjutan dan layanan pemeliharaan untuk memastikan
              aplikasi Anda tetap berjalan dengan lancar dan diperbarui dengan
              teknologi terbaru.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div>
        <IPhoneXRMockup />
      </div>
    </div>
  );
};

export default CtaSection;
