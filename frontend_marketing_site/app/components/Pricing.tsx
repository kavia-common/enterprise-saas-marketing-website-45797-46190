import tiers from "~/data/pricing";

/**
 * PUBLIC_INTERFACE
 * Pricing tables with three tiers and CTAs.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-600">Transparent plans with enterprise options.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((p) => (
            <div
              key={p.name}
              className={`op-card p-6 flex flex-col ${p.highlight ? "border-2 border-blue-600" : ""}`}
            >
              <div className="text-sm font-semibold text-blue-600">{p.name}</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">
                {p.price}
                <span className="text-base font-normal text-gray-500">{p.price !== "Custom" ? "/mo" : ""}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 op-btn ${
                  p.highlight ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
