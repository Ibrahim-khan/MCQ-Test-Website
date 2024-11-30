"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick)
    }

  return (
    <div className=''>
        
        <div className="hidden md:block">
            <div className='flex md:pl-2 lg:pl-10 my-10 md:gap-5 lg:gap-10 font-semibold py-4 text-blackish bg-gray-100 text-[14px] lg:text-[16px]'>
                <div>
                    <Image
                    className = "rounded-full"
                    src="/logo.jpg"
                    width={50}
                    height={50}
                    alt="logon"
                    />
                </div>
                <Link className='navbar__link relative' href='/'>
                    হোম
                </Link>
                <Link className='navbar__link relative' href='/exams'>
                    পরীক্ষাসমূহ
                </Link>
                <Link className='navbar__link relative' href='/enroll'>
                    পরীক্ষা দিন
                </Link>
                <Link className='navbar__link relative' href='/syllabus'>
                    সিলেবাস
                </Link>
                <Link className='navbar__link relative' href='/result'>
                    ফলাফল
                </Link>
                <Link className='navbar__link relative' href='/about'>
                    আমরা
                </Link>
                <Link className='navbar__link relative' href='/notice'>
                    নোটিশ বোর্ড 
                </Link>
                <Link className='navbar__link relative' href='/regulations'>
                    নিয়মাবলী 
                </Link>
                <Link className='navbar__link relative' href='/signin'>
                    সাইন ইন  
                </Link>
                <Link className='navbar__link relative' href='/signup'>
                    সাইন আপ  
                </Link>
            </div>
        </div>  
        <div className='md:hidden flex items-center'>
            <button
                className='inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-black 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={toggleNavbar}
            >
                {isClick ? (
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
        </div>
        {isClick && (
            <div className='md:hidden text-center'>
                <div className='px-2 pt-2 pb-3 space-y-1 space-x-3 sm:px-3'>
                    
                <Link className='navbar__link relative text-[12px]' href='/'>
                    হোম
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/exams'>
                    পরীক্ষাসমূহ
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/enroll'>
                    পরীক্ষা দিন
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/syllabus'>
                    সিলেবাস
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/result'>
                    ফলাফল
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/about'>
                    আমরা
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/notice'>
                    নোটিশ বোর্ড 
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/regulations'>
                    নিয়মাবলী 
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/signin'>
                    সাইন ইন  
                </Link>
                <Link className='navbar__link relative text-[12px]' href='/signup'>
                    সাইন আপ  
                </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar;
