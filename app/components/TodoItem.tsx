
'use client'
import React from 'react'
import { DeleteTodo_SSR, ToggleTodo_SSR } from './PrismaHandlers'



export type postPropsType={
    id:string
    title:string
    description:string
    complete:boolean
    
}

export default function ({id,title,description,complete}:postPropsType) {



  return (

    <li className=' w-[95%] md:w-[30%]  m-auto flex flex-col  justify-center'>

        <div className='flex flex-row p-2 bg-slate-100 justify-between'>


          <div>
            <input
         defaultChecked={complete}
         onChange={e=>ToggleTodo_SSR(id,e.target.checked)} 
          type="checkbox" id={id} 
          className='  cursor-pointer default peer' />
          
          <label
        htmlFor={id} 
        className='mx-5 cursor-pointer text-black peer-checked:line-through peer-checked:text-green-600'>{title}</label> 

          </div>


    

          <div className={` text-[15px] ${complete?"text-green-900":"text-red-600"}`}>  {complete ?"published ":"Not Published"}</div>


          <div>  <button type='submit' className='w-[30px] rounded bg-red-500 cursor-pointer' onClick={()=>DeleteTodo_SSR(id)}> X </button>
          </div>
        </div>









        

        <div className='flex flex-row  bg-indigo-800 justify-center items-center content-center p-3 peer-checked:bg-green-600'>

    
        <label htmlFor={id} className='cursor-pointer '>{description}</label>

        </div>




      
        </li>
  )
}
