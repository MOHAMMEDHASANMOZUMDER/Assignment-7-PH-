import Image from 'next/image';
import Link from 'next/link';
import { CurrTime } from '@/lib/currTime';

const Navbar = async() => {
    
    const res=await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const data=await res.json()
    console.log(data)
    return (
        <div className='border-b-1 border-slate-300'>
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
                        {
                            data.map(n=><Link href='/' key={n.id} className='flex gap-2 hover:bg-green-700 rounded-xl p-2 font-semibold'>
                                <p>{n.nameBn}</p>
                        <span>
                            {n.icon}
                        </span>
                            </Link>)
                        }
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;