const InvertedCorner = ({ className } ) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* This path draws a "scooped" square */}
    <path 
      d="M24 0V24H0C13.2548 24 24 13.2548 24 0Z" 
      fill="currentColor" 
    />
  </svg>
);

export default function SVGProductCard() {
  return (
      <div className="p-3 bg-white rounded-3xl shadow-sm">
         <div className="relative w-80 h-96 bg-neutral-200 rounded-[20px] overflow-hidden group">
         {/* Background Image */}
         <img 
         src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" 
         className="w-full h-full object-cover"
         alt="product"
         />

         {/* The Bottom Tab */}
         <div className="absolute bottom-0 right-0 bg-white pt-2 pl-2 rounded-tl-[20px]">
         <button className="bg-white text-white px-8 py-1  mr-3 rounded-xl font-bold hover:scale-105 transition-transform">
            Buy Now
         </button>

         {/* The SVG Inverted Curves */}
         {/* Top Curve */}
         <InvertedCorner className="absolute -top-[24px] right-0 w-6 h-6 text-white" />
         
         {/* Left Curve */}
         <InvertedCorner className="absolute bottom-0 -left-[24px] w-6 h-6 text-white rotate-360" />
         </div>
      </div>
    </div>
  );
}