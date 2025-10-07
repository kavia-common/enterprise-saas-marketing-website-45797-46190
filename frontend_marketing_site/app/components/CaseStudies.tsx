import stories from "~/data/caseStudies";

/**
 * PUBLIC_INTERFACE
 * Case studies grid with placeholders.
 */
export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Case studies</h2>
          <p className="mt-3 text-gray-600">Real results from real teams.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <article key={s.title + i} className="op-card p-6 hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-lg bg-gray-50 grid place-items-center text-xs text-gray-400" role="img" aria-label={`${s.company} case study placeholder`}>
                {s.company} Image
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.summary}</p>
              <a href="#case-studies" className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                Read story
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
