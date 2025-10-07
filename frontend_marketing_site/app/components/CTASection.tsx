 /**
  * PUBLIC_INTERFACE
  * Strong call to action band with dual buttons.
  */
export default function CTASection() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-blue-500/10 to-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="op-card p-8 sm:p-10 grid gap-8 sm:grid-cols-3 items-center">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900">Start building with OmniCI</h3>
            <p className="mt-2 text-gray-600">Create a workspace in minutes. No credit card required.</p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="op-btn-outline">
              Contact sales
            </a>
            <a href="#contact" className="op-btn-primary">
              Start free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
