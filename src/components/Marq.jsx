import Marquee from "react-fast-marquee";
import { translateNumbers } from "@/lib/bnnumber";
import { UnitBn } from "@/lib/unit";
const Marq = async() => {
    const res= await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data= await res.json();
    return (
        <div className="py-2.5 border-b-1 border-slate-300 overflow-hidden">
            <ul >
               <Marquee speed={200} pauseOnHover={true} className="list-none m-0 p-0" style={{ overflowY: "hidden" }}>
                 {data.map(v=><li key={v.id} className="flex gap-1.5 mr-9">
                <span>
                    {v.categoryIcon}
                </span>
                <p>
                    {v.nameBn}
                </p>
                <p className="text-gray-500">
                  {translateNumbers(v.today)}  
                </p>
                <p className="text-gray-500">
                    টাকা/{UnitBn(v.unit)}
                </p>
                <p>
                    {v.change.dir==="up"?<span className="text-red-700">▲</span>:v.change.dir==="down"?<span className="text-green-700">▼</span>:<span>—</span>}
                </p>
                <p>
                    { translateNumbers(Math.abs(v.change.pct))  }%
                </p>
                </li>)}
               </Marquee>
            </ul>
        </div>
    );
};

export default Marq;