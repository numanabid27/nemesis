"use client"

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import concept1 from "@/common/assets/concept-9.PNG"
import concept2 from "@/common/assets/concept-10.PNG"
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
            <div className="h-fit m-auto absolute bottom-0 left-[16px] right-[16px] top-0">
                <h2 className="text-[24px] text-center font-semibold max-w-[900px] md:text-[52px] mx-auto second-heading">A Mythological Open-World RPG of Conquest & Destiny. </h2>
                
            </div>
            <div className="absolute bottom-[29px] botton-[25px] left-0 right-0">
                <p className="text-[18px] text-center pb-[10px] second-heading">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-3xl text-center text-white w-full animate-bounce-down block cursor-pointer" />
                </Link>
            </div>
        </div>
        <div className="container mb-11 mt-16">
            <div className="flex flex-col justify-between gap-2 items-center max-w-[1100px] md:flex-row mx-auto" id="main">
                <div className="w-full md:w-[60%]">
                    <h6 className="text-[20px] !leading-[1.6] font-medium second-heading">In a world without humans, only myths remain. Beast King is a cinematic open-world RPG 
                        where you, a young war-weary Lamassu, rise from exile to forge your destiny. Rule through 
                        wisdom or terror, shape an AI-driven world of warring factions, and command legendary beasts 
                        in large-scale battles. Will you be a revered sovereign, a tyrannical warlord, or something in 
                        between? The world reacts to your every choice—because in Beast King, power is never given. 
                        It is taken.
                    </h6>
                    <button type="button" className="rounded-[10px] text-white button-gradient mt-[23px] px-[18px] py-3">Game Features</button>
                </div>
                <div className="w-full md:w-[35%]">
                    <Image src={key} alt="" className="rounded-[8px]" />
                </div>
            </div>
        </div>
        {/* key concept */}
        <div className="container">
            {/* <h2 className="text-[52px] text-center font-semibold second-heading">Key Concept</h2> */}
            <div className="flex flex-col justify-center gap-6 max-w-[1000px] md:flex-row mt-7 mx-auto">
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
            <h2 className="text-[38px] text-center font-semibold md:text-[52px] second-heading">Made Exculsively for PlayStation</h2>
            <div className="flex flex-col justify-center md:flex-row mt-8">
                <div className="w-full md:w-[40%]">
                    <Image src={ps5} alt="" />
                </div>
                <div className="w-full md:w-[40%]">
                    <Image src={ps5key} className="rounded-[8px]" alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-7">
            {/* <h2 className="text-[52px] text-center font-semibold second-heading">Newsl
                etter
            </h2> */}
            {/* <form action="blank.php" class="flex flex-col items-center space-y-2" id="form_subscribe" method="post" name="form_subscribe">
                <div class="flex items-center space-x-2">
                    <input class="border border-gray-300 rounded-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2" 
                    id="txt_subscribe" 
                    name="txt_subscribe" 
                    placeholder="Enter your email" 
                    type="text" />
                    <a id="btn-subscribe" href="/#" 
                    class="flex bg-blue-600 h-10 justify-center rounded-full text-white w-10 hover:bg-blue-700 items-center transition">
                    <i class="arrow_right"></i>
                    </a>
                </div>
            </form> */}

        </div>
    </>
  )
}
