import React from 'react'
import Menu from './Menu'
import AuthMenu from './AuthMenu'

export default function Header() {
  return (
    <section className='bg-brand-color'>
      <div className='container mx-auto h-[45px] flex items-center justify-between'>

        <Menu/>
        <AuthMenu/>
      
      </div>
    </section>
  )
}
