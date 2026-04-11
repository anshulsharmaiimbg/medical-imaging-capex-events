import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-medical-600 text-white font-bold text-sm">
                MI
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Medical Imaging</p>
                <p className="text-xs text-gray-400 leading-tight">Capex Events Platform</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your comprehensive resource for medical imaging device events, capital expenditure planning, and industry intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/events', label: 'All Events' },
                { href: '/upcoming', label: 'Upcoming Events' },
                { href: '/past', label: 'Past Events' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>MRI Systems</li>
              <li>CT Scanners</li>
              <li>Ultrasound</li>
              <li>AI Diagnostics</li>
              <li>Nuclear Medicine</li>
              <li>Digital X-Ray</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Platform' },
                { href: '/about#contact', label: 'Contact Us' },
                { href: '/about#mission', label: 'Our Mission' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Medical Imaging Capex Events Platform. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built for healthcare procurement professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
