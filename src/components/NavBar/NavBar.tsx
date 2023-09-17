"use client"
import Image from 'next/image'
import Link from 'next/link'
import "./styles.css"
import {FiMenu} from "react-icons/fi"
import {useState} from "react"
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
              <Link href={"/contact"}>Contact us</Link>
            </div>
        </div>
          
          <div onClick={toggleMenu}  className=' flex grow justify-end nav-child lg:hidden '>
                <FiMenu></FiMenu>
          </div>

        { menuOpen&&(<div>
          <div  className='flex flex-wrap grow justify-end lg:hidden'>
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
                <Link href={"/contact"}>Contact us</Link>
              </div>
          </div>

        </div>)}
          
      </nav>
    </main>
  )
}
