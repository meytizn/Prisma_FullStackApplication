
import Link from "next/link";
import TodoItem from "./components/TodoItem";
import { GetFetch_SSR } from "./components/PrismaHandlers";



export default async function Home() {

  // await prisma.post.create({data:{title:"Ai",description:"false",complete:true}})   #used to create manually data in prisma
  
  const posts=await GetFetch_SSR()
  
  


  return (
    <>
    <header className="flex flex-row justify-between md:justify-between p-5 w-[100%] content-center items-center h-[76px] bg-indigo-800 text-white text-[30px] ">
      
    <Link href="#">weblog </Link>
      <Link href="/newpost">new</Link>
      </header>




      <ul className="flex flex-col justify-center w-[100%] text-center gap-6 my-6   md:flex-row flex-wrap md:justify-start md:items-start">

        {posts.map((post)=>(
          <TodoItem key={post.id } {...post} />
          ))}

      </ul>


      
    </>
  );
}
