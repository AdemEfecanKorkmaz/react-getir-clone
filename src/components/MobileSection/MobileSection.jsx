import React from 'react'
import LeftDescription from './LeftDescription'
import Image from "./Image";

export default function MobileSection() {
  return (
    <div className='w-full container mx-auto mt-5 flex items-center justify-between bg-home-cards-section-bg rounded-lg bg-brand-color'>
      
      <LeftDescription/>
      <Image/>

    </div>
  )
}
