import Link from 'next/link'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import key from "@/common/assets/keyy.png"
import Image from 'next/image'
import facts from "@/common/assets/earth.png"
import swrof from "@/common/assets/swords.png"
import danger from "@/common/assets/warning-sign.png"
import beast from "@/common/assets/full-beast.webp"

export default function Page3component() {

    const data = [
        {
            title:"Factions & Their Allegiances",
            desc:"The world of Beast King is shaped by powerful factions, each with unique values, alliances, and ambitions. How you interact with them will determine your rule.",
            img:facts,
            list:[
                {
                    title:"The Thunderborn (Warriors of the Eternal Storm)",
                    innerList:[
                        {
                            value:"Values:",
                            title:"Strength, Honor, and Survival of the Fittest"
                        },
                        {
                            value:"Allegiance:",
                            title:"Respect power; will ally if you prove dominance"
                        },
                        {
                            value:"Description:",
                            title:"A warlike faction of griffon-riders and storm-forged warriors who only follow the strong."
                        }
                        
                    ]
                },
                {
                    title:"The Serpent Dynasty (Keepers of Forbidden Knowledge)",
                    innerList:[
                        {
                            value:"Values:",
                            title:"Cunning, Deception, and Hidden Power."
                        },
                        {
                            value:"Allegiance:",
                            title:"Untrustworthy—may ally but always seek an advantage.t"
                        },
                        {
                            value:"Description:",
                            title:"A shadowy empire of serpent-like beings, hoarding lost magic and ancient secrets."
                        }
                    ]
                },
                {
                    title:"The Infernal Horde (Warlords of Fire & Chaos)",
                    innerList:[
                        {
                            value:"Values:",
                            title:"Conquest, Domination, and Destruction."
                        },
                        {
                            value:"Allegiance:",
                            title:" Only follow those who rule by fear"
                        },
                        {
                            value:"Description:",
                            title:": A brutal legion of demonic warriors and war beasts, thriving on destruction"
                        }
                    ]
                },
                {
                    title:"The Verdant Pact (Guardians of the Wilds)",
                    innerList:[
                        {
                            value:"Values:",
                            title:"Nature, Balance, and Ancestral Bonds."
                        },
                        {
                            value:"Allegiance:",
                            title:"Favor light-aligned rulers; resist tyranny"
                        },
                        {
                            value:"Description:",
                            title:": A faction of centaurs, forest spirits, and ancient guardians, protecting the land from corruption."
                        }
                    ]
                },
                {
                    title:"The Obsidian Maw (Cult of the Abyss)",
                    innerList:[
                        {
                            value:"Values:",
                            title:"Darkness, Forbidden Power, and Chaos Worship"
                        },
                        {
                            value:"Allegiance:",
                            title:"Absolute loyalty—if you embrace darkness"
                        },
                        {
                            value:"Description:",
                            title:"A fanatical cult that serves the Chaos God, spreading corruption wherever they go"
                        }
                    ]
                }
            ]
        },
        {
            title:"Dark Beasts & The Chaos God",
            desc:"The world is haunted by Dark Beasts, mythical creatures consumed by corruption. They are unpredictable, forming roaming hordes or striking without warning. The deeper your rule sinks into darkness, the more Dark Beasts may see you as their king rather than their enemy.",
            img:swrof,
            list:[
                {
                    title:"The Chaos God – An Unseen Force",
                    innerList:[
                        {
                            value:"A mysterious, ever-present entity,",
                            title:" influencing war, betrayal, and corruption."
                        },
                        {
                            value:"Its whispers drive factions to madness, ",
                            title:"twist creatures into horrors, and test the Beast King’s will."
                        },
                        {
                            value:"Will you resist its influence—or embrace its power?",
                            title:""
                        }
                        
                    ]
                },
            ]
        },
        {
            title:"World Dangers & Moral Dilemmas",
            desc:"The AI-driven world of Beast King is unpredictable, where no land is ever truly safe. Every choice you make shapes the fate of nations.",
            img:danger,
            list:[
                {
                    title:"A Living, Unpredictable World",
                    innerList:[
                        {
                            value:"Factions wage war dynamically:",
                            title:"kingdoms can rise and fall on their own."
                        },
                        {
                            value:"Random calamities:",
                            title:"like plagues, famine, and raids alter the balance of power."
                        },
                        {
                            value:"Betrayals are inevitable",
                            title:"—leaders may turn on you if your rule weakens."
                        }
                        
                    ]
                },
                {
                    title:"The Corruption Dilemma",
                    innerList:[
                        {
                            value:"",
                            title:"The longer a region remains in darkness, the harder it is to reclaim."
                        },
                        {
                            value:"",
                            title:"Some lands may fall beyond salvation, becoming permanent strongholds of Dark Beasts."
                        },
                        {
                            value:"Can you stop the spread, or will you become part of it?e",
                            title:""
                        }
                        
                    ]
                },
                {
                    title:"Moral Dilemmas – Your Rule, Your Legacy",
                    innerList:[
                        {
                            value:"Rule by fear or loyalty?",
                            title:"Will you dominate the world or earn its devotion?"
                        },
                        {
                            value:"Spare enemies or destroy them?",
                            title:"Some will beg for mercy—do you grant it?"
                        },
                        {
                            value:"Embrace darkness or fight against it?",
                            title:"The Chaos God offers power, but at what cost?"
                        }
                        
                    ]
                },
            ]
        },
      
    ]
  return (
    <>
        <div className="banner relative">
            <div className="absolute left-[16px] right-[16px] top-0 bottom-0 h-fit m-auto">
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

        <div className="mt-16 mb-11 container">
            <h1 className="second-heading text-[24px] md:text-[52px] font-semibold text-center max-w-[900px] mx-auto">The World of Beast King</h1>
            {
                data?.map((item, i)=>{
                    return(
                        <div className='mb-5' key={i.toString()}>
                            <div className='flex items-center gap-2 pb-1.5'>
                                <Image src={item.img} alt="" width={24} height={24} />
                                <h3 className='second-heading text-[22px] font-semibold'>{item.title}</h3>
                            </div>
                            <p className='second-heading text-[18px] pt-2.5'>{item.desc}</p>
                            <ul className='list-disc ml-[18px]'>
                                {
                                    item.list?.map((list, i)=>{
                                        return(
                                            <li className='mt-[14px] marker:text-white' key={i.toString()}>
                                                <span className='list-disc__last font-semibold text-[18px]'>{list.title}</span>
                                                <ul className='list-decimal pl-[19px] pt-1.5'>
                                                   {
                                                    list?.innerList?.map((innerList, i)=>{
                                                        return(
                                                            <li className='pb-[6px]' key={i.toString()}>
                                                                <span className='text-white font-medium'>{innerList?.value}</span> 
                                                                <label className='second-heading'> {innerList?.title}</label>
                                                            </li>
                                                        )
                                                    })
                                                   }
                                                </ul>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> 
                    )
                })
            }
            <p><label className='second-heading'>Every choice matters. Will you be</label> <span className='text-white'>a just ruler, a ruthless tyrant, or something beyond
            morality itself?</span></p>
        </div>

        <div className="container mb-8">
            <h2 className="second-heading text-[52px] font-semibold text-center">Final Impact</h2>
            <p className="text-center second-heading text-[18px] pb-[10px]">Your rule defines your legacy in beast king</p>
            <Image src={beast} alt="" className='w-[79%] mx-auto' />
        </div>
    </>
  )
}
