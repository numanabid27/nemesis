import Image from 'next/image'
import logo from "@/common/assets/logo.webp"

export default function Footer() {
  return (
    <footer className='bg-[hsla(0,0%,100%,.025)] py-[39px] px-[26px]'>
        <div className='flex container gap-10'>
            <div className='w-[30%]'>
                <Image src={logo} alt="" className='w-[90px]' />
                <p className='second-heading py-2.5'>A Mythological Open-World RPG of Conquest & Destiny.</p>    
            </div>
            <div className='w-[23%]'>
                <h6 className='text-white text-[18px] font-medium pb-2.5'>Pages</h6>
                <ul>
                    <li className='text-[#adb7be] pb-1'>Page 1</li>
                    <li className='text-[#adb7be] pb-1'>Page 2</li>
                    <li className='text-[#adb7be] pb-1'>Page 3</li>
                </ul>
            </div>
            <div className='w-[32%]'>
                <h6 className='text-white text-[18px] font-medium pb-2.5'>Newsletter</h6>
            </div>
        </div>
    </footer>
  )
}
