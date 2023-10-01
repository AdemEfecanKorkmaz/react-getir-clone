import React from 'react'

export default function Menu() {
  return (
    <div className='flex'>
          <a href="/getir" className="mt-[3px] mr-[1px] py-[10px] px-5 text-brand-yellow bg-header-hover-color rounded-tl-md rounded-tr-md text-opacity-80 font-semibold text-[16px] tracking-wide">
            getir
          </a>
          <a href="/getiryemek" className="mt-[3px] mr-[1px] py-[10px] px-5 hover:bg-header-hover-color rounded-tl-md rounded-tr-md text-white text-opacity-80 font-semibold text-[16px] tracking-wide">
            getiryemek
          </a>
          <a href="/getirbüyük" className="mt-[3px] mr-[1px] py-[10px] px-5 hover:bg-header-hover-color rounded-tl-md rounded-tr-md text-white text-opacity-80 font-semibold text-[16px] tracking-wide">
            getirbüyük
          </a>
          <a href="/getirsu" className="mt-[3px] mr-[1px] py-[10px] px-5 hover:bg-header-hover-color rounded-tl-md rounded-tr-md text-white text-opacity-80 font-semibold text-[16px] tracking-wide">
            getirsu          
          </a>
          <a href="/getirçarşı" className="mt-[3px] mr-[1px] py-[10px] px-5 hover:bg-header-hover-color rounded-tl-md rounded-tr-md text-white text-opacity-80 font-semibold text-[16px] tracking-wide">
            getirçarşı
          </a>
    </div>
  )
}
