import {React, useState, useEffect} from 'react'
import categoriesData from 'api/homeCategories.json'
import CategoriesItem from 'components/Categories/CategoryItem.jsx'


export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => { // Categories Componenti çağırıldığı zaman bir kez çalışacak
    // api request
    setCategories(categoriesData)
  }, [])

  return (
    <section className='bg-white shadow-sm'>
      <div className='container mx-auto flex flex-col items-start justify-center gap-y-2 w-full pt-5 pb-8'>
        <h1 className='text-section-title-color text-xs font-semibold w-full text-opacity-70'>Kategoriler</h1>
        <div className='grid grid-cols-10 gap-8'>
          {categories && categories.map((category, index) => 
              <CategoriesItem key={index} title={category.title} image={category.image} />
          )}
        </div>
      </div>
    </section>
  )
}
