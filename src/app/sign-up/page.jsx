"use client"
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import { signUp,signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const SignUppage = ()=>{
  const router=useRouter();
    const [pass,setPass]=useState("")
    const[show1, setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
     const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
        const { data:authData, error } = await signUp.email({
        email:data.email, 
        name:data.name,
        password:data.password,
         callbackURL: "/",
    });
    if (error) {
  toast.error("অ্যাকাউন্ট তৈরি করা যায়নি");
    }
    else toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে")
    router.push("/")
}


     const handleChange = (event) => {
    setPass(event.target.value);
  };

  const handleGoogle= async()=>{
      const {authData,error1}= await signIn.social({
        provider:"google",
        
      })
      if (error1) {
  toast.error("গুগল সাইন ইন সফল হয়নি");
    }
    else toast.success("গুগল সাইন ইন সফল হয়েছে")
    router.push("/")
    }
     const handleGit= async()=>{
      const {authData,error2}= await signIn.social({
        provider:"github",
        
      })
      if (error2) {
  toast.error("গিটহাব সাইন ইন সফল হয়নি");
    }
    else toast.success("গিটহাব সাইন ইন সফল হয়েছে")
    router.push("/")
    }
    return (
       <div className="min-h-screen bg-[#f0f5f0] px-4 py-12">
         <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
           <div className="mb-7 text-center">
             <h1 className="text-3xl font-bold text-[#17251c]">
               অ্যাকাউন্ট তৈরি করুন
             </h1>
             <p className="mt-2 text-base text-slate-500">
              বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
             </p>
           </div>
       <div className="w-full rounded-[20px] border border-[#dce5dd] bg-[#fbfdfb] p-6 sm:p-8">
         <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
             <TextField
             isRequired
             name="name"
             type="text"
             validate={(value) => {
               if (value.length<3) {
                 return "Please enter a valid name";
               }
               return null;
             }}
           >
             <Label className="mb-2 block text-base font-medium text-slate-800">
              নাম
             </Label>
             <Input
               placeholder="যেমন: ওবায়দুল কাদির"
               className="w-full rounded-xl border border-[#cbd5ce] bg-transparent px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
             />
             <FieldError />
           </TextField>
           <TextField
             isRequired
             name="email"
             type="email"
             validate={(value) => {
               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                 return "Please enter a valid email address";
               }
               return null;
             }}
           >
             <Label className="mb-2 block text-base font-medium text-slate-800">
               ইমেইল
             </Label>
             <Input
               placeholder="you@example.com"
               className="w-full rounded-xl border border-[#cbd5ce] bg-transparent px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
             />
             <FieldError />
           </TextField>
       
           <TextField
             isRequired
             minLength={8}
             name="password"
             type={show1?"text":"password"}
             validate={(value) => {
               if (value.length < 8) {
                 return "Password must be at least 8 characters";
               }
               if (!/[A-Z]/.test(value)) {
                 return "Password must contain at least one uppercase letter";
               }
               if (!/[0-9]/.test(value)) {
                 return "Password must contain at least one number";
               }
               return null;
             }}
           >
             <Label className="mb-2 block text-base font-medium text-slate-800">
               পাসওয়ার্ড
             </Label>
             <div className="relative inline-block">
                <Input
             value={pass}
        onChange={handleChange}
               placeholder="কমপক্ষে ৮ অক্ষর"
               className="w-full rounded-xl border border-[#cbd5ce] bg-transparent px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
             />
             <button className="hover:cursor-pointer absolute right-3 top-1/2 -translate-y-1/2" type="button" onClick={()=>setShow1(!show1)}>{show1?<Image src={"/cl.png"} height={30} width={30} alt="" />:<Image Image src={"/op.png"} height={25} width={25} alt="" />}</button>
             </div>
             <FieldError />
           </TextField>
           <TextField
             isRequired
             minLength={8}
             name="password"
             type={show2?"text":"password"}
            validate={(value) => {
            if (value !== pass) {
            return "Passwords do not match";
            }
            return null;
            }}>
             <Label className="mb-2 block text-base font-medium text-slate-800">
               পাসওয়ার্ড  নিশ্চিত করুন
             </Label>
             <div className="relative inline-block">
                <Input
               placeholder="কমপক্ষে ৮ অক্ষর"
               className="w-full rounded-xl border border-[#cbd5ce] bg-transparent px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                <button className="hover:cursor-pointer absolute right-3 top-1/2 -translate-y-1/2" type="button" onClick={()=>setShow2(!show2)}>{show2?<Image src={"/cl.png"} height={30} width={30} alt="" />:<Image Image src={"/op.png"} height={25} width={25} alt="" />}</button>
             </div>
             <FieldError />
           </TextField>
       
           <Button
             type="submit"
             className="w-full rounded-xl bg-green-700 py-3 font-bold text-white shadow-md transition hover:bg-green-800"
           >
             সাইন আপ
           </Button>
       
           <div className="flex items-center gap-4">
             <div className="h-px flex-1 bg-slate-200" />
             <span className="text-sm text-slate-500">অথবা</span>
             <div className="h-px flex-1 bg-slate-200" />
           </div>
           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
             <Button
             onClick={handleGoogle}
               type="button"
               variant="secondary"
               className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
             >
           <Image width={30} height={30} alt="" src="/google-logo.png"></Image>
               Google দিয়ে চালিয়ে যান
             </Button>
       
             <Button
             onClick={handleGit}
               type="button"
               variant="secondary"
               className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
             >
               <Image width={30} height={30} alt="" src="/github-logo.png"></Image>
               GitHub দিয়ে চালিয়ে যান
             </Button>
           </div>
           <p className="text-center text-sm text-slate-500">
             অলরেডি অ্যাকাউন্ট আচে?
             <a
               href="/sign-in"
               className="font-medium text-green-700 underline underline-offset-2 hover:text-green-800">
               সাইন ইন করুন
             </a>
           </p>
         </Form>
       </div>
         </div>
       </div>
       
         )}

export default SignUppage;