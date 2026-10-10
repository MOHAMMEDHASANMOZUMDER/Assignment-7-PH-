import PriceCard from "@/components/Card";
import ProductSort from "@/components/ProductSort";
const Detailpage = async({params}) => {
  const {category}=await params
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${category}`);
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
        <ProductSort detailprod={pdata}/>
            </div>
    </main>
  );
};

export default Detailpage;
