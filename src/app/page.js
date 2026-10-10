import Hero from "@/components/Hero";
import Image from "next/image";
import Priceinc from "@/components/Priceinc";
import Pricedec from "@/components/Pricedec";
import Allprod from "@/components/Allprod";

const Home =async()=> {
  const res= await fetch("https://openapi.programming-hero.com/api/bazardor/products")
 const prodata=await res.json();
  return (
    <div>
    <Hero/>
    <Priceinc priceinc={prodata}/>
    <Pricedec pricedec={prodata}/>
    <Allprod allpr={prodata}/>
    </div>
  );
}

export default Home;