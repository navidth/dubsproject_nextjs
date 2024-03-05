'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo/remove bg.png'
function BrandLogo() {
  return (
    <div className='nav-center mt-2'>
        <Link href={"/"}>
        <Image src={logo} alt="Logo"/>
        </Link>
    </div>
  )
}

export default BrandLogo
