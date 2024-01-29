import { useState } from "react";
import { pricing } from "../data";
import ClassItems from "./ClassItems";

const Pricing = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <section className="bg-section">
      <div className="container mx-auto">
        <div className="lg:section-lg section-sm">
          <div className="text-center">
            <h2 className="h3 font-bold">Pick a Pricing Plan</h2>
            <p className="mt-5 mb-12 max-w-[400px] mx-auto">
              Pick a pricing plan and get started your journey with us for
              building your body and mind
            </p>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((item, idx) => {
              const { title, price, list, buttonIcon, buttonText } =
                item;
                
              return (
                <li key={idx} className="bg-white rounded-lg w-full max-w-[400px] mx-auto">
                  <div onClick={()=>setCurrentIdx(idx)} className={`${ idx===currentIdx ? "bg-orange text-white":"bg-white text-black"} transition-all  text-center pt-10 pb-6 cursor-pointer`}>
                    <h3 className={`${  idx===currentIdx ? " text-white":"text-black"}  text-xl font-medium`}>{title}</h3>
                    <p className="text-3xl mt-3 font-semibold">{price}</p>
                  </div>
                  <p className="text-center mb-6 mt-3">
                    Discover your favourite class!
                  </p>
                  <div className="px-5">
                    <ClassItems list={list} />
                    <button className={`${  idx===currentIdx ? " bg-orange text-white":"bg-white text-orange"}  relative font-semibold w-full p-3 mt-8 mb-5 border border-orange transition-all`}>
                      {buttonText} <div className="bg-orange-200 flex justify-center items-center absolute top-0 right-0 h-full aspect-[1/1] text-white">{buttonIcon}</div>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
