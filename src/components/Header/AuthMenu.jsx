import React from 'react'
import {BiGlobe} from "react-icons/bi"
import {FaUserPlus} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"

function AuthMenu() {
  return (
    <>
      <div className='flex gap-x-7 text-[14px]'>
          <button className="flex items-center gap-x-[6px] text-header-color text-opacity-90 tracking-normal font-normal">
            <BiGlobe size={19} className='mr-1'/>
            Türkçe (TR)
          </button>
          <a href="/login" className="flex items-center gap-x-[6px] text-header-color text-opacity-90 tracking-normal font-semibold">
            <BiSolidUser size={19}/>
            Giriş yap
          </a>
          <a href="/register" className="flex items-center gap-x-[6px] text-header-color text-opacity-90 tracking-normal font-semibold">
            <FaUserPlus size={19}/>
            Kayıt Ol
          </a>
        </div>
    </>
  )
}

export default AuthMenu
