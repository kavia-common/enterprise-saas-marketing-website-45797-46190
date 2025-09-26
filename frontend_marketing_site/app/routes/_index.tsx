import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "OmniCI | Enterprise CI/CD Platform" },
    {
      name: "description",
      content:
        "A modern enterprise CI/CD platform. Automate, integrate, and ship faster with secure pipelines, scalable workflows, and deep ecosystem integrations.",
    },
  ];
};

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
    >
      {label}
    </a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setIsMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#111827]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                O
              </div>
              <span className="font-semibold text-gray-900">OmniCI</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#features" label="Features" />
              <NavLink href="#pricing" label="Pricing" />
              <NavLink href="#integrations" label="Integrations" />
              <NavLink href="#case-studies" label="Case Studies" />
              <NavLink href="#testimonials" label="Testimonials" />
              <NavLink href="#contact" label="Contact" />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Talk to sales
              </a>
              <a
                href="#cta"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Get started
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-50"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
              >
                {isMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
              <NavLink href="#features" label="Features" />
              <NavLink href="#pricing" label="Pricing" />
              <NavLink href="#integrations" label="Integrations" />
              <NavLink href="#case-studies" label="Case Studies" />
              <NavLink href="#testimonials" label="Testimonials" />
              <NavLink href="#contact" label="Contact" />
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Talk to sales
                </a>
                <a
                  href="#cta"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-gray-50"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
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
                OmniCI is a secure, scalable CI/CD platform for modern
                engineering teams. Build, test, and deploy at enterprise scale
                with policy controls, insights, and an ecosystem of integrations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Start free trial
                </a>
                <a
                  href="#features"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
                >
                  View features
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <Stat value="99.99%" label="Uptime" />
                <Stat value="10k+" label="Teams" />
                <Stat value="30%+" label="Faster releases" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-blue-500/10 to-amber-400/10 blur-2xl rounded-3xl" />
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

      {/* Features */}
      <section id="features" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Built for scale and security
            </h2>
            <p className="mt-3 text-gray-600">
              Powerful features for enterprise delivery teams with governance,
              observability, and performance baked-in.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pipeline as Code",
                desc: "Declarative pipelines, reusable templates, and versioned workflows.",
                icon: "⚙️",
              },
              {
                title: "Policy & Compliance",
                desc: "Role-based access, signed artifacts, and audit trails.",
                icon: "🛡️",
              },
              {
                title: "Scalable Runners",
                desc: "Autoscaling runners across cloud and on-prem with throttling and quotas.",
                icon: "📈",
              },
              {
                title: "Observability",
                desc: "Pipeline insights, DORA metrics, and bottleneck detection.",
                icon: "📊",
              },
              {
                title: "Secrets Management",
                desc: "Integrated vaulting with fine-grained scope and rotation support.",
                icon: "🔐",
              },
              {
                title: "Monorepo Support",
                desc: "Smart change detection and parallelized build matrices.",
                icon: "🧩",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-lg">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        id="integrations"
        className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Integrations</h2>
            <p className="mt-3 text-gray-600">
              Connect OmniCI with your favorite tools. Placeholder logos below.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-lg bg-white shadow-sm ring-1 ring-gray-100 grid place-items-center text-xs text-gray-400"
              >
                Logo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Case studies</h2>
            <p className="mt-3 text-gray-600">
              Real results from real teams. Replace with your customer stories.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <article
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video rounded-lg bg-gray-50 grid place-items-center text-xs text-gray-400">
                  Case Study Image {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Acme Corp — 35% faster deployments
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Replaced legacy pipelines with OmniCI to reduce cycle time and
                  improve release reliability.
                </p>
                <a
                  href="#case-studies"
                  className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read story
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7 5l6 5-6 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Loved by teams</h2>
            <p className="mt-3 text-gray-600">
              Rotating testimonial slider placeholder with 3 sample quotes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                role: "Director of Engineering, Northwind",
                quote:
                  "OmniCI standardized our pipelines across 120+ services. Our weekly deploys tripled.",
              },
              {
                name: "Miguel Rodriguez",
                role: "DevOps Lead, Contoso",
                quote:
                  "The policy controls and auditability satisfied our security team on day one.",
              },
              {
                name: "Sarah Chen",
                role: "VP Platform, Fabrikam",
                quote:
                  "Integrations were painless. We had end-to-end delivery metrics in a week.",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-400/30 grid place-items-center text-sm font-bold text-amber-700">
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <figcaption>
                    <div className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </figcaption>
                </div>
                <blockquote className="mt-4 text-sm text-gray-700">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
            <p className="mt-3 text-gray-600">
              Transparent plans with enterprise options. Replace with real
              pricing tiers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$29",
                desc: "For small teams getting started",
                features: ["100 monthly builds", "Community support", "1 runner"],
              },
              {
                name: "Growth",
                price: "$199",
                desc: "For teams scaling delivery",
                features: [
                  "5,000 monthly builds",
                  "Email support",
                  "Autoscaling runners",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For large orgs & compliance",
                features: [
                  "Unlimited builds",
                  "SLA & SSO/SAML",
                  "Dedicated support",
                ],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 bg-white flex flex-col ${
                  p.highlight ? "border-2 border-blue-600" : ""
                }`}
              >
                <div className="text-sm font-semibold text-blue-600">
                  {p.name}
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900">
                  {p.price}
                  <span className="text-base font-normal text-gray-500">
                    {p.price !== "Custom" ? "/mo" : ""}
                  </span>
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
                  className={`mt-6 inline-flex justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${
                    p.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-16 sm:py-20 bg-gradient-to-br from-blue-500/10 to-gray-50"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-8 sm:p-10 grid gap-8 sm:grid-cols-3 items-center">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Start building with OmniCI
              </h3>
              <p className="mt-2 text-gray-600">
                Create a workspace in minutes. No credit card required.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
              >
                Contact sales
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Start free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Contact our team
              </h2>
              <p className="mt-3 text-gray-600">
                Have questions about pricing, security, or deployment models?
                We’re here to help.
              </p>
              <div className="mt-6 space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  Enterprise-ready SOC2, ISO27001, and SSO/SAML
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Hybrid cloud & on-prem deployments supported
                </div>
              </div>
            </div>
            <form
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">
                    Work email
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="jane@company.com"
                    className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs…"
                    rows={4}
                    className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Send message
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Placeholder form. Wire up to your backend or provider later.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
                  O
                </div>
                <span className="font-semibold text-gray-900">OmniCI</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Enterprise CI/CD platform to build, test, and deploy with
                confidence.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#features" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-blue-600">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-blue-600">
                    Case studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#contact" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#hero" className="hover:text-blue-600">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-blue-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-blue-600">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} OmniCI, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="text-xs text-gray-500 hover:text-blue-600">
                Contact
              </a>
              <span className="text-gray-200">|</span>
              <a href="#hero" className="text-xs text-gray-500 hover:text-blue-600">
                Status
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
