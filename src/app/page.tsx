import Link from 'next/link';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTasks() {
  const todos = prisma.todoItem.findMany();

  return todos
}

async function createTask(data: FormData){
  'use server'
  console.log('test')
}

export default async function Home() {
  const todos = await getTasks()

  

  return (
    <>

      <section className='grow flex justify-end px-[30px] items-center' >
        <Link href="/tasks/new"><button className='border h-[70px] w-[70px] bg-white text-4xl rounded-[50%] drop-shadow-lg transition-all hover:scale-110'>+</button></Link>
      </section>
      
      <main className="grow-[20] flex flex-col justify-center items-center" >

        <p className='text-3xl font-medium' >Tasks</p>
        <ul>
          <li>{todos.map((t) => t.task)}</li>
        </ul>

      </main>
    </>
  );
}
