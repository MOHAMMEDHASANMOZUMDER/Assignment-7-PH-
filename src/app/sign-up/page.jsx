"use client"
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useState } from "react";
import 

const SignUppage = () => {
    const [password,setPassword]=useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
   const onSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Form validation successful!");
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
       
           <View className="flex-1 justify-center px-5 gap-4">
      <TextField isRequired>
        <Label>Password</Label>
        <Input placeholder="Create a password" secureTextEntry />
      </TextField>

      <TextField isInvalid>
        <Label isInvalid>Confirm password</Label>
        <Input 
          placeholder="Confirm your password" 
          secureTextEntry 
        />
        <FieldError>Passwords do not match</FieldError>
      </TextField>
    </View>
       
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
       
         );
};

export default SignUppage;