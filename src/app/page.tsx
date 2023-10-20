"use client"
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}
export default function Home() {

  return (
    <main className=" w-full">
      <div className=' w-full flex justify-center '>

        <video className="w-[90%]  rounded-lg mt-4 h-auto hidden lg:block" src={"/video.mp4"} autoPlay  muted></video>
        <Image
            src="/video.gif"
            width="400"
            height="0"
            alt="video"
            className=' w-[90%]  rounded-lg mt-4 h-auto lg:hidden'
          />
      </div>
      <div className=' w-full flex justify-center text-center mt-5'>
        <div className='w-[90%] bg-neutral-950 rounded-lg text-neutral-100'>
        <p className=' text-3xl lg:text-5xl mt-10 mb-10 ml-5 mr-5'> EduBin - Bigger Waste Dataset, Better Sustainable Solutions </p>
        </div>
        
      </div>
        
    </main>
  )
}
