import { useState, useEffect } from "react";
import { InvertedCorner } from "../NordenNavbar";

const REVIEWS = [
  {
    id: 1,
    text: "Outstanding creativity & professional service from Arvaz. He transformed our vision into a high-converting product.",
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    avatar: "https://i.ibb.co/wVkwJsg/cf6ec445df41899479978aa16f05c996.jpg",
  },
  {
    id: 2,
    text: "The performance optimization Arvaz implemented slashed our load times by 40%. A true technical expert.",
    name: "Marcus Chen",
    role: "CTO at Nexus SaaS",
    avatar: "https://i.ibb.co/dw8J088M/e63a1274d16ece550d0886e481cad659.jpg",
  },
  {
    id: 3,
    text: "Arvaz doesn't just code; he understands product-market fit. His UI decisions are backed by deep UX research.",
    name: "Elena Rodriguez",
    role: "Product Manager at CreativeCo",
    avatar: "https://i.ibb.co/WN3WfjSr/d6bc8d404b8a79fbb3f6c2ad53fbc2dd.jpg",
  },
];

const NordenRating = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[index];

  return (
    <div className="mb-3 bg-stripes-light mt-3 border border-neutral-100 p-8 rounded-xl min-h-[280px] flex items-center justify-center relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 left-0 z-20">
        <div className="relative bg-white shadow-sm px-5 py-2 rounded-br-2xl border-b border-r border-neutral-50">
          <div className="text-sm font-bold tracking-tight text-neutral-400 uppercase">
            Testimonies
          </div>
          <InvertedCorner className="absolute left-0 rotate-180 top-[36px] text-white" />
          <InvertedCorner className="absolute -right-[24px] rotate-180 top-0 text-white" />
        </div>
      </div>
      <div
        key={current.id}
        className="w-full pt-10 max-w-2xl flex flex-col items-start"
      >
        <p className="text-lg md:text-lg text-neutral-800 leading-relaxed font-sans animate-blur-in">
          "{current.text}"
        </p>
        <div className="flex gap-4 items-center mt-8 animate-blur-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="size-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-neutral-100 transition-transform duration-700 hover:scale-110">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-neutral-900 text-lg leading-none">
              {current.name}
            </span>
            <p className="text-neutral-500 text-sm mt-1.5 font-medium">
              {current.role}
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-700 ease-in-out ${
                index === i ? "w-8 bg-black" : "w-2 bg-neutral-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NordenRating;
