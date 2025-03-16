import React from 'react'
import logo from "@/common/assets/logo.webp"
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className='flex container items-center'>
        <div className='w-[60%]'>
            <Image src={logo} alt="" className='w-[90px]' />
        </div>
        <div>
            <ul className='flex gap-5'>
                <li className='second-heading'>
                  <Link href="/">Home</Link>
                </li>
                <li className='second-heading'>
                  <Link href="page-2">Page 2</Link>
                </li>
                <li className='second-heading'>
                  <Link href="#">Page 3</Link>
                </li>
                <li className='second-heading'>...</li>
            </ul>
        </div>
    </div>
  )
}
