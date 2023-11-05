"use client"
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Loading from '@/components/Loading/Loading';
import {CgSpinner} from "react-icons/cg"

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>("/edubin_logo.png");
  const [objectClass, setObjectClass] = useState("");
  const [probability, setProbability] = useState(0.0);
  const [isLoading, setLoading] = useState(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setProbability(0.0);
    setObjectClass("");
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
        
    }
    UpLoadImage();
  };

  const UpLoadImage = async () =>{
    setLoading(true)
    try {

      const response = await fetch("/api/upload_image", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',

        },
        body: JSON.stringify({
          data : selectedImage
        }) ,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');

        const data_ = await response.json();
        
        const class_ = data_["predictions"][0]["tagName"];
        const acc_ = data_["predictions"][0]["probability"];
        
        setLoading(false);
        setProbability(acc_);
        setObjectClass(class_);
        // console.log(class_, acc_)
        
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  return (
    <div className=' flex justify-center '>
    
      <div className=' max-w-[90%] grid text-center mt-32 mb-32 bg-neutral-900 text-neutral-300 text-xl p-1 lg:p-10 rounded-xl'>
        <h1>Image Upload</h1>
        {selectedImage && (
          <div>
            {/* <h2 className="text-lg font-bold mb-2">Selected Image:</h2> */}
            <div className=' flex justify-center'>  
              <div className=' grid'>
                <div className=' flex justify-center max-w-full mb-2'>
                  <Image
                  src={selectedImage}
                  width="200"
                  height="0"
                  alt="edubin-logo"
                  className=' rounded-lg mt-4 h-auto '
                  />
               
                </div>

              
              {
                isLoading?(
                <div className=" flex justify-center content-center" >
                  <svg className=' animate-spin'  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>
                  Processing...
                </div>
                ):(
                  <div>
                    <p>Class: {objectClass}</p>
                    <p>Prob: {probability}</p>
                  </div>
                )

              }
              

              <div className=' flex justify-center w-full'>
                <input className=' p-2 m-2 w-[80%]' accept="image/*" type="file" onChange={handleImageUpload}  />
              </div>
              
              {/* <div className=' flex w-full justify-center'>
                <button className=' p-2 rounded-md hover:bg-slate-100 hover:text-neutral-900 w-fit' onClick={UpLoadImage}>Upload</button>
              </div> */}
              </div>
            </div>
          </div>
        )}

        
        
      </div>

    </div>
  );
}