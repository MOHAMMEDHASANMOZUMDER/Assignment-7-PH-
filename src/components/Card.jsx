import { UnitBn } from "@/lib/unit";
import { translateNumbers } from "@/lib/bnnumber";

const PriceCard = ({products}) => {
  return (
    <div className="w-full rounded-[22px] border border-[#dce6dd] bg-[#fafcfb] p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-3xl">
            {products.categoryIcon}
        </div>
        <div>
          <h3 className="text-xl font-bold leading-tight text-[#1d271f]">
        {products.nameBn}
          </h3>
          <p className="mt-1 text-sm text-gray-500">প্রতি {UnitBn(products.unit)}</p>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">আজকের দাম</p>
          <p className="mt-1 text-[#1d271f]">
            <span className="font-semibold text-[20px]">{translateNumbers(products.today)}</span> <span className="text-[14px]">টাকা</span>
          </p>
        </div>

        <span
          className="mb-1 inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-sm font-medium items-center justify-center rounded-2xl bg-[#f0f5f0]"
        >
          {products.change.dir==="up" ? <span className="text-red-700">▲</span> : <span className="text-green-700">▼</span>} {translateNumbers(Math.abs(products.change.pct))} %
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
