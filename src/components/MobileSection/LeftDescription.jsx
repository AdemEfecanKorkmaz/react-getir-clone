import React from 'react'

function LeftDescription() {
  return (
    <>
        <div className='flex flex-col p-10 gap-y-7'>
        <div className='flex flex-col gap-y-2 items-start content-start justify-start text-white font-semibold'>
          <h1 className='text-2xl'>Getir'i indirin!</h1>
          <h1 className='text-sm'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/>getirelim.</h1>
        </div>

        <div className='flex items-start content-start justify-start gap-x-4'>
          <a href='/mobile/appStore'>
            <img className="w-40 h-full" src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='appStore'/>
          </a>
          <a href='/mobile/googlePlay'>
            <img className="w-40 h-full" src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt='googlePlay'/>
          </a>
          <a href='/mobile/appGallery'>
            <img className="w-40 h-full" src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt='appGallery'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default LeftDescription
