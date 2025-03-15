import React from 'react'
import logo from "@/common/assets/logo.webp"
import Image from 'next/image'

export default function Nav() {
  return (
    <div className='flex container items-center'>
        <div className='w-[60%]'>
            <Image src={logo} alt="" className='w-[90px]' />
        </div>
        <div>
            <ul className='flex gap-5'>
                <li className='second-heading'>Home</li>
                <li className='second-heading'>Page 2</li>
                <li className='second-heading'>Page 3</li>
                <li className='second-heading'>...</li>
            </ul>
        </div>
    </div>
  )
}
