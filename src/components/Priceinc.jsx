import PriceCard from "./Card";
const Priceinc = async({priceinc}) => {
   
    const top= priceinc.sort((a,b)=>b.change.pct-a.change.pct).filter(d=>d.change.dir==="up").slice(0,6)
    return (
        
        <div className="max-w-7xl mx-auto mt-8 flex flex-col gap-4">
            <p className="font-bold text-[20px]"><span className="text-red-700">▲ </span>আজ দাম বেড়েছে</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                top.map(d=>
                    <div key={d.id}>
                        <PriceCard products={d}></PriceCard>
                    </div>
                )
            }
           </div>
        </div>
    );
};

export default Priceinc;