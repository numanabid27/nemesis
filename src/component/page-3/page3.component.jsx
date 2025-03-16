import Link from 'next/link'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import key from "@/common/assets/keyy.png"
import Image from 'next/image'

export default function Page3component() {
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
    </>
  )
}
