"use client"
import Image from 'next/image'
import Link from 'next/link'
import "./styles.css"
import {FiMenu} from "react-icons/fi"
import {useState} from "react"
import {AiOutlineCloseCircle} from "react-icons/ai"
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className=' bg-neutral-950 bg-opacity-100'>
      <nav className=" flex"> 
        <div className=' nav-child'>
          <Link href={"/"}>
            <Image
            src="/edubin_logo.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
          </Link>
  
        </div>
        <div  className='lg:flex flex-wrap grow justify-end hidden'>
          <div className=' nav-child'>
              <Link href={"/about"}>About us</Link>
            </div>
            <div className=' nav-child'>
              <Link href={"/services"}>Services</Link>
            </div>
            <div className=' nav-child'>
              <Link href={"/dataset"}>Waste Image Dataset </Link>
            </div>
            <div className=' nav-child'>
              <Link href={"/innovations"}>Inovations</Link>
            </div>
            <div className=' nav-child'>
              <Link href={"/demo"}>Demo</Link>
            </div>
            <div className=' nav-child'>
              <Link href={"/contact"}>Contact us</Link>
            </div>
        </div>
          
          <div onClick={toggleMenu}  className=' flex grow justify-end nav-child lg:hidden '>
                <FiMenu size={30}></FiMenu>
          </div>    
      </nav>
      { menuOpen&&(<div>
          <div  className=' bg-neutral-950 lg:hidden fixed right-0 top-0 bottom-0 h-full z-10'>
            <div className=' text-white' onClick={toggleMenu}>
              <div className=' p-2 flex justify-end hover:cursor-pointer'>
                <AiOutlineCloseCircle size={30} color={"#ff4d4d"}></AiOutlineCloseCircle>
              </div>
            </div>
            <div className=' nav-child' onClick={toggleMenu}>
                <Link href={"/about"}  >About us</Link>
              </div>
              <div className=' nav-child' onClick={toggleMenu}>
                <Link href={"/services"}>Services</Link>
              </div>
              <div className=' nav-child' onClick={toggleMenu}>
                <Link href={"/dataset"}>Waste Image Dataset </Link>
              </div>
              <div className=' nav-child' onClick={toggleMenu}>
                <Link href={"/innovations"}>Inovations</Link>
              </div>
              <div className=' nav-child'>
                <Link href={"/demo"}>Demo</Link>
              </div>
              <div className=' nav-child' onClick={toggleMenu}>
                <Link href={"/contact"}>Contact us</Link>
              </div>
          </div>

        </div>)}
    </main>
  )
}
