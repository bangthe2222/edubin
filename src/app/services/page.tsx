import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className=' flex justify-center flex-wrap text-white text-2xl'>

        <div className=' flex flex-wrap w-[90%] bg-neutral-950 rounded-lg mt-10'>
          <div className=' lg:basis-1/2'>
            <p className=' p-4'>
            Comprehensive Waste Data: Access the world's largest dataset on waste, providing valuable insights for informed decision-making.
            </p>
          </div>
          <div className=' lg:basis-1/2'>
            <Image
              src="/edubin_logo.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className=' flex flex-wrap-reverse w-[90%] bg-neutral-950 rounded-lg mt-10'>
          <div className=' lg:basis-1/2'>
            <Image
              src="/edubin_logo.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className=' lg:basis-1/2'>
            <p className=' p-4'>
            Sustainable Solutions: Discover innovative solutions to make your waste management processes smarter and more environmentally friendly.
            </p>
          </div>

        </div>

        <div className=' flex flex-wrap w-[90%] bg-neutral-950 rounded-lg mt-10'>
          <div className=' lg:basis-1/2'>
            <p className=' p-4'>
            Comprehensive Waste Data: Access the world's largest dataset on waste, providing valuable insights for informed decision-making.
            </p>
          </div>
          <div className=' lg:basis-1/2'>
            <Image
              src="/edubin_logo.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>

      </div>
    </main>
  )
}
