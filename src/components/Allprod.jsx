"use client"
import PriceCard from "./Card";
import { translateNumbers } from "@/lib/bnnumber";
import { useState } from "react";
const Allprod = ({allpr}) => {
    const [Open,setOpen]=useState(false)
    const [select, setSelect]=useState("default")
    const allprhl=[...allpr].sort((a,b)=>b.today-a.today)
    const allprlh=[...allpr].sort((a,b)=>a.today-b.today)
    return (
       
        <div className="max-w-7xl mx-auto mt-8 flex flex-col gap-4" id="সব-পণ্য">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-[20px]">  সব পণ্য</p>
            <p>  মোট {translateNumbers(allpr.length)}টি পণ্য দেখানো হচ্ছে</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>সাজান</p>
       <div>
         <button onClick={() => setOpen(!Open)} className="rounded-lg border px-2 py-1 bg-white">
       {
        select==="default"?<span>ডিফল্ট</span>:select==="ltoh"?<span>দাম : কম থেকে বেশি</span>:<span>দাম : বেশি থেকে কম</span> 
       } {Open ? "▲" : "▼"}
        </button>

      {Open && (
        <div id="dropdown" className="absolute z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 rounded-lg  bg-white">
    <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
        <li onClick={()=>{setSelect("default"); setOpen(false);}} className="flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
        <span className="w-2.5">{select==="default"&& <span>✔</span>}</span>
        <a className="left inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">ডিফল্ট </a>
      </li>
      <li onClick={()=>{setSelect("ltoh"); setOpen(false);}} className="flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
        <span className="w-2.5">{select==="ltoh"&& <span>✔</span>}</span>
        <a className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">দাম : কম থেকে বেশি</a>
      </li>
      <li onClick={()=>{setSelect("htol"); setOpen(false);}}  className="flex gap-2 items-center hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer">
        <span className="w-2.5">{select==="htol"&& <span>✔</span>}</span>
        <a className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">দাম : বেশি থেকে কম</a>
      </li>
    </ul>
</div>
      )}
       </div>

                </div>
            </div>
           <div className="grid grid-cols-3 gap-4">
            {
                select==="default"?(allpr.map(d=>
                    (<div key={d.id}>
                        <PriceCard products={d}></PriceCard>
                    </div>)
                )):select==="ltoh"?(allprlh.map(d=>
                    (<div key={d.id}>
                        <PriceCard products={d}></PriceCard>
                    </div>)
                )):((allprhl.map(d=>
                    (<div key={d.id}>
                        <PriceCard products={d}></PriceCard>
                    </div>)
                )))

            }
           </div>
        </div>
    );
};

export default Allprod;