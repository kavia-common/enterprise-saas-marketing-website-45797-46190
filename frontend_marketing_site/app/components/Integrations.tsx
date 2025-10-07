import integrations from "~/data/integrations";

/**
 * PUBLIC_INTERFACE
 * Logo grid for common integrations (placeholders).
 */
export default function Integrations() {
  return (
    <section id="integrations" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Integrations</h2>
          <p className="mt-3 text-gray-600">Connect OmniCI with your favorite tools.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((name) => (
            <div
              key={name}
              className="h-16 rounded-lg bg-white shadow-sm ring-1 ring-gray-100 grid place-items-center text-xs text-gray-500"
              role="img"
              aria-label={`${name} logo placeholder`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
