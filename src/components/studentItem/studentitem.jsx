import React from 'react'
import slide from '../../assets/Group 73.svg'
import karzina from '../../assets/Group 10.svg'
import Button from '../button/button'
export default function Studentitem(props) {
     const { e }=props
    return (
   
    <div className='w-[22%] max-sm:w-[45%] flex items-center flex-col gap-[20px] shadow-[0px_0px_30px_0px_#0000001A] '>
        
     <img src={e.img} alt="" />
     <div className='flex items-center flex-col gap-[20px]  px-3 py-5'> 
     <img src={slide} alt="" />
     <p className='text-[13px] max-sm:w-[80%] text-center max-sm:text-[10px]'>{e.name}</p>
     <h1 className='text-[30px] max-sm:text-[18px] text-[#1D6BDD] font-black'>{e.price}</h1>
     <div className='flex justify-between gap-5 items-center'>
        <button className='border border-[#C7C7C7] max-sm:px-2 max-sm:py-0.70 max-sm:text-[14px] py-0.91 px-3 w-auto text-[22px]'>-</button>
        <button className='border border-[#C7C7C7] max-sm:px-2 max-sm:py-0.70 max-sm:text-[14px] py-0.91 px-3 text-[#707070]  w-auto text-[22px]'>1</button>
        <button className='border border-[#C7C7C7] max-sm:px-2 max-sm:py-0.70 max-sm:text-[14px] py-0.91 px-3 w-auto text-[22px]'>+</button>
        <Button className=" px-1"><img src={karzina} alt="" /></Button>
     </div>
</div>
    </div>
  )
}
