"use client"
import Image from 'next/image'
import Link from 'next/link'
import "./styles.css"
import {AiOutlineCopyright} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {GrInstagram, GrMailOption} from "react-icons/gr"

export default function Footer() {
  return (
    <main className=' bg-neutral-950 bg-opacity-100 flex justify-center'>
        <div className=' flex flex-wrap  text-white w-[90%]'>
            <div className=' basis-1/3 '>
                <div className=' text-white'> 
                    <p className=' p-1 text-xl'>EduBin</p>
                </div>
                <div className=' flex '>
                    <div className=' footer-child'>
                        <Link href={"https://www.facebook.com/profile.php?id=100092505009314"}>
                            <BsFacebook size={20} ></BsFacebook>
                        </Link>
                    </div>
                    <div className=' footer-child'>
                        <Link href={"https://www.instagram.com/edubin_e/"}>
                            <GrInstagram size={20}></GrInstagram>
                        </Link>
                    </div>
                    <div className=' footer-child'>

                    </div>
                </div>
                <div>
                    <div className=' item-footer'>
                        <p className=' font-bold mr-1'>Email:</p><p>edubin.greentech@gmail.com</p>
                    </div>
                    <div className=' item-footer'>
                        <p className=' font-bold mr-1'>Phone:</p><p>0902821643(Ms. Truc)</p>
                    </div>
                    <div className=' item-footer'>
                        <p className=' font-bold mr-1'>Adress:</p><p>279 Nguyen Tri Phuong Street Distric 10, Ho Chi Minh City</p>
                    </div>
                    <div className=' item-footer'>
                        <p>Thank you for your interest!</p>
                    </div>
                </div>
       
            </div>
            <div className=' flex basis-1/3 justify-center'>
                <div className=' flex m-2 items-end'>
                    <div className=''>
                        <AiOutlineCopyright size={20}></AiOutlineCopyright>
                    </div>
                    <p>
                        2023 EduBin
                    </p>
                </div>
   
            </div>
            <div className='basis-1/3' >

            </div>
        </div>
    </main>
  )
}
