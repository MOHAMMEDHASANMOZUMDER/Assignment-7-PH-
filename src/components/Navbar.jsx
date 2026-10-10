"use client"
import Image from 'next/image';
import Link from 'next/link';
import { CurrTime } from '@/lib/currTime';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar =({data}) => {
    const pathname = usePathname();
    const [active, setActive]=useState(false)
    return (
        <div className='border-b-1 border-slate-300 fixed top-0 left-0 z-50 w-full bg-white'>
            <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                    <Link href='/' className='flex items-center'>
                    <span className='bg-green-700 rounded-xl p-3 m-3'>🛒</span>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[20px] font-bold'>বাজার দর</p>
                        <p className='text-[12px] font-[400px] text-slate-500'>{CurrTime}</p>
                    </div>
                    </Link>
                <div><p>Profile</p></div>
            </div>
            <div className='p-4'>
                <ul>
                    <li className='flex gap-8'>
                        {data.map((n) =>{
        const href = `/products/${n.id}`;
        const active = pathname === href;
          return(<Link
            key={n.id}
            href={href}
            className={`rounded-xl p-2 font-semibold ${active? "bg-green-700 text-white":"hover:bg-green-700 hover:text-white"}`}>
            {n.nameBn} {n.icon}
          </Link>) })};
        </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;