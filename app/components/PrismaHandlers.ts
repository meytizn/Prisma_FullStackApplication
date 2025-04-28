"use server"

import { prisma } from '../db'
import { redirect } from 'next/navigation'



export async function GetFetch_SSR(){
    return prisma.post.findMany()
  }





export async function Post_Newpost_SSR(title:string,description:string,complete:boolean){
  await prisma.post.create({data:{title,description,complete}})
  return redirect("/")
  
}






// used to update checkbox in posts
export async function ToggleTodo_SSR(id:string,complete:boolean){
  await prisma.post.update( { where:  {id} , data:  {complete} })
  return redirect("/")
}





export async function DeleteTodo_SSR(id: string) {
    await prisma.post.delete({  where: { id }   });
    return redirect("/")
  }

