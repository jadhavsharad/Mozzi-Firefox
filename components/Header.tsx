import Image from 'next/image';
import logo from '@/assets/firefoxLogo.svg'
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
        {/* Desktop Version */}
            <div className={`relative z-[999999] flex items-center justify-between px-12 py-4 bg-zinc-900  text-white rounded-full border border-zinc-700 text-xs xl:text-sm`}>
                <div>
                    <nav>
                        <ul className='flex items-center gap-4'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#schedule">Schedule</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='absolute -bottom-1/2 left-1/2 -translate-x-1/2  border border-transparent rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 bg-clip-border '>
                    <div className='flex justify-center gap-4 py-2  px-6 rounded-[inherit] items-center bg-black '>
                        
                    <h1>Mozzi</h1>
                    <Image src={logo} width={500} height={500} className='w-8 h-8 hover:rotate-45 -rotate-12 duration-200 cursor-pointer' alt='Logo' />
                    <h1>Fire</h1>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className='flex items-center gap-6'>
                            <li><a href="#register">Register</a></li>
                            <li><a href="#ticket">Tickets</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;