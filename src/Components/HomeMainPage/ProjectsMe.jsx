export function ProjectsMe({ Projects }) {
  return (
    <section className="p-6 border border-gray-200  bg-white">
      <h3 className="text-xl font-bold text-neutral-800 mb-6">Projects</h3>

      <div className="space-y-5">
        {Projects.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 border border-gray-200 rounded-md hover:shadow-sm transition-shadow duration-200"
          >
            {/* Image */}
            <div className="md:col-span-4 px-5 pt-2">
              <img
                src={item.image}
                alt={`Preview of ${item.title}`}
                className="w-full h-fit object-contain rounded-t-md md:rounded-l-md md:rounded-t-none hidden md:block"
              />
              <i className="bi bi-app-indicator md:hidden"></i>
            </div>

            {/* Content */}
            <div className="md:col-span-8 flex flex-col justify-between p-5 space-y-4">
              {/* Title */}
              <p
                title={item.title}
                className="text-lg font-serif text-neutral-800 hover:underline underline-offset-2"
              >
                {item.title}
              </p>

              {/* Description */}
              <p className="text-md text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-sm rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200"
                  >
                    {tag.techstack}
                  </span>
                ))}
              </div>

              {/* Dates */}
              <div className="flex flex-wrap gap-x-6 text-sm text-neutral-700">
                <span>{item.dateFrom}</span>
                <span>{item.dateTo}</span>
              </div>

              {/* Live Link */}
              <a
                href={item.LiveLinks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-all duration-200"
              >
                <i className={item.iconLiveLink}></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}