import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChartNoAxesCombined } from "lucide-react";

const feedbacks = [
  {
    name: "Ahmad Santoso",
    role: "Owner Teknisinect",
    feedback:
      "Awalnya ragu, tapi ternyata hasilnya oke banget. Proses juga cepet, nggak ribet.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Marketing Citra Media",
    feedback:
      "Anak-anak timnya asik, gampang diajak diskusi. Ide-idenya fresh, bikin campaign kita jalan lancar.",
  },
  {
    name: "Budi Prasetyo",
    role: "Owner Beauty & Nails Salon",
    feedback:
      "Yang gua suka, mereka dengerin kebutuhan gua dulu baru kasih solusi. Nggak asal-asalan.",
  },
  {
    name: "Dewi Lestari",
    role: "UI/UX Designer",
    feedback:
      "Desainnya cakep banget, sesuai sama brief. Revisi juga ditanggepin cepet.",
  },
  {
    name: "Rizky Ramadhan",
    role: "Digital-Marketing DigiSky Agency",
    feedback:
      "Secara teknis solid lah. Performanya naik setelah pake solusi mereka.",
  },
  {
    name: "Putri Maharani",
    role: "Owner Coffee&Chill Cafe",
    feedback:
      "Mereka sabar banget jelasin step-stepnya, padahal gua awam. Salut sih.",
  },
  {
    name: "Andi Wijaya",
    role: "Owner Sneakers.co",
    feedback:
      "Bisa diandalkan. Nggak cuma janji, tapi beneran deliver hasil sesuai timeline. dan Yang paling gua suka tuh bukan hanya sesuai timeline, tapi juga budget dan performa nya sangat memuaskan.",
  },
];


const FeedbackClient = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <div className="flex flex-col gap-3 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h2>
        <h5 className="text-lg font-semibold text-center mb-6">Jangan hanya percaya pada kata-kata kami. Berikut ini adalah testimoni dari klien-klien luar biasa kami tentang pengalaman transformatif mereka bekerja sama dengan kami.</h5>
        <span className="text-sm font-semibold flex items-center justify-center gap-2  mb-6"><ChartNoAxesCombined /> 98% Tingkat Kepuasan | ⭐ 4.9/5 Rating</span>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {feedbacks.map((item, index) => (
            <CarouselItem key={index} className="p-4 md:basis-1/3">
              <Card className="rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">{item.feedback}</p>
                </CardContent>
                <CardFooter className="flex justify-end text-sm text-gray-500">
                  ⭐⭐⭐⭐⭐
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeedbackClient;
