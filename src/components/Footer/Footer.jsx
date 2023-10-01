import React from 'react'
import FooterCols from './FooterCols'
import FooterDesc from './FooterDesc'


export default function Footer() {
  return (
    <footer className='bg-white mt-11'>
      <div className='container mx-auto justify-center items-center content-center flex flex-col w-full'>

        <FooterCols/>
        <FooterDesc/>

      </div>
    </footer>
  )
}
