import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import showcase1 from "@/common/assets/concept-1.webp"
import showcase2 from "@/common/assets/ca9.PNG"
import showcase3 from "@/common/assets/showcase-3.PNG"
import showcase4 from "@/common/assets/showcase4.PNG"
import showcase5 from "@/common/assets/showcase5.PNG"
import showcase6 from "@/common/assets/showcase6.PNG"
import showcase7 from "@/common/assets/showcase7.PNG"
import Image from 'next/image'

export default function ConquidatorComponent() {
  return (
    <>
        <div className="banner2 relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 h-fit m-auto">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold text-center max-w-[900px] mx-auto">Overview the upcoming historical RPG</h2>
                
            </div>
            <div className="bottom-[29px] absolute right-0 left-0 botton-[25px]">
                <p className="text-center second-heading text-[18px] pb-[10px]">Explore the Conquistador.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-white animate-bounce-down cursor-pointer text-center text-3xl block w-full" />
                </Link>
            </div>
        </div>

        <div className='container'>
            <div className='mt-9 mb-7' id='main'>
                <h6 className="!leading-[1.6] text-center second-heading text-[20px] font-medium">In a world without humans, only myths remain. Beast King is a cinematic open-world RPG 
                    Conquistador is a historical RPG where you fight as either an Aztec warrior or a Spanish
                    Conquistador, experiencing the legendary battles that defined an empire's fall. Combining brutal
                    tactical combat, survival mechanics, and a dynamic war-driven world, this is a historical
                    experience like no other.
                </h6>
            </div>

            <div className="mt-7">
                <h2 className="second-heading md:text-[52px] text-[26px] text-center font-semibold">Key Features</h2>
                <ul className='mt-3'>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Choose Your Side:</span>
                        <label className='second-heading'> Play as an Aztec Jaguar Warrior or a Spanish Conquistador, shaping history.</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Brutal, Tactical Combat:</span>
                        <label className='second-heading'> Engage in realistic melee, ranged, and formation-based warfare</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Survival & Resource Management:</span>
                        <label className='second-heading'> Maintain your warband, manage food, morale, and battlefield injuries. </label>
                    </li>
                    <li className='pb-4'>
                        <span className='!text-white font-medium'>A Living, Reactive World:</span>
                        <label className='second-heading'> Factions fight dynamically, and your choices impact war outcomes.</label>
                    </li>

                </ul>
            </div>

            <div className="mt-7">
                <h2 className="second-heading md:text-[52px] text-[26px] font-semibold text-center">Concept Art Showcase</h2>
                <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                    <div>
                        <Image src={showcase1} className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={showcase4} className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={showcase3} className="rounded-[8px]" alt="" />
                    </div>
                    
                    <div>
                        <Image src={showcase5}  className="rounded-[8px]" alt="" />
                    </div>
                    
                </div>
                <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                    <div>
                        <Image src={showcase2}  className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={showcase6} className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={showcase7} className="rounded-[8px]" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-7">
                <h2 className="second-heading md:text-[52px] text-[26px] font-semibold text-center">Why Conquistador?</h2>
                <ul className='mt-3 list-disc marker:text-white ml-[16px]'>
                   
                    <li className='pb-4'>
                        <label className='second-heading'>A historically immersive, cinematic RPG—a perfect fit for PlayStation's AAA storytelling lineup.</label>
                    </li>
                    <li className='pb-4'>
                        <label className='second-heading'> No other game has tackled the Spanish conquest with this level of realism & player agency. </label>
                    </li>
                    <li className='pb-4'>
                        <label className='second-heading'> Next-gen PS5 experience: Dynamic world, high-detail combat physics, AI-driven faction systems.</label>
                    </li>

                </ul>
            </div>

            <div className="mt-7 mb-8">
                <h2 className="second-heading md:text-[52px] text-[26px] font-semibold text-center">Final Call to Action</h2>
            
                <p className='second-heading pt-2.5 text-center'>More Details coming soon. Stay tuned for the first look at gameplay.</p>
            </div>
        </div>
       
    </>
  )
}
