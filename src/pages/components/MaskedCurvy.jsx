export default function MaskedCurvyCard() {
  return (
    <div className="group relative w-80 h-96 bg-neutral-100 rounded-[2rem] overflow-hidden shadow-lg">
      {/* Product Image */}
      <img 
        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=80" 
        className="w-full h-full object-cover"
        alt="Product"
      />

      {/* The Curvy Bottom Tab */}
      <div className="absolute bottom-0 right-0 bg-white pt-4 pl-4 rounded-tl-[2rem]">
        {/* Label Content */}
        {/* <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
          Add to Cart
        </div> */}

        {/* TOP-LEFT INVERTED CURVE (Using Masking Logic) */}
        <div className="absolute -top-8 right-0 w-8 h-8 bg-white [mask-image:radial-gradient(circle_at_top_left,transparent_32px,black_33px)]">
          {/* This empty div becomes the curve because of the mask */}
        </div>

        {/* BOTTOM-RIGHT INVERTED CURVE */}
        <div className="absolute bottom-0 -left-8 w-8 h-8 bg-white [mask-image:radial-gradient(circle_at_top_left,transparent_32px,black_33px)]">
          {/* This empty div becomes the curve because of the mask */}
        </div>
      </div>
    </div>
  );
}