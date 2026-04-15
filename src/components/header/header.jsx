import { ChevronDown } from "lucide-react";import React from 'react'

import logo from '../../assets/Group 42.svg'
import karzina from '../../assets/Group 66.png'
import tel from '../../assets/Vector.svg'
import img from '../../assets/Group 61.svg'
import search from '../../assets/Group 34.svg'
import img2 from '../../assets/Vector (2).svg'
import Button from '../button/button'

export default function Header() {
  return (
    <>
    <div className='start flex items-center justify-between max-sm:px-2 px-15 py-[20px] '>
     <div className='flex items-center max-sm:gap-5 gap-10'>
        <img src={logo} alt="" className="max-sm:w-[30%]" />
        <p className='text-[#707070] text-[16px]  border-l border-[#707070] pl-4 max-sm:text-[12px]'>От завода без посредников</p>
     </div>
     <div className='flex items-center max-sm:gap-5 gap-10'>
        <p className='text-[#0A61DE] text-[16px] max-sm:hidden'>Доставка</p>
        <p className='text-[#0A61DE] text-[16px] max-sm:hidden'>Оплата</p>
        <p className='text-[#0A61DE] text-[16px] max-sm:hidden'>Контакты</p>
        <div className='flex items-center gap-2'><img src={tel} alt="" /><h1 className='text-[#1E2126] text-[20px] font-bold max-sm:hidden'>8-800-550-01-09</h1></div>
        <img src={karzina} alt="" className="max-sm:hidden" />
     </div>
    </div>
     <div className="start2 py-[10px] bg-[#EDEDED] flex items-center justify-between max-sm:px-0 px-[60px] gap-[60px]">
       <Button text="Каталог" className='px-5 max-sm:hidden'><img src={img} alt="" /></Button>
       <fieldset className='flex items-center bg-white max-sm:w-[90%] max-sm:m-auto w-[60%] pl-[10px]'>
        <input type="text" className='w-[95%]' placeholder='Поиск' />
        <Button className="px-1.5 "><img src={search} alt="" /></Button>
       </fieldset>
      <fieldset className='max-sm:hidden  flex items-center gap-2'>
        <img src={img2} alt="" />
         <select className='text-[#1E2126] text-[18px] appearance-none'>
         <option value="" >Иркутск </option>
       </select>
       <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#287FE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
      </fieldset>
     </div> 
    </>
  )
}
