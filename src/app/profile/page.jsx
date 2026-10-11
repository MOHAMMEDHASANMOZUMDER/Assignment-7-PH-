"use client";
import { updateUser, useSession} from "@/lib/auth-client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import toast from "react-hot-toast";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export default function Basic() {
    const router=useRouter();
    const {data:session,isPending,error}=useSession();
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
    const { data:authData, error } = await updateUser({
        name:data.name
        });
        if (error) {
      toast.error("Update name failed");
        }
        else toast.success("Update name successfull")
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
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8">
      <div className="mx-auto max-w-230">
        <h1 className="text-3xl font-bold text-slate-900">
          আমার প্রোফাইল
        </h1>
        <p className="mt-1 text-slate-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>


        <section className="mt-8 flex flex-col gap-4 rounded-[20px] border border-[#dce5dc] bg-white/80 p-6 sm:flex-row sm:items-center">
          <div className="flex h-10 w-24 shrink-0 items-center justify-center rounded-full bg-green-700 text-xl font-semibold text-white">
           {session?.user.name[0]}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-medium text-slate-900">
             {session?.user.name}
            </h2>
            <p className="break-all text-slate-500">
            {session?.user.email}
            </p>
          </div>

          <Button onClick={handlesignout} type="button" className="rounded-xl border border-red-500 bg-transparent px-5 py-3 font-semibold text-red-500 hover:bg-red-50">
            ↪ সাইন আউট
          </Button>
        </section>

        <section className="mt-7 space-y-8 rounded-[20px] border border-[#dce5dc] bg-white/80 p-6">
          <Form onSubmit={onSubmit}>
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              নাম হালনাগাদ করুন
            </h2>

            <TextField
              isRequired
              name="name"
              defaultValue={session?.user.name}
              className="w-full"
            >
              <Label className="mb-2 block text-lg text-slate-900">
                নাম
              </Label>
              <Input className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700" />
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="mt-4 rounded-xl bg-green-700 px-5 py-3 font-bold text-white shadow hover:bg-green-800"
            >
              নাম হালনাগাদ করুন
            </Button>
          </Form>

          <div className="border-t border-slate-200" />
        </section>
      </div>
    </main>
  );}