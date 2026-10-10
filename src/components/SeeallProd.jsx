"use client"
import Link from "next/link";

const SeeallProd = () => {
    return (
        <div>
            <Link
            href={""}
            onClick={() => {document.getElementById("সব-পণ্য")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                        }} 
                        className="bg-green-700 text-white font-semibold px-4 py-2 rounded-md max-w-[120px]">
                            সব পণ্য দেখুন
                        </Link>
        </div>
    );
};

export default SeeallProd;