"use client"

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import concept1 from "@/common/assets/concept-4.webp"
import concept2 from "@/common/assets/concept-2.webp"
import concept3 from "@/common/assets/concept-5.webp"
import Image from "next/image";
import key from "@/common/assets/keyy.png"
import ps5 from "@/common/assets/ps-5.png"
import ps5key from "@/common/assets/sample.jpg"
import Link from "next/link";


export default function HomeComponent() {
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
        <div className="mt-16 mb-11 container">
            <div className="flex gap-2 items-center justify-between mx-auto max-w-[1100px] md:flex-row flex-col" id="main">
                <div className="md:w-[60%] w-full">
                    <h6 className="!leading-[1.6] second-heading text-[20px] font-medium">In a world without humans, only myths remain. Beast King is a cinematic open-world RPG 
                        where you, a young war-weary Lamassu, rise from exile to forge your destiny. Rule through 
                        wisdom or terror, shape an AI-driven world of warring factions, and command legendary beasts 
                        in large-scale battles. Will you be a revered sovereign, a tyrannical warlord, or something in 
                        between? The world reacts to your every choice—because in Beast King, power is never given. 
                        It is taken.
                    </h6>
                    <button type="button" className="button-gradient text-white mt-[23px] rounded-[10px] py-3 px-[18px]">Game Features</button>
                </div>
                <div className="md:w-[35%] w-full">
                    <Image src={key} alt="" className="rounded-[8px]" />
                </div>
            </div>
        </div>
        {/* key concept */}
        <div className="container">
            {/* <h2 className="second-heading text-[52px] font-semibold text-center">Key Concept</h2> */}
            <div className="flex gap-6 mt-7 mx-auto max-w-[1000px] justify-center md:flex-row flex-col">
                <div>
                    <Image src={concept1} className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={concept2}  className="rounded-[8px]" alt="" />
                </div>
                <div>
                    <Image src={concept3} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7">
            <h2 className="second-heading text-[52px] font-semibold text-center">Made Exculsively for PlayStation</h2>
            <div className="flex justify-center mt-8 md:flex-row flex-col">
                <div className="md:w-[40%] w-full">
                    <Image src={ps5} alt="" />
                </div>
                <div className="md:w-[40%] w-full">
                    <Image src={ps5key} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7">
            {/* <h2 className="second-heading text-[52px] font-semibold text-center">Newsl
                etter
            </h2> */}
            {/* <form action="blank.php" class="flex flex-col items-center space-y-2" id="form_subscribe" method="post" name="form_subscribe">
                <div class="flex items-center space-x-2">
                    <input class="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    id="txt_subscribe" 
                    name="txt_subscribe" 
                    placeholder="Enter your email" 
                    type="text" />
                    <a id="btn-subscribe" href="/#" 
                    class="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    <i class="arrow_right"></i>
                    </a>
                </div>
            </form> */}

        </div>
    </>
  )
}
