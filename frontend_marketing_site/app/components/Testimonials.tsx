import testimonials from "~/data/testimonials";

/**
 * PUBLIC_INTERFACE
 * Customer testimonials as responsive cards.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Loved by teams</h2>
          <p className="mt-3 text-gray-600">What our customers say.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="op-card p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-400/30 grid place-items-center text-sm font-bold text-amber-700">
                  {t.initials}
                </div>
                <figcaption>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm text-gray-700">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
