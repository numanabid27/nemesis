"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/common/assets/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";


export default function Nav() {
  const pathname = usePathname();
  useEffect(()=>{

  }, [pathname])
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      name:"Home", 
      url:"/"
    },
    {
      name:"Game Features", 
      url:"/game-features"
    },
    {
      name:"Game Description", 
      url:"/game-description"
    },
    {
      name:"Media", 
      url:"/media"
    },
    {
      name:"About Us", 
      url:"/about-us"
    },
    {
      name:"Content & Playstation Partner Pitch", 
      url:"/palystation-paterner-pitch"
    },
    {
      name:"Conquistador", 
      url:"/conquistador"
    },

  ]
  return (
    <div className='flex container items-center justify-between'>
        <div className='w-[25%]'>
            <Image src={logo} alt="" className='w-[90px]' />
        </div>
        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className='text-white' size={30} />
        </div>
        <div className={`absolute z-[99] top-[88px] left-0 w-full bg-[#1e1f22] shadow-md lg:static lg:w-auto lg:bg-transparent lg:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"} lg:flex`}>
          <ul className="flex flex-col lg:flex-row gap-5 p-5 lg:p-0">
              {
                data?.map((item, i)=>{
                  const isActive = pathname === item.url;
                  return(
                    <li className={`${isActive  ? "active" : ""} second-heading relative w-fit`} key={i.toString()} onClick={() => setIsOpen(false)}>
                      <Link href={`${item.url}`}>{item.name}</Link>
                    </li>
                  )
                })
              }
                
           
            </ul>
        </div>
    </div>
  )
}
