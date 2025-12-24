
export default function SlidingBadge({ 
  primary, 
  secondary, 
  className = "", 
  heightClass = "h-8" // Default height (32px)
}) {
  return (
    /* 1. Parent uses heightClass and overflow-hidden */
    <div className={`group ${heightClass} overflow-hidden px-4  rounded-full bg-white cursor-pointer ${className}`}>
      
      {/* 2. The sliding wrapper */}
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        
        {/* 3. Both children MUST use the same heightClass */}
        <div className={`flex ${heightClass} items-center justify-center gap-2 shrink-0`}>
          {primary}
        </div>

        <div className={`flex ${heightClass} items-center justify-center gap-2 shrink-0`}>
          {secondary}
        </div>

      </div>
    </div>
  );
}