import { publications, hackathonsAndHonors } from '../constants/index.js';

const ResearchAndHonors = () => {
  return (
    <section className="c-space my-20" id="research">
      <div className="w-full">
        <p className="head-text">Research & Honors</p>
        <p className="text-[#afb0b6] text-base mt-2 max-w-2xl font-generalsans">
          Peer-reviewed preprints and conference submissions in code retrieval and agentic decision systems.
        </p>

        {/* Primary Focus: Research Publications (Big Cards) */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-black-200 border border-black-300 rounded-lg p-6 flex flex-col justify-between hover:border-black-500 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block text-xs font-medium text-white-600 bg-black-300 px-3 py-1 rounded-md border border-black-500/40">
                  {pub.venue}
                </span>

                <h3 className="text-white text-lg font-semibold mt-4 group-hover:text-white transition-colors">
                  {pub.title}
                </h3>

                <p className="text-sm text-white-500 font-medium mt-1">
                  {pub.focus}
                </p>

                <p className="text-sm text-[#afb0b6] mt-3 leading-relaxed">
                  {pub.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-black-300/60">
                <p className="text-xs text-white-500 font-medium">{pub.authors}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary: Small Showing of Honors */}
        <div className="mt-12">
          <p className="text-xs uppercase tracking-wider text-white-500 font-semibold mb-4">
            Honors & Hackathons
          </p>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3.5">
            {hackathonsAndHonors.map((item) => (
              <div
                key={item.id}
                className="bg-black-200 border border-black-300 rounded-lg p-4 flex flex-col justify-between hover:border-black-500 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start sm:items-center justify-between gap-2 mb-1.5">
                    <p className="text-sm font-semibold text-white leading-tight">{item.title}</p>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-black-300 text-white-700 whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white-500 mb-2">{item.subtitle}</p>
                </div>

                <p className="text-xs text-[#afb0b6] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndHonors;
