import Hero from "@/components/Hero";
import Image from "next/image";
import Priceinc from "@/components/Priceinc";
import Pricedec from "@/components/Pricedec";
import Allprod from "@/components/Allprod";
import { Suspense } from "react";
import ProductSkeleton from "@/components/Skeleton";

async function Products() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );
  const prodata = await res.json();

  return (
    <>
      <Priceinc priceinc={prodata} />
      <Pricedec pricedec={prodata} />
      <Allprod allpr={prodata} />
    </>
  );
}


const Home =async()=> {
  return (
    <div>
    <Suspense fallback={<ProductSkeleton/>}>
      <Hero/>
    </Suspense>
    <Suspense fallback={
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
      ))}</div>}>
      <Products/>
    </Suspense>
    
    </div>
  );
}

export default Home;