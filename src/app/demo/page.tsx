"use client"
import { useState, ChangeEvent } from 'react';


export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>("/edubin_logo.png");
  const [objectClass, setObjectClass] = useState("");
  const [probability, setProbability] = useState(0.0);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
        
    

    }
  };

  const UpLoadImage = async () =>{
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
        setObjectClass(class_);
        setProbability(acc_);
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
            <h2 className="text-lg font-bold mb-2">Selected Image:</h2>
            <div className=' flex justify-center'>  
              <div className=' grid'>
              <img src={selectedImage} alt="Selected" className="max-w-xs" />
              <p>Class: {objectClass}</p>
              <p>Prob: {probability}</p>
              
              </div>
            </div>
          </div>
        )}

        <input className=' p-2 m-2' accept="image/*" type="file" onChange={handleImageUpload} />
        <div className=' flex w-full justify-center'>
          <button className=' p-2 rounded-md hover:bg-slate-100 hover:text-neutral-900 w-fit' onClick={UpLoadImage}>Upload</button>
        </div>
        
      </div>

    </div>
  );
}