import PriceCard from "@/components/Card";
const Detailpage = async({params}) => {
    const {category}=await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${category}`);
    const pdata=await res.json();
  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:px-8">
       <div className="mx-auto max-w-7xl space-y-7">
        <section className="flex items-center gap-5 rounded-[22px] border border-[#dce5dc] bg-[#fafcfb] px-6 py-6 sm:px-8">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-3xl">
            {pdata[0].categoryIcon}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#17251c]">{pdata[0].categoryNameBn}</h1>
            <p className="text-base text-[#718071] sm:text-lg">
              {pdata.length} টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Product Count and Sorting */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-base text-[#718071] sm:text-lg">
            মোট {pdata.length} পণ্য দেখানো হচ্ছে
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[#718071]">সাজান</span>

            <button
              type="button"
              className="rounded-xl border border-[#cfd9cf] bg-[#fafcfb] px-3 py-2 text-sm text-[#17251c]"
            >
              ডিফল্ট ⌄
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {
          pdata.map(d=><PriceCard products={d}  key={d.id}/>)
        }

            </div>
            </div>
    </main>
  );
};

export default Detailpage;
