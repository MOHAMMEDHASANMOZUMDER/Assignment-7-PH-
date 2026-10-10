import PriceCard from "./Card";
const Pricedec =async ({pricedec}) => {
    const topdec= pricedec.filter(d=>d.change.dir==="down").sort((a,b)=>a.change.pct-b.change.pct).slice(0,6)
    return (
        
        <div className="max-w-7xl mx-auto mt-8 flex flex-col gap-4">
            <p className="font-bold text-[20px]"><span className="text-green-700">▼</span>আজ দাম কমেছে</p>
           <div className="grid grid-cols-3 gap-4">
            {
                topdec.map(d=>
                    <div key={d.id}>
                        <PriceCard products={d}></PriceCard>
                    </div>
                )
            }
           </div>
        </div>
    );
};

export default Pricedec;