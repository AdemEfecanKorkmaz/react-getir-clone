import React from 'react'

function FooterCols() {
  return (
    <>
        <div className='top grid grid-cols-5 gap-6 pt-10 pb-7'>

            <div className='flex flex-col gap-y-2 justify-start items-start px-5'>
            <h1 className='footer-container-title'>Getir'i indirin!</h1>
            <div className='flex flex-col items-start content-start justify-start gap-y-3'>
                <a href='/mobile/appStore'>
                <img className="w-35 h-full" src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' alt='appStore'/>
                </a>
                <a href='/mobile/googlePlay'>
                <img className="w-35 h-full" src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' alt='googlePlay'/>
                </a>
                <a href='/mobile/appGallery'>
                <img className="w-35 h-full" src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' alt='appGallery'/>
                </a>
            </div>
            </div>



            <div className='flex flex-col gap-y-2 justify-start items-start px-5'>
            <h1 className='footer-container-title'>Getir'i keşfedin</h1>
            <div className='flex flex-col items-start content-start justify-start gap-y-[5px]'>
                <a href='/hakkımızda'>
                    <span className='text-[14px] text-gray-600'>Hakkımızda</span>
                </a>
                <a href='/kariyer'>
                <span className='text-[14px] text-gray-600'>Kariyer</span>
                </a>
                <a href='/teknoloji-kariyerleri'>
                    <span className='text-[14px] text-gray-600'>Teknoloji Kariyerleri</span>
                </a>
                <a href='/iletişim'>
                <span className='text-[14px] text-gray-600'>İletişim</span>
                </a>
                <a href='/Sosyal-Sorumluluk-Projeleri'>
                    <span className='text-[14px] text-gray-600'>Sosyal Sorumluluk Projeleri</span>
                </a>
            </div>
            </div>

            <div className='flex flex-col gap-y-2 justify-start items-start px-5'>
            <h1 className='footer-container-title whitespace-nowrap'>Yardıma mı ihtiyacınız var?</h1>
            <div className='flex flex-col items-start content-start justify-start gap-y-[5px]'>
                <a href='/hakkımızda'>
                    <span className='text-[14px] text-gray-600'>Sıkça Sorulan Sorular</span>
                </a>
                <a href='/kariyer'>
                <span className='text-[14px] text-gray-600'>Kişisel Verilerin Korunması</span>
                </a>
                <a href='/teknoloji-kariyerleri'>
                    <span className='text-[14px] text-gray-600'>Gizlilik Politikası</span>
                </a>
                <a href='/iletişim'>
                <span className='text-[14px] text-gray-600'>Kullanım Koşulları</span>
                </a>
                <a href='/Sosyal-Sorumluluk-Projeleri'>
                    <span className='text-[14px] text-gray-600'>Çerez Politikası</span>
                </a>
                <a href='/islem-rehberi'>
                    <span className='text-[14px] text-gray-600'>İşlem Rehberi</span>
                </a>
            </div>
            </div>

            <div className='flex flex-col gap-y-2 justify-start items-start px-5'>
            <h1 className='footer-container-title'>İş Ortağımız Olun</h1>
            <div className='flex flex-col items-start content-start justify-start gap-y-[5px]'>
                <a href='/hakkımızda'>
                <span className='text-[14px] text-gray-600'>Bayimiz Olun</span>
                </a>
                <a href='/kariyer'>
                <span className='text-[14px] text-gray-600'>Deponuzu Kiralayın</span>
                </a>
                <a href='/teknoloji-kariyerleri'>
                <span className='text-[14px] text-gray-600'>GetirYemek Restoranı Olun</span>
                </a>
                <a href='/iletişim'>
                <span className='text-[14px] text-gray-600'>GetirÇarşı İşletmesi Olun</span>
                </a>
                <a href='/Sosyal-Sorumluluk-Projeleri'>
                <span className='text-[14px] text-gray-600'>Zincir Restoranlar</span>
                </a>
            </div>
            </div>

            <div className='flex justify-center items-start'>
            <a className='rounded-md shadow-md p-4 mr-8' href='/etbis'>
                <img className='w-[72px] h-[84px] object-cover' src='https://cdn.getir.com/getirweb-images/common/etbis.png' alt='etbis'/>
            </a>
            </div>
        </div>
    </>
  )
}

export default FooterCols
