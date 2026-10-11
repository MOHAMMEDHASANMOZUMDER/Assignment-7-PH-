"use client";
import Image from "next/image";
import Link from "next/link";
import { CurrTime } from "@/lib/currTime";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Label, ProgressBar } from "@heroui/react";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = ({ data }) => {
    const {data:session,isPending,error}=useSession();
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [open,setOpen]=useState(false)
  const router=useRouter();
  if(isPending){
  return(
      <div className="flex items-center justify-center">
        <ProgressBar isIndeterminate aria-label="Loading" className="w-64">
      <Label>Loading...</Label>
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
      </div>
    );
}

const handlesignout=async()=>{
  await signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/sign-in");
      toast.success("সাইন আউট সফল হয়েছে")
    },
  },
});
}
  return (
    
    <div className="border-b border-slate-300 fixed top-0 left-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center">
            <span className="bg-green-700 rounded-xl p-3 m-3">🛒</span>
            <div className="flex flex-col gap-1">
              <p className="text-[20px] font-bold">বাজার দর</p>
              <p className="text-[12px] font-[400px] text-slate-500">
                {CurrTime}
              </p>
            </div>
          </Link>
          <div>
            {
                session?.user?
<div className="relative w-fit mt-4 hover:cursor-pointer hover:bg-gray-200 rounded-2xl p-2">
  <button onClick={()=>setOpen(!open)} className="flex items-center gap-3 px-2 py-1 hover:cursor-pointer">
    <span className="flex h-7 w-11 items-center justify-center rounded-full bg-green-700 font-bold text-white">
      {session.user.name[0]}
    </span>
    <span className="font-medium text-[#26352b]">
      {session.user.name}
    </span>
    <span className="text-xs text-gray-500">▾</span>
  </button>

  {
    open&&<div className="absolute right-0 top-full z-50 mt-3  rounded-[20px] border border-[#dce5dd] bg-[#fbfdfb] p-5 shadow-lg">
    <div className="mb-4">
      <p className="text-lg text-gray-400">{session.user.name}</p>
      <p className="text-sm text-gray-400">
       {session.user.email}
      </p>
    </div>

    <a href="/profile" className="mb-3 flex items-center gap-2 text-md text-[#26352b] hover:text-green-700 hover:bg-gray-200 p-1 rounded-2xl">
      <span>👤</span>
      <span>আমার প্রোফাইল</span>
    </a>

    <button onClick={handlesignout} type="button" className="flex items-center gap-2 text-md text-red-500 hover:text-red-700 hover:bg-red-100 p-1 rounded-2xl hover:cursor-pointer">
      <span>↩</span>
      <span>সাইন আউট</span>
    </button>
  </div>
  }
</div>: <div className="flex gap-2 mt-3">
    <Link href={"/sign-in"} className="font-semibold px-4 py-2 rounded-md max-w-[120px] hover:bg-gray-200 hover:cursor-pointer">
    সাইন ইন
        </Link>
        <Link href={"/sign-up"} className="bg-green-700 text-white font-semibold px-4 py-2 rounded-md max-w-[120px] hover:bg-green-800 hover:cursor-pointer">
          সাইন আপ
        </Link>
</div> }
          </div>
        </div>
        <div className="p-4">
          <ul>
            <li className="flex gap-8">
              {data.map((n) => {
                const href = `/products/${n.id}`;
                const active = pathname === href;
                return (
                  <Link
                    key={n.id}
                    href={href}
                    className={`rounded-xl p-2 font-semibold ${active ? "bg-green-700 text-white" : "hover:bg-green-700 hover:text-white"}`}
                  >
                    {n.nameBn} {n.icon}
                  </Link>
                );
              })}
              ;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
