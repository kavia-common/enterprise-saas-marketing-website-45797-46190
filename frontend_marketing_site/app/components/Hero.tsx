import Stat from "./Stat";

/**
 * PUBLIC_INTERFACE
 * Prominent hero with headline, subtext, CTAs, and mock product area.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-gray-50">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              <span className="block h-2 w-2 rounded-full bg-amber-500" />
              Enterprise CI/CD
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Ship with confidence. Automate every step.
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              OmniCI is a secure, scalable CI/CD platform for modern engineering teams. Build, test, and deploy
              at enterprise scale with policy controls, insights, and an ecosystem of integrations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="op-btn-primary">
                Start free trial
              </a>
              <a href="#features" className="op-btn-outline">
                View features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6" aria-label="Key metrics">
              <Stat value="99.99%" label="Uptime" />
              <Stat value="10k+" label="Teams" />
              <Stat value="30%+" label="Faster releases" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -m-8 bg-gradient-to-br from-blue-500/10 to-amber-400/10 blur-2xl rounded-3xl" aria-hidden />
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-4">
              <div className="aspect-video w-full rounded-lg bg-gray-50 grid place-items-center text-gray-400 text-sm">
                Placeholder: Product mockup / hero image
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-gray-50 grid place-items-center text-xs text-gray-400">
                  Badge 1
                </div>
                <div className="h-16 rounded-lg bg-gray-50 grid place-items-center text-xs text-gray-400">
                  Badge 2
                </div>
                <div className="h-16 rounded-lg bg-gray-50 grid place-items-center text-xs text-gray-400">
                  Badge 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
