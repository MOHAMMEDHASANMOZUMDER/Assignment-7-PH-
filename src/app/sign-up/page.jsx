"use client"
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import { signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignUppage = () => {
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
        password:data.password
    });
    if (error) {
  toast.error("Signup failed");
    }
    else toast.success("Sign up successfull")
}


     const handleChange = (event) => {
    setPass(event.target.value);
  };
    return (
       <div className="min-h-screen bg-[#f0f5f0] px-4 py-12">
         <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
           {/* Heading */}
           <div className="mb-7 text-center">
             <h1 className="text-3xl font-bold text-[#17251c]">
               অ্যাকাউন্ট তৈরি করুন
             </h1>
             <p className="mt-2 text-base text-slate-500">
              বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
             </p>
           </div>
       {/* Form Card */}
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
             সাইন ইন
           </Button>
       
           {/* Divider */}
           <div className="flex items-center gap-4">
             <div className="h-px flex-1 bg-slate-200" />
             <span className="text-sm text-slate-500">অথবা</span>
             <div className="h-px flex-1 bg-slate-200" />
           </div>
       
           {/* Social Sign-in */}
           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
             <Button
               type="button"
               variant="secondary"
               className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
             >
               <span className="font-bold text-base text-blue-600">G</span>
               Google দিয়ে চালিয়ে যান
             </Button>
       
             <Button
               type="button"
               variant="secondary"
               className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
             >
               <span className="font-bold text-base">●</span>
               GitHub দিয়ে চালিয়ে যান
             </Button>
           </div>
       
           {/* Sign-up Link */}
           <p className="text-center text-sm text-slate-500">
             অ্যাকাউন্ট নেই?{" "}
             <a
               href="/signup"
               className="font-medium text-green-700 underline underline-offset-2 hover:text-green-800"
             >
               সাইন আপ করুন
             </a>
           </p>
         </Form>
       </div>
       
       {/* Back Home */}
       
         </div>
       </div>
       
         )}

export default SignUppage;