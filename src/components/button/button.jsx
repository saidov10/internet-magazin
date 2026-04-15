import React, { Children } from 'react'
import img from '../../assets/Group 61.svg'
export default function Button(props) {
    const {text,className="",children}=props
  return (
    <button className={`${className} bg-[#167FFE] flex items-center justify-center gap-[10px] py-1.5  text-[18px] text-white`}>{children} {text}</button>
  )
}
