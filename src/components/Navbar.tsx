import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

interface NavbarProps {
  brandName: string;
}

const NAV_LINKS = [
  {label: 'Bio', href: '#bio'},
  {label: 'YouTube', href: '#youtube'},
  {label: 'Apps', href: '#apps'},
  {label: 'Contact', href: '#contact'},
];

export const Navbar: React.FC<NavbarProps> = ({brandName}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(164,162,187,0.16)] bg-[#0b0a12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#eae9f2] whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          {brandName}
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#a4a2bb] hover:text-[#eae9f2] whitespace-nowrap shrink-0 transition-colors duration-150 py-1 border-b border-transparent hover:border-[#a4a2bb]/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold btn-accent whitespace-nowrap shrink-0 min-h-[40px]"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-[rgba(164,162,187,0.22)] p-2.5 text-[#eae9f2] hover:bg-[#a4a2bb]/10 transition-colors min-h-[44px] min-w-[44px]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(164,162,187,0.16)] bg-[#0b0a12] px-6 py-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-2.5 text-sm font-medium text-[#a4a2bb] hover:text-[#eae9f2] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold btn-accent"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
