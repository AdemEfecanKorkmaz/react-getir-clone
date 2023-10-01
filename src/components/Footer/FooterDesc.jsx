import React from 'react'
import {BiGlobe} from "react-icons/bi"
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"

function FooterDesc() {
  return (
    <>
        <div className='bottom w-full flex justify-between items-center text-xs font-normal gap-x-3 pt-[24px] pb-[24px] border-t-2 border-t-gray-100'>
          <div className='flex gap-x-2 text-center items-center justify-center tracking-wide'>
            <span>© 2023 Getir</span>
            <span className='text-base font-semibold'>·</span>
            <span className='text-brand-color'>Bilgi Toplumu Hizmetleri</span>
          </div>

          <div className='flex gap-x-3 items-center justify-center'>
            <a href='/facebook' className='p-1 rounded-md hover:bg-violet-100 transition-all delay-100 items-center justify-center'>
              <BsFacebook size={20} className='text-footer-socialmedia-icons-darkgray'/>
            </a>
            <a href='/twitter' className='p-1 rounded-md hover:bg-violet-100 transition-all group delay-100 items-center justify-center'>
              <BsTwitter size={20} className='text-footer-socialmedia-icons-darkgray'/>
            </a>
            <a href='/instagram' className='p-1 rounded-md hover:bg-violet-100 transition-all group delay-100 items-center justify-center'>
              <BsInstagram size={20} className='text-footer-socialmedia-icons-darkgray'/>
            </a>
            <a href='/tr' className='flex gap-x-1 rounded-md hover:bg-violet-100 border-2 border-gray-100 outline-none group delay-100 transition-all text-center items-center justify-center px-2 py-1'>
              <BiGlobe size={18} className='group-hover:text-brand-color text-footer-socialmedia-icons-darkgray'/>
              <span className='group-hover:text-brand-color text-xs font-normal text-footer-socialmedia-icons-darkgray tracking-wide'>Türkçe (TR)</span> 
            </a>
          </div>
        </div>
    </>
  )
}

export default FooterDesc
