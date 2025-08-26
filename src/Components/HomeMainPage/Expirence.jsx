export function Experience({ experienceData }) {
  return (
    <>
      <div className="p-6 border-l border-r border-b border-gray-200 w-full">
        <div className="text-xl font-bold text-neutral-800 p-4">Experience</div>

        {experienceData.map((item, idx) => (
          <div className="p-4 border border-gray-200" key={idx}>
            <p className="text-neutral-700 text-md p-2">{item.position}</p>

            <div className=" pl-3 flex gap-4">
              {/* Vertical line stays */}
              <div className="h-auto w-px bg-gradient-to-b from-black via-neutral-600 to-black opacity-100"></div>

              <div className="flex-1 space-y-2 p-2 rounded-md">
                <p className="text-md text-neutral-800">{item.duration}</p>
                <p className="text-md bg-neutral-50">Company : {item.companyName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}