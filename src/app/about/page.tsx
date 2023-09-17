import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <div className=' flex justify-center'>
        <div className=' w-[90%] text-lg mt-10 bg-neutral-950 text-white p-5 rounded-lg'>
          <p>
          At EduBin, we began our journey with a commitment to innovation and sustainability, driving us to create the world's most extensive waste dataset. Our story started at the UEH BizTech Hackathon and continued with nurturing support from the UII Startup Incubator.
          </p>
          <br />
          <p>
          Our aspiration is to become the leading provider of waste datasets while offering sustainable solutions for a cleaner, greener future. We are dedicated to empowering individuals, businesses, and organizations with data-driven insights capable of reshaping waste management practices and minimizing environmental impact
          </p>
        </div>
      </div>
      <div className=' flex justify-center'>
        <div className=' w-[90%] flex flex-wrap'>
          <div className=' image-container'>
            <Image
              src="/about/ueh_biztech.jpg"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/UEH_incubator.jpg"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside '
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/team_work.jpg"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/YL_2023.JPG"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/showcase.JPG"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/BK_inno.JPG"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
          <div className=' image-container'>
            <Image
              src="/about/BK_inno_2.JPG"
              width="600"
              height="0"
              style={ {width: "100%", height: "auto" }}
              alt="Picture of the author"
              className=' image-inside'
            />
          </div>
        </div>
          
      </div>
    </div>
  )
}
