 /**
  * PUBLIC_INTERFACE
  * Footer with company info and common links.
  */
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white" role="contentinfo">
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
              Enterprise CI/CD platform to build, test, and deploy with confidence.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-blue-600">Features</a></li>
              <li><a href="#integrations" className="hover:text-blue-600">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#case-studies" className="hover:text-blue-600">Case studies</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#hero" className="hover:text-blue-600">Terms</a></li>
              <li><a href="#hero" className="hover:text-blue-600">Privacy</a></li>
              <li><a href="#hero" className="hover:text-blue-600">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} OmniCI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#contact" className="text-xs text-gray-500 hover:text-blue-600">Contact</a>
            <span className="text-gray-200" aria-hidden>|</span>
            <a href="#hero" className="text-xs text-gray-500 hover:text-blue-600">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
