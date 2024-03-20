import React from 'react';
import element from '@/assets/hero_element.svg'
import Image from 'next/image';
import { Audiowide } from 'next/font/google';

const redhatdisplay = Audiowide({weight:['400'], subsets: ['latin']})

const Hero: React.FC = () => {
  return (
    <div id='home'>
      {/* Desktop Version */}
      <div className='hidden md:block bg-zinc-950 text-white'>
        <div className='relative bg-grid-white/[0.15] px-12 text-xs overflow-x-hidden md:flex items-center justify-between'>
          <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
          <div className='w-1/2 z-10'>
            <h1 className={`${redhatdisplay.className} md:text-6xl lg:text-7xl xl:text-8xl`}>Mozzi Fire</h1>
            <p className='md:text-lg lg:text-xl'>Embrace the Flame of Innovation with Mozzi Fire</p>
            <hr className='border-none my-4' />
            <div className='flex gap-4 items-center text-xs lg:text-sm'>
              <button className='bg-gradient-to-r from-orange-500 to-white bg-clip-text saturate-200 text-transparent  border border-amber-400 rounded-full px-10 py-3 font-semibold'>Register</button>
              <button className='bg-gradient-to-l from-orange-500 to-white bg-clip-text saturate-200 text-transparent  border border-amber-400 rounded-full px-10 py-3'>Buy Tickets</button>
            </div>
          </div>
          <div className='w-1/2'>
            <Image width={1000} height={1000} alt='element' src={element}  />
          </div>
        </div>
        <div className='flex py-4 justify-center'>
          <small>scroll</small>
          <div className='w-10 h-6 border  border-white rounded-full flex items-center justify-start px-2 rotate-90'>
            <div className='w-1.5 h-1.5 rounded-full bg-white animate-scroll'></div>
          </div>
          <small>down</small>
        </div>
      </div>

    </div>
  );
};

export default Hero;