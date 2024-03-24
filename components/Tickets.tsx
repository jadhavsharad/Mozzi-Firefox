import React from 'react';
import element from '@/assets/ticket_element.svg'
import Image from 'next/image';
const Ticket: React.FC = () => {
  return (
    <div id='ticket'>
      <div className='min-h-svh bg-zinc-950 bg-grid-zinc-800/50 flex items-center justify-center relative text-white'>
        <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="w-1/2 hidden lg:block">
          <Image width={1000} height={1000} src={element} alt='element' />
        </div>
        <div className="w-full lg:w-1/2 relative flex items-center">
          <div className='absolute h-72 w-52 p-4 border border-orange-500 rounded-2xl bg-zinc-950 scale-90 left-[50%] hover:left-[65%] duration-300 cursor-pointer flex flex-col justify-between'>
            <h1 className='text-2xl bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent text-center font-bold'>Regular</h1>
            <div className='flex flex-col text-2xl text-center'>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Get</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>At</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Rs. 499</span>
            </div>
            <button className='border ticket_buy_button py-2 font-bold border-orange-500 rounded-[100px]'>Buy Now</button>
          </div>
          <div className='absolute h-72 w-52 p-4 border border-orange-500 rounded-2xl bg-zinc-950 scale-90 right-[50%] hover:right-[65%] duration-300 cursor-pointer flex flex-col justify-between'>
            <h1 className='text-2xl bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent text-center font-bold'>VIP</h1>
            <div className='flex flex-col text-2xl text-center'>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Get</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>At</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Rs. 699</span>
            </div>
            <button className='border ticket_buy_button py-2 font-bold border-orange-500 rounded-[100px]'>Buy Now</button>
          </div>
          <div className='absolute h-72 w-52 p-4 border border-orange-500 rounded-2xl bg-zinc-950 flex left-1/2 -translate-x-1/2 flex-col justify-between'>
            <h1 className='text-2xl bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent text-center font-bold'>Early Bird</h1>
            <div className='flex flex-col text-2xl text-center'>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Get</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>At</span>
            <span className='bg-gradient-conic from-white to-orange-500 bg-clip-text text-transparent'>Rs. 249</span>
            </div>
            <button className='border ticket_buy_button py-2 font-bold border-orange-500 rounded-[100px]'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;