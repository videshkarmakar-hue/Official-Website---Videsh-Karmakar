import React from 'react';
import type {SocialLinkItem} from '../data/portfolioData';

interface FooterProps {
  name: string;
  socialLinks: SocialLinkItem[];
}

export const Footer: React.FC<FooterProps> = ({name, socialLinks}) => {
  return (
    <footer className="border-t border-[rgba(164,162,187,0.16)] py-10">
      <div className="mx-auto max-w-[1160px] px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-display text-sm font-semibold text-[#eae9f2]">
            {name}
          </span>
          <p className="mt-1 text-xs text-[#a4a2bb]">
            © {new Date().getFullYear()} {name}. Electronic Music Producer & Developer.
          </p>
        </div>

        <nav aria-label="Footer Social Links" className="flex flex-wrap items-center gap-5">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.id === 'gmail' ? undefined : '_blank'}
              rel={item.id === 'gmail' ? undefined : 'noopener noreferrer'}
              className="text-xs font-medium text-[#a4a2bb] hover:text-[#eae9f2] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#top"
            className="text-xs font-medium text-[#eae9f2] hover:text-[#a4a2bb] transition-colors whitespace-nowrap"
          >
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
};
