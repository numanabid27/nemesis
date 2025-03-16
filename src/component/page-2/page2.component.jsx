import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import concept6 from "@/common/assets/concept-6.webp"
import concept7 from "@/common/assets/concept-7.webp"
import concept8 from "@/common/assets/concept-8.webp"
import Image from 'next/image'

export default function Page2component() {
  return (
    <>
        <div className="banner relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 h-fit m-auto">
                <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center max-w-[900px] mx-auto">A Mythological Open-World RPG of Conquest & Destiny. </h2>
                
            </div>
            <div className="bottom-[29px] absolute right-0 left-0 botton-[25px]">
                <p className="text-center second-heading text-[18px] pb-[10px]">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-white animate-bounce-down cursor-pointer text-center text-3xl block w-full" />
                </Link>
            </div>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">Cinematic RPG Combat </h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>God of War-style melee, aerial battles, and large-scale faction 
            conflicts.</p>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">AI-Driven Factions & Allegiance System</h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>Every faction reacts to your rule—ally, resist, or 
            betray.</p>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">Dynamic Morality & Title System </h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>Your actions define how the world sees you—from ‘Child 
            of Light’ to ‘King of Darkness’.</p>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">World of Mythical Creatures & Extinct Beasts</h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>No humans—only legendary beings, ancient 
            deities, and lost creatures.</p>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">Seamless Open World </h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>Explore vast biomes without loading screens.</p>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center"> PS5-Exclusive Enhancements </h2>
            <p className='text-center second-heading text-[18px] pb-[10px]'>DualSense, Tempest 3D Audio, next-gen AI.</p>
        </div>

        <div className="container">
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={concept6} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={concept7}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={concept8} className="rounded-[8px]" alt="" />
                </div>
            </div>
            <div className='mt-7 mb-7'>
                <h6 className="!leading-[1.6] second-heading text-[20px] font-medium"> A next-gen open-world RPG where players become the Beast King, 
                ruling a world of mythological creatures.</h6>
                <ul className='mt-3'>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Mythological Open-World:</span>
                        <label className='second-heading'> Explore a world with no humans, only legendary creatures.</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Dynamic Morality & Kingdom System: </span>
                        <label className='second-heading'> Rule through diplomacy, fear, or balance</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Evolving Faction AI:</span>
                        <label className='second-heading'> Rival factions react dynamically to your choices. </label>
                    </li>
                    <li className='pb-4'>
                        <span className='!text-white font-medium'>Epic Cinematic Combat:</span>
                        <label className='second-heading'> Engage in duels, massive battles, and aerial combat.</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Replayability & Endgame:</span>
                        <label className='second-heading'> Every conquest shapes a unique world.</label>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
