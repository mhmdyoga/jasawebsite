"use client"
import { Code2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutFreelancer = () => {

    const router = useRouter();
  return (
    <div className='flex flex-col-reverse md:flex-row  gap-20 md:gap-40 justify-center items-center bg-black'>
        <div className='flex flex-col gap-3 md:gap-5'>
          <h2 className='text-[#4F2CCE] font-bold text-4xl w-3xs md:w-3xl text-start'>Hi, Saya Muhamad Yoga Seorang Software Developer and UI/UX Designer di Jasawebsite.dev</h2>
          <h4 className='text-[#B8B5B5] font-bold text-lg w-2xs md:w-2xl text-start'>Saya Muhamad Yoga yang berpengalaman dibidang Website dan Design selama +4tahun dan saya telah membuat puluhan project yang berkualitas dan scalable.</h4>
           <button onClick={() => router.push('https://mhmdyoga.vercel.app/')} className="mt-6 px-6 py-3 text-start text-xs w-[200px] flex flex-row gap-2 bg-white/10 border border-white/20 text-white rounded-xl shadow-md hover:bg-white/20 transition cursor-pointer">
           <Code2Icon className='w-4 h-auto'/>  Portofolio Freelancer
          </button>
        </div>
        <div className=''>
         <Image src="/foto-diri 2.png" alt="profile" width={1800} height={800} className='rounded-lg w-[350px] h-auto'/>
        </div>
    </div>
  )
}

export default AboutFreelancer