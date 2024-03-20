import React from 'react';

const Register: React.FC = () => {
    return (
        <div id='register'> 
            <div className='min-h-svh flex items-center justify-center bg-grid-zinc-800/60 relative'>
                <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

                <div className='w-full flex justify-center items-center flex-col  z-10'>
                    <h1 className='font-black md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-radial from-blue-400 to-purple-400 text-transparent bg-clip-text saturate-[1.5]'>Get Registered</h1>
                    <hr className='border-none my-8' />
                    <form className='max-w-lg w-full flex flex-col bg-zinc-950 border border-orange-500 px-12 py-12 gap-4 mx-auto text-white rounded-3xl'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input id='name' name='name' type="text" className='bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-400 duration-200 py-2 px-4 rounded-lg outline-none focus:outline-none' autoComplete='off' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input id='email' name='email' type="email" className='bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-400 duration-200 py-2 px-4 rounded-lg outline-none focus:outline-none' autoComplete='off' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Password</label>
                            <input id='password' name='password' type="password" className='bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-400 duration-200 py-2 px-4 rounded-lg outline-none focus:outline-none' autoComplete='off' />
                        </div>
                        <div className='flex gap-4 items-center justify-center'>
                            <input id='newsletter' name='newsletter' type="checkbox" className='accent-orange-500 ' />
                            <label htmlFor="newsletter" className='select-none'>Subscribe to our Newletter</label>
                        </div>
                        <hr className='border-none' />
                        <button className='w-full py-2 border border-orange-500 rounded-lg ' >Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;