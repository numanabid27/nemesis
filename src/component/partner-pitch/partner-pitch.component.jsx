import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

export default function PartnerPitchComponent() {
  return (
    <>
        <div className="banner relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 h-fit m-auto">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold text-center max-w-[900px] mx-auto">Dedicated section for PlayStation Partner & Investor</h2>
                
            </div>
            <div className="bottom-[29px] absolute right-0 left-0 botton-[25px]">
                <p className="text-center second-heading text-[18px] pb-[10px]">Explore the World of Beast King.</p>
                <Link href="#main">
                    <MdKeyboardDoubleArrowDown className="text-white animate-bounce-down cursor-pointer text-center text-3xl block w-full" />
                </Link>
            </div>
        </div>

        <div className='container'>
            <div className="mt-12" id='main'>
                <h1 className="second-heading text-[22px] md:text-[44px] font-semibold">Investor Pitch Overview</h1>
                <p className='second-heading text-[18px] pt-2.5'>Why Beast King is a strong PlaySttaion RPG contender</p>
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold">Downloadable Pitch Materials</h2>
                <p className='second-heading text-[18px] pt-2.5'>Pitch Deck & Business Plan (Optional for press/investors only)</p>
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold">Investor Pitch: The Next-Gen Cinematic RPG </h2>
                <p className='second-heading second-heading__custom text-[18px] pt-2.5'>
                    Beast King is a groundbreaking <span>open-world RPG</span> set in a world <span>without humans—only 
                    mythological creatures and extinct beasts.</span> Players take on the role of a young Lamassu 
                    warlord, shaping an AI-driven world of warring factions, dynamic morality, and large-scale 
                    battles. This is not just another RPG—it's a <span>cinematic, emergent experience where every 
                    decision reshapes the world.</span> 
                </p>
                <p className='second-heading second-heading__custom text-[18px] pt-2.5'>
                    Developed by <span>Nemesis Gaming Studios</span>, Beast King is designed for <span>PlayStation 5</span> as a 
                    potential <span>exclusive flagship RPG</span> leveraging next-gen features like <span>DualSense haptics, 
                    Tempest 3D Audio, and AI-driven world evolution.</span> 
                </p>
            </div>

          
            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold pb-2.5">Market Opportunity & PlayStation Synergy </h2>
                <ul className='listing-pitch list-disc ml-5 marker:text-white'>
                    <li className='second-heading'>
                        <span>RPGs Dominate Sales</span> - Elden Ring (20M+ copies), God of War: Ragnarok (11M+ in 3 
                        months), proving demand for <span>cinematic action RPGs.</span>
                    </li>
                    <li className='second-heading'>
                        <span>A Unique Position in the Market</span> Beast King fills the gap between <span>cinematic RPGs 
                        (God of War) and emergent world-building (Total War, Mount & Blade)</span>
                    </li>
                    <li className='second-heading'>
                        <span>PlayStation's RPG Expansion</span> - Sony is actively seeking <span>premium, cinematic, RPG 
                        exclusives</span> — Beast Kingaligns perfectly with their portfolio.
                    </li>
                </ul>            
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold pb-2.5">Unique Selling Points (USP) </h2>
                <ul className='listing-pitch list-disc ml-5 marker:text-white'>
                    <li className='second-heading'>
                        <span>A World Without Humans</span> - The first AAA RPG featuring a world <span>entirely populated by 
                        mythological beings & extinct creatures.</span> 
                    </li>
                    <li className='second-heading'>
                        <span>AI-Driven Faction Warfare - A living world where factions expand, resist, and betray 
                        dynamically.</span> No two playthroughs are the same. 
                    </li>
                    <li className='second-heading'>
                        <span>Cinematic RPG Combat – God of War-style melee, aerial battles, and large-scale 
                        faction conflicts. </span>
                    </li>
                    <li className='second-heading'>
                        <span>Morality & Title System</span> - NPCs and factions react to the player's actions, addressing them 
                        as <span>"Child of Light" or "King of Darkness."</span>
                    </li>
                    <li className='second-heading'>
                        <span>Seamless Open World</span> - No loading screens, <span>full biome diversity, AI-driven wildlife, and 
                        faction-controlled territories.</span> 
                    </li>
                    <li className='second-heading'>
                        <span>PS5-Exclusive Enhancements</span> - Built to showcase <span>DualSense feedback, Tempest 3D 
                        Audio, and PlayStation-exclusive AI capabilities. </span>
                    </li>
                   
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold pb-2.5">Investment and Funding Proposal</h2>
                <p className='second-heading second-heading__custom text-[18px] pt-2 pb-4'> We are seeking a $80M-$100M investment to fully realize Beast King as a 
                PlayStation-backed exclusive. </p>
                <ul className='listing-pitch list-disc ml-5 marker:text-white'>
                    <li className="second-heading">
                        Full PlayStation Studios Backing - Beast King becomes a PlayStation-owned 
                        flagship RPG franchise.
                    </li>   
                    <li className="second-heading">
                        Timed Exclusive with Co-Funding - PlayStation secures first-launch exclusivity 
                        with investment support. 
                    </li>   
                    <li className="second-heading">
                        Partial Development Investment - PlayStation funds key milestones, ensuring Beast 
                        King is optimized for PS5. 
                    </li>   
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold pb-2.5">Monetization & Franchise Potential</h2>
                <ul className='listing-pitch list-disc ml-5 marker:text-white'>
                    <li className='second-heading'>
                        <span>AAA Premium Model</span> - $69.99 retail price.
                    </li>
                    <li className='second-heading'>
                        <span> Post-Launch Expansions (DLCs) </span> -  New lands, faction wars, divine conflicts.
                    </li>
                    <li className='second-heading'>
                        <span> Cosmetic & Mount DLCs</span> Exclusive armor sets, kingdom customizations, legendary beast 
                        mounts
                    </li>
                    <li className='second-heading'>
                        <span> Sequel & Franchise Roadmap</span> Beast King is designed as a long-term PlayStation RPG 
                        series.
                    </li>
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold pb-2.5">Next Steps: PlayStation Partnership</h2>
                <p className='second-heading second-heading__custom text-[18px] pt-2 pb-4'>Beast King is positioned to be PlayStation’s next great cinematic RPG. We are eager to 
                discuss how we can align with Sony's vision for the future of exclusive, next-gen gaming.</p>
                <h6 className='second-heading text-[20px] md:text-[28px] font-semibold pb-4'>PlayStation Partnership Roadmap:</h6>
                <ul className='listing-pitch list-disc ml-5 marker:text-white'>
                    <li className='second-heading'>
                        Review <span>Pitch Deck, Business Plan, and Detailed Design Document (DDG).</span>
                    </li>
                    <li className='second-heading'>
                        Align on <span>funding models & exclusivity terms. </span>
                    </li>
                    <li className='second-heading'>
                        Establish <span>PlayStation-backed prototype development.</span>
                    </li>
                </ul>
            </div>

            <div className='container my-6'>
                <h2 className="second-heading text-[22px] md:text-[44px] font-semibold">Contact Information</h2> 
                <h6 className="!leading-[1.6]  md:text-[20px] font-medium text-base">
                    <span className='second-heading'>For press, investors, and PlayStation Partners -</span>
                    <Link href="mailto:lawrence@nemesisgamingstudios.com " className='text-white'> lawrence@nemesisgamingstudios.com</Link>

                </h6>
            </div>

        </div>

       
    </>
  )
}
