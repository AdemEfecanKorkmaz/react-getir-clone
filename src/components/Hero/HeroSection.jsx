import React from "react";
import HeroLeftDescription from "./HeroLeftDescription";
import HeroLogin from "./HeroLogin";
import Sliderr from "./Slider";




export default function HeroSection() {
  return (
    <section className='h-[500px] w-full relative overflow-hidden before:bg-gradient-to-r before:from-header-hover-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
        <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
          <HeroLeftDescription/>
          <HeroLogin/>
        </div>

        <Sliderr/>
        
    </section>
  )
}
