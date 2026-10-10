import { translateNumbers } from "@/lib/bnnumber";
import { UnitBn } from "@/lib/unit";
import Link from "next/link";
const DetailbyIdpage = async({params}) => {
    const {id}=await params;
    const res=await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)
    const data=await res.json();

    function avg(d){
    let cnt=0;
    for(let i=0;i<d.markets.length;i++)
    {
      cnt+=((d.markets[i].min+d.markets[i].max)/2)
    }
    return Math.floor(cnt/d.markets.length);
    }
    return (
        <div>
            <div className="mx-auto max-w-7xl">
<div className="mb-5 text-xs text-slate-500">
<Link href="/" className="hover:underline">হোম</Link> &gt; <Link href="">ডাল</Link> &gt; মুগ ডাল
</div>
    <section className="mb-4 flex items-center justify-between rounded-xl bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f0f5f0] text-2xl">
          {data.image}
        </div>

        <div>
          <h1 className="text-[30px] font-bold">{data.nameBn}</h1>
          <p className="text-[14px] text-slate-500">
            প্রতি {UnitBn(data.unit)} · {data.categoryNameBn}
          </p>
          <p className="mt-1 text-[14px] text-slate-400">
            বাংলাদেশের বিভিন্ন বাজারের সর্বশেষ দর
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-[#f0f5f0] px-4 py-3 text-center">
        <p className="text-[14px] text-slate-500">আজকের দর</p>
        <p className="text-[30px] font-bold">{translateNumbers(data.today)}</p>
        <p className="text-[14px] text-slate-500">টাকা / {UnitBn(data.unit)}</p>
        <p className="text-[14px] text-slate-500">{data.change.dir==="up"?<span className="text-red-700">▲</span>:data.change.dir==="down"?<span className="text-green-700">▼</span>:<span>—</span>} {translateNumbers(Math.abs(data.change.pct))} %</p>
      </div>
    </section>

    {/* Price Summary and Table */}
    <section className="rounded-xl bg-white p-4">
      <h2 className="mb-3 text-lg font-bold">দামের সারসংক্ষেপ</h2>

      <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-100 p-3">
          <p className="text-[12px] text-slate-500">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold text-green-600">
            {
          translateNumbers( Math.min(...data.markets.map(i=>i.min)))
} টাকা
          </p>
          <p className="text-[12px] text-slate-400">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-slate-100 p-3">
          <p className="text-[12px] text-slate-500">সর্বোচ্চ দাম</p>
          <p className="text-2xl font-bold text-red-500">
           { translateNumbers(Math.max(...data.markets.map(i=>i.max)))} টাকা
          </p>
          <p className="text-[12px] text-slate-400">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="rounded-xl border border-slate-100 p-3">
          <p className="text-[12px] text-slate-500">গড় দাম</p>
          <p className="text-2xl font-bold text-green-600">
            { translateNumbers(avg(data))} টাকা
          </p>
          <p className="text-[12px] text-slate-400">প্রতি {UnitBn(data.unit)} -এর হিসাবে</p>
        </div>
      </div>

      {/* Market Price Table */}
      <h2 className="mb-3 text-lg font-bold">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-x-auto rounded-lg  border-[0.5px] border-gray-400">
        <table className="w-full min-w-[550px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="px-7 py-3 font-medium">বাজার</th>
              <th className="px-3 py-3 font-medium">বিভাগ</th>
              <th className="px-3 py-3 text-right font-medium">
                সর্বনিম্ন
              </th>
              <th className="px-3 py-3 text-right font-medium">
                সর্বোচ্চ
              </th>
              <th className="px-7 py-3 text-right font-medium">
                গড়
              </th>
            </tr>
          </thead>

          <tbody>
            {
              data.markets.map((m,index)=><tr key={m.market} className={index % 2 === 0 ? "bg-[#F0F5F0]" : "bg-white"}>
              <td className="px-7 py-3 font-medium">{m.market}</td>
              <td className="px-2 py-3 text-slate-500">{m.division}</td>
              <td className="px-2 py-3 text-right">{translateNumbers(m.min)}</td>
              <td className="px-2 py-3 text-right">{translateNumbers(m.max)}</td>
              <td className="px-7 py-3 text-right font-semibold">
                {translateNumbers((m.min+m.max)/2)}
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </section>
    <footer className="mt-8 mb-10 text-lg font-semibold text-slate-600">
      {data.image} {data.categoryNameBn}
    </footer>
  </div>
        </div>
    );
};

export default DetailbyIdpage;