import features from "~/data/features";

/**
 * PUBLIC_INTERFACE
 * Displays a grid of product features using provided mock data.
 */
export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Built for scale and security</h2>
          <p className="mt-3 text-gray-600">
            Powerful features for enterprise delivery teams with governance, observability, and performance baked-in.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="op-card p-6 hover:shadow-md transition-shadow"
              aria-labelledby={`feature-${f.title}`}
            >
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-lg" aria-hidden>
                {f.icon}
              </div>
              <h3 id={`feature-${f.title}`} className="mt-4 text-lg font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
