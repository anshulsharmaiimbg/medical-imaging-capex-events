import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'All Events' },
  { href: '/upcoming', label: 'Upcoming' },
  { href: '/past', label: 'Past Events' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-medical-700 text-white font-bold text-sm select-none">
              MI
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-sm leading-tight group-hover:text-medical-700 transition-colors">
                Medical Imaging
              </p>
              <p className="text-xs text-gray-500 leading-tight">Capex Events Platform</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = router.pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-medical-700 text-white'
                      : 'text-gray-600 hover:text-medical-700 hover:bg-medical-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/upcoming" className="hidden sm:inline-flex btn-primary text-xs px-4 py-2">
              View Upcoming
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const active = router.pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      active
                        ? 'bg-medical-700 text-white'
                        : 'text-gray-700 hover:text-medical-700 hover:bg-medical-50'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
