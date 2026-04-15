import React from 'react'
import img from '../../assets/Footer_1920.svg'
import img2 from '../../assets/Footer_360.svg'
export default function Footer() {
  return (
    <div className='w-full mt-20'><img className='w-full max-sm:hidden' src={img} alt=""  /><img src={img2} className='lg:hidden  w-full' alt="" /></div>
  )
}
