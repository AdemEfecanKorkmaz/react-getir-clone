import React from 'react'

export default function CardItem({data}) {
  return (
    <div className='flex flex-col items-center justify-center content-center text-center bg-white rounded-md py-10 px-1 gap-y-2 shadow-sm'>
        <img className='w-36 h-36' src={data.imageUrl} alt={data.title}/>
        <h1 className='text-brand-color text-lg font-medium mt-3'>{data.title}</h1>
        <h2 className='text-cards-text-darkgray text-sm font-medium'>{data.description}</h2>
    </div>
  )
}
