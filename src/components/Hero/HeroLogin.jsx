import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";

function HeroLogin() {
    const [selected, setSelected] = useState("TR")
    const countries = {
        US : "+1",
        TR : "+90",
        IN : "+55",
        DE : "+999",
        IT : "+234"    
    }


    return (
        <>
        <div className='bg-gray-background w-[400px] rounded-lg flex flex-col gap-y-3 p-4 items-center justify-center'>
                <h5 className='text-header-hover-color text-[16px] tracking-normal font-semibold'>
                Giriş yap veya kayıt ol
                </h5>
                
                <div className='flex gap-x-3'>
                <ReactFlagsSelect
                    className="flag-select"
                    countries={Object.keys(countries)}
                    customLabels={countries}
                    selected={selected}
                    onSelect={code => setSelected(code)}
                />

                <label className="flex-1 relative group block">
                    <input required className="rounded-sm w-full h-[56px] px-4 border-2 border-border-gray-color group-hover:border-brand-color outline-none focus:border-brand-color text-xs pt-2 peer transition-all"/>
                    <span className="absolute top-0 left-0 flex items-center px-4 h-full text-xs text-custom-dark-gray peer-focus:h-5 peer-focus:text-brand-color peer-focus:text-[11px] peer-focus:tracking-wide peer-valid:h-5 peer-valid:text-brand-color peer-valid:text-[11px] peer-valid:tracking-wide transition-all whitespace-nowrap">Telefon Numarası</span>
                </label>
                </div>

                <button className="h-[46px] text-header-hover-color bg-brand-yellow w-full rounded-lg hover:text-brand-yellow hover:bg-brand-color text-xs font-semibold transition-colors">
                Telefon numarası ile devam et
                </button>
            </div>
        </>
  )
}

export default HeroLogin
