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
            <div className="h-fit m-auto absolute bottom-0 left-[16px] right-[16px] top-0">
                <h2 className="text-[22px] text-center font-semibold max-w-[900px] md:text-[44px] mx-auto second-heading">Overview the upcoming historical RPG</h2>
                
            </div>
            <div className="absolute bottom-[29px] botton-[25px] left-0 right-0">
                <p className="text-[18px] text-center pb-[10px] second-heading">Explore the Conquistador.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-3xl text-center text-white w-full animate-bounce-down block cursor-pointer" />
                </Link>
            </div>
        </div>

        <div className='container'>
            <div className='mb-7 mt-9' id='main'>
                <h6 className="text-[20px] text-center !leading-[1.6] font-medium second-heading">In a world without humans, only myths remain. Beast King is a cinematic open-world RPG 
                    Conquistador is a historical RPG where you fight as either an Aztec warrior or a Spanish
                    Conquistador, experiencing the legendary battles that defined an empire's fall. Combining brutal
                    tactical combat, survival mechanics, and a dynamic war-driven world, this is a historical
                    experience like no other.
                </h6>
            </div>

            <div className="mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Key Features</h2>
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
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Concept Art Showcase</h2>
                <div className="flex flex-col justify-center gap-6 max-w-[1000px] md:flex-row mt-7 mx-auto">
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
                <div className="flex flex-col justify-center gap-6 max-w-[1000px] md:flex-row mt-7 mx-auto">
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
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Why Conquistador?</h2>
                <ul className='list-disc marker:text-white ml-[16px] mt-3'>
                   
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

            <div className="mb-8 mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Final Call to Action</h2>
            
                <p className='text-center pt-2.5 second-heading'>More Details coming soon. Stay tuned for the first look at gameplay.</p>
            </div>
        </div>
       
    </>
  )
}
