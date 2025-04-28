"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Post_Newpost_SSR } from '../components/PrismaHandlers'



  function formHandler(data:FormData){

    const title = data.get("title")?.valueOf()
    const description = data.get("description")?.valueOf()
    const complete=false

    if (typeof title!=="string" ||title.length===0) {
      return alert("invalid title")
    }
    if (typeof description!=="string" ||description.length===0) {
      return alert("invalid description")
    }

    Post_Newpost_SSR(title,description,complete)


}




export default function page() {
  
  return (
    <>
        <header className="flex flex-row justify-between md:justify-between p-5 w-[100%] content-center items-center h-[76px] bg-indigo-800 text-white text-[30px] "> 
        <Link href="#">Post admin panel </Link>  
          </header>



          <form action={formHandler} className='flex gap-3 flex-col my-8 p-3 m-auto md:w-[50%]'>

        <input 
        type="text"
        name="title"
        placeholder='Title'
        className='h-[60px] border border-slate-300 bg-transparent rounded px-2 py-1  outline-none focus-within:border-slate-100'
         />

        <input 
        type="text"
        name="description"
        placeholder='description'
        className='h-[100px] border border-slate-300 bg-transparent rounded px-2 py-1  outline-none focus-within:border-slate-100'
         />




         <div className='flex flex-row gap-5 justify-end'>

         <button  type='submit' className='border border-slate-300 cursor-pointer bg-transparent rounded px-2 py-1  outline-none focus-within:border-slate-100'>create</button>
         
         <Link href='/' className=' border border-slate-300 bg-transparent cursor-pointer rounded px-2 py-1  outline-none focus-within:border-slate-100'>Cancel</Link>
         
         </div>

  

          </form>
    </>
  )
}
