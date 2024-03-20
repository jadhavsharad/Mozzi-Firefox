import Image from 'next/image';
import React from 'react';
import schedule_element from '@/assets/schedule_element.svg'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const Schedule: React.FC = () => {
  return (
    <div id='schedule'>
      <div className='flex flex-col bg-grid-zinc-800/50 justify-center items-center w-full min-h-svh relative '>
      <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className='absolute  opacity-25'>
          <Image alt='element' src={schedule_element} width={1000} height={1000} className='w-auto h-auto mx-auto max-h-svh' />
        </div>
        <hr className='border-none my-12' />
        <div>
          <h1 className='font-black md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-radial from-amber-200 to-orange-400 text-transparent bg-clip-text saturate-[1.5]'>Schedule</h1>
        </div>
        <hr className='border-none my-12' />
        <div className=''>
          <div className={`flex justify-evenly w-full gap-4 flex-wrap ${inter.className}`}>
            <div className='aspect-square border border-orange-400 flex flex-col items-center min-w-56 bg-zinc-950 z-10 rounded-3xl'>
              <h1 className='h-3/4 text-6xl flex items-center bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent saturate-200'>20</h1>
              <p className='h-1/4 text-xl font-bold uppercase text-zinc-500'>Date</p>
            </div>
            <div className='aspect-square border border-orange-400 flex flex-col items-center min-w-56 bg-zinc-950 z-10 rounded-3xl'>
              <h1 className='h-3/4 text-6xl flex items-center bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent saturate-200'>April</h1>
              <p className='h-1/4 text-xl font-bold uppercase text-zinc-500'>Month</p>
            </div>
            <div className='aspect-square border border-orange-400 flex flex-col items-center min-w-56 bg-zinc-950 z-10 rounded-3xl'>
              <h1 className='h-3/4 text-6xl flex items-center bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent saturate-200'>2024</h1>
              <p className='h-1/4 text-xl font-bold uppercase text-zinc-500'>Year</p>
            </div>
            <div className='aspect-square border border-orange-400 flex flex-col items-center min-w-56 bg-zinc-950 z-10 rounded-3xl'>
              <h1 className='h-3/4 text-6xl flex items-center bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent saturate-200'>10:00</h1>
              <p className='h-1/4 text-xl font-bold uppercase text-zinc-500'>Time (24hrs)</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;