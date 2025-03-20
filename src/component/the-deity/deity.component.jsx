import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import god1 from "@/common/assets/god1.PNG"
import god2 from "@/common/assets/god2.PNG"
import god3 from "@/common/assets/god3.PNG"
import god4 from "@/common/assets/god4.PNG"
import god5 from "@/common/assets/god5.PNG"
import god6 from "@/common/assets/god6.jpeg"
import god7 from "@/common/assets/god7.jpeg"
import god8 from "@/common/assets/god8.jpeg"
import Image from 'next/image'

export default function DeityComponent() {
  return (
    <>
        <div className="banner3 relative">
            <div className="h-fit m-auto absolute bottom-0 left-[16px] right-[16px] top-0">
                <h2 className="text-[22px] text-center font-semibold max-w-[900px] md:text-[44px] mx-auto second-heading">The First God Awakens</h2>
                
            </div>
            <div className="absolute bottom-[29px] botton-[25px] left-0 right-0">
                <p className="text-[18px] text-center pb-[10px] second-heading">Explore the OCU.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-3xl text-center text-white w-full animate-bounce-down block cursor-pointer" />
                </Link>
            </div>
        </div>

        <div className='container'>
            <div className='mb-7 mt-9' id='main'>
                <h6 className="text-[20px] text-center !leading-[1.6] font-medium second-heading">”OGU: The Deity is an epic, action-driven RPG where you play as the first god ever to walk the
                    Earth. Betrayed and sealed away for eons, you awaken to find a world ruled by gods who fear
                    your return. Explore divine realms, forge alliances with mythological beings, and unleash
                    god-tier combat as you reclaim your power.”
                </h6>
            </div>

            <div className="mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Key Features</h2>
                <ul className='mt-3'>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>God-Tier Combat:</span>
                        <label className='second-heading'> Wield divine weapons, abilities, and destroy gods in cinematic battles.</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Semi-Open Mythological World:</span>
                        <label className='second-heading'> Explore divine kingdoms, each ruled by powerful gods</label>
                    </li>
                    <li className='pb-4'>
                        <span className='text-white font-medium'>Dynamic Morality & Alliances:</span>
                        <label className='second-heading'> Decide who joins you in war, and who must fall.</label>
                    </li>
                    <li className='pb-4'>
                        <span className='!text-white font-medium'>Multi-Layered Combat System:</span>
                        <label className='second-heading'> God of War-style melee + tactical power-based abilities.</label>
                    </li>

                </ul>
            </div>

            <div className="mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Concept Art Showcase</h2>
                <div className="flex flex-col justify-center gap-6 max-w-[1000px] md:flex-row mt-7 mx-auto">
                    <div>
                        <Image src={god1} className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={god2} className="rounded-[8px]" alt="" />
                    </div>
                    <div>
                        <Image src={god3} className="rounded-[8px]" alt="" />
                    </div>
                                
                    <div>
                        <Image src={god4}  className="rounded-[8px]" alt="" />
                    </div>
                                
                    </div>
                    <div className="flex flex-col justify-center gap-6 max-w-[1000px] md:flex-row mt-7 mx-auto">
                         <div>
                            <Image src={god5}  className="rounded-[8px]" alt="" />
                         </div>
                         <div>
                            <Image src={god6} className="rounded-[8px]" alt="" />
                         </div>
                        <div>
                         <Image src={god7} className="rounded-[8px]" alt="" />
                        </div>
                        <div>
                         <Image src={god8} className="rounded-[8px]" alt="" />
                        </div>
                    </div>
            </div>

            <div className="mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading"> Why OGU: The Deity?</h2>
                <ul className='list-disc marker:text-white ml-[16px] mt-3'>
                   
                    <li className='pb-4'>
                        <label className='second-heading'>A cinematic RPG blending mythology and deep player choice</label>
                    </li>
                    <li className='pb-4'>
                        <label className='second-heading'> God of War meets Elder Scrolls, perfect for PlayStation’s epic action RPG lineup. </label>
                    </li>
                    <li className='pb-4'>
                        <label className='second-heading'> Designed for PS5 with next-gen combat, AI-driven enemy behavior, and god-tier physics.</label>
                    </li>

                </ul>
            </div>

            <div className="mb-8 mt-7">
                <h2 className="text-[26px] text-center font-semibold md:text-[52px] second-heading">Final Call to Action</h2>
            
                <p className='text-center pt-2.5 second-heading'>More details coming soon. Stay tuned for exclusive first looks at the world of OGU: The Deity</p>
            </div>
        </div>
    </>
  )
}
