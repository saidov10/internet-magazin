import React from 'react'
import bg from '../../assets/tour-1 1.svg'

import doru from '../../assets/йййй 1.svg'
import Button from '../button/button'
import { Studentlist, Studentlist2 ,Studentlist3,Studentlist4} from '../studentList/studentlist'

export default function Content() {
  return (
    <>
    <div  style={{backgroundImage:`url(${bg})`}} className="boxparent1 h-[80vh] bg-cover bg-no-repeat   ">
     <div  className="absolute  inset-0 bg-gray-950/70  max-sm:flex-col  h-[80vh] top-35 flex items-center justify-center ">
      <div className="left w-[45%] max-sm:w-[90%] flex flex-col gap-5 items-start">
        <h1 className='text-[50px] max-sm:text-[30px] text-white'>Новинка в России</h1>
        <p className=' max-sm:text-[15px] text-white text-[30px] max-sm:w-full w-[70%]'>Север - теплоизоляция для сурового климата</p>
        <h1 className='max-sm:hidden text-[50px] text-white font-black'><span className='text-[35px]'>от</span> 850 ₽ <span className='text-[35px]'>за</span> 3м²</h1>
        <Button text="Подробнее" className="max-sm:hidden px-10 "/>
      </div>
      <div className="right max-sm:w-[90%] max-sm:m-auto w-[45%]">
        <img src={doru} alt="" />
         <h1 className='text-[50px] max-sm:text-[40px] max-sm:m-auto lg:hidden text-white font-black'><span className='text-[35px]'>от</span> 850 ₽ <span className='text-[35px]'>за</span> 3м²</h1>
        <Button text="Подробнее" className=" px-10 max-sm:w-full mt-4 lg:hidden "/>
      </div>
     </div>
    </div>
    <div className="boxparent2 mt-20  my-10 max-sm:px-10 px-[60px] flex justify-between items-center ">
       <h1 className='text-[50px] max-sm:text-[25px] text-[#1E2126]'>Теплоизоляци</h1>
       <Button text="Смотреть все" className="px-10 max-sm:hidden" />
    </div>
   <div className="boxparent3 mt-20 my-5">
    <Studentlist/>
   </div>
    <div className="boxparent2 mt-20  my-10 max-sm:px-10 px-[60px] flex justify-between items-center">
       <h1 className='text-[50px] max-sm:text-[25px] text-[#1E2126]'>Строительные блоки</h1>
       <Button text="Смотреть все" className="px-10 max-sm:hidden" />
    </div>
   <div className="boxparent3 mt-20 my-5">
    <Studentlist2/>
   </div>
    <div className="boxparent2 mt-20  my-10 max-sm:px-10 px-[60px] flex justify-between items-center">
       <h1 className='text-[50px] max-sm:text-[25px] text-[#1E2126]'>Листовые материалы</h1>
       <Button text="Смотреть все" className="px-10 max-sm:hidden" />
    </div>
   <div className="boxparent3 mt-20 my-5 ">
    <Studentlist4/>
   </div>
    <div className="boxparent2 mt-20  my-10 max-sm:px-10 px-[60px] flex justify-between items-center">
       <h1 className='text-[50px] max-sm:text-[25px] text-[#1E2126]'>Кровля и водосток</h1>
       <Button text="Смотреть все" className="px-10 max-sm:hidden" />
    </div>
   <div className="boxparent3 mt-20 my-5">
    <Studentlist3/>
   </div> 
   <Button text="Показать еще" className="px-10 max-sm:w-[90%]  m-auto mt-30"/>
    </>
  )
}
