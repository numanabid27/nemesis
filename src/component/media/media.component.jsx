import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import art1 from "@/common/assets/art-1.png"
import art2 from "@/common/assets/art-2.png"
import art3 from "@/common/assets/art-3.png"
import env1 from "@/common/assets/concept-3.webp"
import env2 from "@/common/assets/env-1.PNG"
import env3 from "@/common/assets/env-2.jpeg"
import Image from 'next/image'
import cin1 from "@/common/assets/cin-1.PNG"
import cin2 from "@/common/assets/cin-2.PNG"
import cin3 from "@/common/assets/cin-3.PNG"
import cin4 from "@/common/assets/cin-4.PNG"
import cin5 from "@/common/assets/cin-5.PNG"
import cin6 from "@/common/assets/cin-6.PNG"
import cin7 from "@/common/assets/cin-7.PNG"
import cin8 from "@/common/assets/cin-8.PNG"
import beast1 from "@/common/assets/beast-1.jpg"
import beast2 from "@/common/assets/beast-2.jpg"
import beast3 from "@/common/assets/beast-3.jpg"
import beast4 from "@/common/assets/beast-4.jpg"
import beast5 from "@/common/assets/beast-5.jpg"

export default function MediaComponent() {
  return (
    <>
        <div className="banner relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 h-fit m-auto">
                <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center max-w-[900px] mx-auto"> Concept Art & Screenshots </h2>  
            </div>
            <div className="bottom-[29px] absolute right-0 left-0 botton-[25px]">
                <p className="text-center second-heading text-[18px] pb-[10px]">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-white animate-bounce-down cursor-pointer text-center text-3xl block w-full" />
                </Link>
            </div>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center">Character Concept Art</h2>
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={art1} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={art2}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={art3} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center">World Environment Previews</h2>
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={env1} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={env2}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={env3} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center"> Mountable Beasts & Extinct Wildlife </h2>
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={beast1} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={beast2}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={beast3} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={beast4} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={beast5} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7 mb-7">
            <h2 className="second-heading text-[24px] md:text-[52px] font-semibold text-center">Cinematic Visuals</h2>
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={cin1} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin2}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin3} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin4} className="rounded-[8px]" alt="" />
                </div>
            </div>

            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={cin5} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin6}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin7} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={cin8} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
