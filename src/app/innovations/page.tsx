import Image from 'next/image'
import "./styles.css"
export default function Home() {
  return (
    <div className="">
      <div className=' flex justify-center mt-1'>
        <div className=' w-[90%]  rounded-lg  p-4'>
          <div className=' text-4xl font-bold mb-4 '>
            <p>TRASHSCAN</p>
          </div>
          <div className=' text-lg bg-neutral-950 text-white p-2 rounded-lg'>
            <p className=' font-bold'>TrashScan, a pioneering product from EduBin.</p>
            <br />
            <p>
            TrashScan is a tool designed to help people raise awareness about waste sorting by scanning trash. It is a plug-in device that is placed next to a trash bin, which uses AI/Computer Vision technology to identify different types of waste in real-time and instruct users on the proper way to dispose of them.
            </p>
            <br />
            <p>
            With TrashScan, EduBin aims to empower individuals to play an active role in reducing waste and contributing to a more sustainable future.
            </p>
          </div>
          <br />
          <div className=' p-2'>
            <p className=' text-lg font-bold'>FEATURE OF TRASHSCAN</p>
            <p className=' text-title'>Voice instructions:</p><p className=' text-infor'>TrashScan provides voice instructions on how to properly sort and dispose of different types of waste.</p>
            <p className=' text-title'>Screen display:</p><p className=' text-infor'>The device has a screen display that shows visual instructions on how to sort waste.</p>
            <p className=' text-title'>Camera scanner:</p><p className=' text-infor'>TrashScan has a camera scanner that can identify and categorize different types of waste.</p>
            <p className=' text-title'>Education:</p><p className=' text-infor'>TrashScan aims to educate individuals about proper waste sorting and disposal, making it accessible to everyone regardless of their level of knowledge or experience.</p>
          </div>
          <div className=' '>
            <p className=' text-lg p-2 font-bold '>We've developed three versions of TrashScan, each better than the last, as part of our ongoing efforts to enhance waste management solutions</p>
            
            {/* Ver 1 */}
            <div className=' bg-neutral-950 text-white p-4 rounded-lg mt-10'>
              <p className=' text-lg  font-bold'>Version 1</p>
              <div className=' grid lg:grid-cols-4 grid-cols-2'>
                <div className='member-infor'>
                  <Image
                    src="/innovation/TRASHSCAN/ver_1/img1.JPEG"
                    width="600"
                    height="400"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
                </div>
                <div className='member-infor'>
                  <Image
                      src="/innovation/TRASHSCAN/ver_1/img2.JPEG"
                      width="600"
                      height="400"
                      alt="Picture of the author"
                      className=' image-inside'
                    />

                </div>
                <div className='member-infor'>
                  <Image
                      src="/innovation/TRASHSCAN/ver_1/img3.JPEG"
                      width="600"
                      height="400"
                      alt="Picture of the author"
                      className=' image-inside'
                    />
                </div>
                <div className='member-infor'>
                  <Image
                      src="/innovation/TRASHSCAN/ver_1/img4.JPEG"
                      width="600"
                      height="400"
                      alt="Picture of the author"
                      className=' image-inside'
                    />
                </div>
              </div>
            </div>

            {/* Ver 2 */}
            <div>
              <div className=' bg-neutral-950 text-white p-4 rounded-lg mt-10'>
                <p className=' text-lg  font-bold'>Version 2</p>
                <div className=' grid lg:grid-cols-2 grid-cols-1'>
                  <div className='member-infor'>
                    <Image
                      src="/innovation/TRASHSCAN/ver_2/img_1.png"
                      width="600"
                      height="400"
                      alt="Picture of the author"
                      className=' image-inside'
                    />
                  </div>
                  <div className='member-infor'>
                    <Image
                        src="/innovation/TRASHSCAN/ver_2/img_2.JPG"
                        width="600"
                        height="400"
                        alt="Picture of the author"
                        className=' image-inside'
                      />

                  </div>
                  
                </div>
              </div>
            </div>

            {/* Ver 3 */}
            <div className=' bg-neutral-950 text-white p-4 rounded-lg mt-10'>
              <p className=' text-lg  font-bold'>Version 3</p>
              <div className=' grid lg:grid-cols-2 grid-cols-1'>
                <div className='member-infor'>
                  <Image
                    src="/innovation/TRASHSCAN/ver_3/img_1.png"
                    width="600"
                    height="400"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
                </div>
                <div className='member-infor'>
                  <Image
                      src="/innovation/TRASHSCAN/ver_3/img_2.jpg"
                      width="600"
                      height="400"
                      alt="Picture of the author"
                      className=' image-inside'
                    />

                </div>
                
              </div>
            </div>

            {/* End TrashScan */}
          </div>

          <div className=' text-4xl font-bold mb-4 mt-10'>
              <p>SMARTBIN</p>
          </div> 
          <div className=' text-lg bg-neutral-950 text-white p-2 rounded-lg'>
            <p className=' font-bold'>SmartBin: It's not just an idea; it's the future of waste management.</p>
            <br />
            <p>
            While in the conceptual phase, we've created a 3D image that represents our vision for this groundbreaking innovation. Stay tuned as we work towards bringing SmartBin to life and revolutionizing waste collection with advanced technology
            </p>
            <br />
          </div>
          <div className=' grid lg:grid-cols-1 grid-cols-1'>
                <div className='member-infor'>
                  <Image
                    src="/innovation/Smartbin/image.gif"
                    width="600"
                    height="400"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
                </div>
                
              </div>
        </div>
        
          
        
      </div>
    </div>
  )
}
