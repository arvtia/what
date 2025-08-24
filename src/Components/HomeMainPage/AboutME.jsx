export function AboutME({ image, Name, description, links }) {
  return (
    <section className="border-l border-r border-t border-b-0 border-gray-200  p-6 mt-7">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1">
          <h1 className="font-bold text-neutral-800 text-3xl">{Name}</h1>
          <p className="text-lg text-neutral-600">{description}</p>
          <div className="flex gap-4 mt-4">
            {links.map((item, idx) => (
              <a
                href={item.url}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3  rounded-md  transition"
              >
                <i className={`${item.icon} text-2xl text-neutral-500`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="photo border border-gray-200 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={Name}
            className="h-24 w-24 object-cover hover:shadow-sm shadow-neutral-400"
          />
        </div>
      </div>
    </section>
  );
}