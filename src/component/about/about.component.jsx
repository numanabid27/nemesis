import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import logo from "@/common/assets/logo.webp"
import Image from 'next/image'

export default function AboutComponent() {
  return (
    <>
        <div className="banner relative">
            <div className="h-fit m-auto absolute bottom-0 left-[16px] right-[16px] top-0">
                <h2 className="text-[24px] text-center font-semibold max-w-[900px] md:text-[52px] mx-auto second-heading">Introduction to Nemesis Gaming Studios</h2>  
            </div>
            <div className="absolute bottom-[29px] botton-[25px] left-0 right-0">
                <p className="text-[18px] text-center pb-[10px] second-heading">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-3xl text-center text-white w-full animate-bounce-down block cursor-pointer" />
                </Link>
            </div>
        </div>

        <div className='container flex flex-col items-start md:flex-row'>
            <div className='w-full md:w-[70%]'>
                <div className='container my-9'>
                    <h2 className="text-[24px] font-semibold md:text-[52px] second-heading">Studio Overview</h2> 
                    <h6 className="text-base !leading-[1.6] font-medium md:text-[20px] second-heading">
                        Nemesis Gaming Studios is a bold, visionary game development studio dedicated to crafting
                        immersive, high-quality experiences that push the boundaries of storytelling, world-building, and
                        gameplay innovation. Our focus is on cinematic, AI-driven, and player-choice-driven games that
                        create living, breathing worlds where every decision matters.
                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="text-[24px] font-semibold md:text-[52px] second-heading">Mission Statement</h2> 
                    <h6 className="text-base !leading-[1.6] font-medium md:text-[20px] second-heading">
                        To forge groundbreaking interactive experiences where players shape the world, command
                        their destiny, and leave a lasting impact. We create dynamic, emergent gameplay that redefines
                        storytelling, delivering unforgettable adventures for the next generation of gamers.

                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="text-[24px] font-semibold md:text-[52px] second-heading">Game Philosphy</h2> 
                    <h6 className="text-base !leading-[1.6] font-medium md:text-[20px] second-heading">
                    Cinematic storytelling, AI-driven worlds, and player choice mechanics.

                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="text-[24px] font-semibold md:text-[52px] second-heading">Contact Information</h2> 
                    <h6 className="text-base !leading-[1.6] font-medium md:text-[20px]">
                        <span className='second-heading'>For press, investors, and PlayStation Partners -</span>
                        <Link href="mailto:lawrence@nemesisgamingstudios.com " className='text-white'> lawrence@nemesisgamingstudios.com</Link>

                    </h6>
                </div>
            </div>
            <div className='w-full md:w-[30%]'>
                <Image src={logo} alt="" className='' />
            </div>
        </div>

       
    </>
  )
}
