import { useEffect, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Sticky, accessible navbar with anchor links and primary CTA.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const LinkItem = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2" aria-label="Go to hero">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
              O
            </div>
            <span className="font-semibold text-gray-900">OmniCI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <LinkItem href="#features" label="Features" />
            <LinkItem href="#integrations" label="Integrations" />
            <LinkItem href="#pricing" label="Pricing" />
            <LinkItem href="#case-studies" label="Case Studies" />
            <LinkItem href="#testimonials" label="Testimonials" />
            <LinkItem href="#contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Talk to sales
            </a>
            <a href="#cta" className="op-btn-primary">
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            <LinkItem href="#features" label="Features" />
            <LinkItem href="#integrations" label="Integrations" />
            <LinkItem href="#pricing" label="Pricing" />
            <LinkItem href="#case-studies" label="Case Studies" />
            <LinkItem href="#testimonials" label="Testimonials" />
            <LinkItem href="#contact" label="Contact" />
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Talk to sales
              </a>
              <a href="#cta" className="op-btn-primary">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
}
