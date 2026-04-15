import React from 'react'
import img1 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png'
import img2 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).png'
import img3 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (2).png'
import img4 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (3).png'
import img5 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.svg'
import img6 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).svg'
import img7 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (2).svg'
import img8 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (3).svg'
import img9 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (4).svg'
import img10 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (5).svg'
import img11 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (6).svg'
import img12 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (7).svg'
import img13 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (8).svg'
import img14 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (9).svg'
import img15 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (10).svg'
import img16 from '../../assets/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (11).svg'

import Studentitem from '../studentItem/studentitem'

const products=[
    {
        id:1,
        img:img1,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:2,
        img:img2,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:3,
        img:img3,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:4,
        img:img4,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:5,
        img:img5,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:6,
        img:img6,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:7,
        img:img7,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:8,
        img:img8,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
   
    {
        id:9,
        img:img9,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:10,
        img:img10,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:11,
        img:img11,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:12,
        img:img12,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:13,
        img:img13,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:14,
        img:img14,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:15,
        img:img15,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    },
    {
        id:16,
        img:img16,
        name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price:"2 491 ₽/шт."
    }
   
]

export  function Studentlist() {
  return (
    <div className='w-[100%] flex justify-between max-sm:flex-wrap max-sm:px-5 max-sm:gap-[20px_0px] px-[60px] '>
   {products.map((e)=>(
    <Studentitem key={e.id} e={e} />
   )).slice(0,4)}
    </div>
  )
}




export  function Studentlist2() {
  return (
   <div className='w-[100%] flex justify-between max-sm:flex-wrap max-sm:px-5 max-sm:gap-[20px_0px] px-[60px]'>
   {products.map((e)=>(
    <Studentitem key={e.id} e={e} />
   )).slice(4,8)}
    </div>
  )
}
export  function Studentlist3() {
  return (
   <div className='w-[100%] flex justify-between max-sm:flex-wrap max-sm:px-5 max-sm:gap-[20px_0px] px-[60px]'>
   {products.map((e)=>(
    <Studentitem key={e.id} e={e} />
   )).slice(8,12)}
    </div>
  )
}
export  function Studentlist4() {
  return (
   <div className='w-[100%] flex justify-between max-sm:flex-wrap max-sm:px-5 max-sm:gap-[20px_0px] px-[60px]'>
   {products.map((e)=>(
    <Studentitem key={e.id} e={e} />
   )).slice(12,16)}
    </div>
  )
}
