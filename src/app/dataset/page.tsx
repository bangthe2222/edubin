import Image from 'next/image'
import "./styles.css"

export default function Home() {
  return (
    <div className="">
      <div className=' flex justify-center'>
        <div className=' w-[90%] '> 
        {/* content */}
          <div className=' p-2 text-lg font-bold'>
            <p>Our Deep Learning model can classify seven types of trash with impressive accuracy. Trained on a dataset of 100,000 images, it distinguishes between:</p>
          </div>
          <div className=' p-2 text-lg'>
            <p>1/ Plastic bottles.</p>
            <p>2/ Aluminum cans.</p>
            <p>3/ Latex cups.</p>
            <p>4/ Paper - Cardboard.</p>
            <p>5/ Paper cups.</p>
            <p>6/ Milk cartons.</p>
            <p>7/ Styrofoam boxes.</p>
          </div>

        {/* image */}

        {/* Classify Block */}
        <div className=' text-lg'>
          <p className=' p-2 font-bold'>Clasification:</p>

          <div className=' grid grid-cols-1 lg:grid-cols-4 '>
            <div className=' image-container'>
            <Image
                    src="/dataset/classification/ALU.png"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/classification/GLASS.png"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/classification/MILKBOX.png"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/classification/PET.png"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

          </div>
        </div>
        {/* End Classify Block */}

        {/* Detection Block */}
        <div className=' text-lg'>
          <p className=' p-2 font-bold'>Object Detection:</p>
          <div className=' grid grid-cols-1 lg:grid-cols-4 '>
            <div className=' image-container'>
            <Image
                    src="/dataset/objectdetection/ALU.jpg"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/objectdetection/GLASS.jpg"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/objectdetection/MILKBOX.jpg"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

            <div className=' image-container'>
            <Image
                    src="/dataset/objectdetection/PET.jpg"
                    width="200"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>

          </div>
        </div>
        {/* End Detection Block */}

         {/* Segmentation Block */}
         {/* <div className=' text-lg'>
          <p className=' p-2 font-bold'>Segmentation:</p>

        </div> */}
        {/* End Segmentation Block */}
        </div>
      </div>
    </div>
  )
}
