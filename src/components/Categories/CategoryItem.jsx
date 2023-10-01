import React from 'react'

export default function CategoryItem({title, image}) {
  return (
    <div className='h-[108.8px] w-full'>
        <a href={title} className='flex flex-col justify-center items-center text-center px-1 pt-2 pb-4 gap-y-3 group hover:bg-header-color rounded-md transition-all delay-100'>
          <img className='w-12 h-12 border-2 border-categories-item-border rounded-lg object-cover' src={image} alt={title}/>
          <h6 className='whitespace-nowrap text-xs font-semibold text-categories-item-text-darkgray text-opacity-70 group-hover:text-header-hover-color'>{title}</h6>
        </a>
    </div>
  )
}
