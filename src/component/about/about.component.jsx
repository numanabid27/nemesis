import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import logo from "@/common/assets/logo.webp"
import Image from 'next/image'

export default function AboutComponent() {
  return (
    <>
        <div className="banner relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 h-fit m-auto">
                <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center max-w-[900px] mx-auto">Introduction to Nemesis Gaming Studios</h2>  
            </div>
            <div className="bottom-[29px] absolute right-0 left-0 botton-[25px]">
                <p className="text-center second-heading text-[18px] pb-[10px]">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-white animate-bounce-down cursor-pointer text-center text-3xl block w-full" />
                </Link>
            </div>
        </div>

        <div className='flex items-start container md:flex-row flex-col'>
            <div className='md:w-[70%] w-full'>
                <div className='container my-9'>
                    <h2 className="second-heading text-[24px] md:text-[52px] font-semibold">Studio Overview</h2> 
                    <h6 className="!leading-[1.6] second-heading md:text-[20px] text-base font-medium">
                        Nemesis Gaming Studios is a bold, visionary game development studio dedicated to crafting
                        immersive, high-quality experiences that push the boundaries of storytelling, world-building, and
                        gameplay innovation. Our focus is on cinematic, AI-driven, and player-choice-driven games that
                        create living, breathing worlds where every decision matters.
                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="second-heading text-[24px] md:text-[52px] font-semibold">Mission Statement</h2> 
                    <h6 className="!leading-[1.6] second-heading md:text-[20px] text-base font-medium">
                        To forge groundbreaking interactive experiences where players shape the world, command
                        their destiny, and leave a lasting impact. We create dynamic, emergent gameplay that redefines
                        storytelling, delivering unforgettable adventures for the next generation of gamers.

                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="second-heading text-[24px] md:text-[52px] font-semibold">Game Philosphy</h2> 
                    <h6 className="!leading-[1.6] second-heading md:text-[20px] text-base font-medium">
                    Cinematic storytelling, AI-driven worlds, and player choice mechanics.

                    </h6>
                </div>

                <div className='container my-9'>
                    <h2 className="second-heading text-[24px] md:text-[52px] font-semibold">Contact Information</h2> 
                    <h6 className="!leading-[1.6]  md:text-[20px] font-medium text-base">
                        <span className='second-heading'>For press, investors, and PlayStation Partners -</span>
                        <Link href="mailto:lawrence@nemesisgamingstudios.com " className='text-white'> lawrence@nemesisgamingstudios.com</Link>

                    </h6>
                </div>
            </div>
            <div className='md:w-[30%] w-full'>
                <Image src={logo} alt="" className='' />
            </div>
        </div>

       
    </>
  )
}
