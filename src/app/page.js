import Hero from "@/components/Hero";
import Image from "next/image";
import Marq from "@/components/Marq";
import Priceinc from "@/components/Priceinc";

export default function Home() {
  return (
    <div>
    <Marq/>
    <Hero/>
    <Priceinc></Priceinc>
    </div>
  );
}
