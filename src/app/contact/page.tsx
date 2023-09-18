"use client"
import Image from 'next/image'
import { useState } from 'react';
import "./styles.css"

export default function Home() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirtNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/sendmail?name=${firstname+" "+ lastname}&phone=${phone}&email=${email}&message=${message}`,{
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: 'example' })})
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
    setPhone("");
    console.log(res);
  }
  return (
    <div className="">
      {/* Contact infor */}
      <div className=' flex justify-center mt-10'>
        <div className=' w-[90%] p-10 bg-neutral-950 text-white rounded-lg' >
          <div className=' text-5xl font-bold p-5'>
            <p>Contact</p>
          </div>
          <div className=' text-lg flex lg:text-2xl p-5 flex-wrap'>
            <p className=' mr-1'>Email us directly: </p><p>edubin.greentech@gmail.com</p>
          </div>

        </div>
      </div>

      {/* Member Infor */}
      <div className=' flex justify-center'>
        <div className=' w-[90%] text-3xl lg:text-5xl font-bold mt-10'>
          <p> Member </p>
        </div>

      </div>
      
      {/* Member Image */}
      <div className=' flex justify-center mt-10'>
        <div className=' w-[90%] grid lg:grid-cols-4 grid-cols-1'>
          <div>
            <div className='member-infor'>
            <Image
                  src="/contact/member/thien_truc.jpg"
                  width="400"
                  height="400"
                  alt="Picture of the author"
                  className=' image-inside'
                />
      
            </div>

            <div className='member-name'>
              <p>Thien Truc</p>
              
            </div>
            <div className='member-name'>
              <p>Cofounder - Head of Finance</p> 
            </div>    
          </div>

          <div>
            <div className='member-infor'>
              <Image
                    src="/contact/member/the_bang.jpg"
                    width="400"
                    height="400"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>
            <div className='member-name'>
              <p>The Bang</p>
              
            </div>
            <div className='member-name'>
              <p>Cofounder - Head of Technology</p> 
            </div>    
          
          </div>
         
          <div>
            <div className='member-infor'>
              <Image
                    src="/contact/member/khanh_duy.jpg"
                    width="400"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>
            <div className='member-name'>
              <p>Khanh Duy</p>
              
            </div>
            <div className='member-name'>
              <p>Cofounder - Head of Product</p> 
            </div>    
          </div>
          
          <div>
            <div className='member-infor'>
              <Image
                    src="/contact/member/phuong_thao.jpg"
                    width="400"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>
            <div className='member-name'>
              <p>Phuong Thao</p>
              
            </div>
            <div className='member-name'>
              <p>Cofounder - Head of Operation</p> 
            </div>
          </div>

          <div>
            <div className='member-infor'>
              <Image
                    src="/contact/member/van_trung.jpg"
                    width="400"
                    height="0"
                    alt="Picture of the author"
                    className=' image-inside'
                  />
            </div>
            <div className='member-name'>
              <p>Van Trung</p>
              
            </div>
            <div className='member-name'>
              <p>Member</p> 
            </div>
          </div>
            
        </div>
      </div>
      

     {/* Email form */}
      <div className=' flex justify-center mt-10'>
        <div className='  w-[90%]  text-xl'>
          <form action="" method="submit" onSubmit={handleSubmit}>
            {/* Email */}
            <label htmlFor="" className=' label' >Email:</label>
            <br />
            <input type="email" className=' input'  required onChange={ handleEmailChange} value={email}/>
            <br />
            {/* First Name */}
            <label htmlFor="" className=' label'>First Name:</label>
            <br />
            <input type="text" className=' input' required onChange={ handleFirtNameChange} value={firstname}/>
            <br />
            {/* Last Name */}
            <label htmlFor="" className=' label'>Last Name:</label>
            <br />
            <input type="text" className=' input' required onChange={handleLastNameChange} value={lastname}/>
            <br />
            {/* Phone Number */}
            <label htmlFor="" className=' label'>Phone Number:</label>
            <br />
            <input type="phone" className=' input' required onChange={handlePhoneChange} value={phone}/>
            <br />
            {/* Message */}
            <label htmlFor="" className=' label' >Message:</label>
            <br />
            <textarea  className=' input' required onChange={handleMessageChange} value={message}/>
            <br />

            <button type='submit' className=' bg-gray-900 text-white p-2 m-1 hover:text-black hover:bg-neutral-400 rounded-xl'> Submit</button>
          </form>
        </div>
      </div> 

    </div>
  )
}
