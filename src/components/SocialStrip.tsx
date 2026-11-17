import React, {useState} from 'react';
import {ArrowUpRight, Check, Copy, Mail} from 'lucide-react';
import type {SocialLinkItem} from '../data/portfolioData';
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  YouTubeIcon,
} from './BrandIcons';

interface SocialStripProps {
  socialLinks: SocialLinkItem[];
}

export const SocialStrip: React.FC<SocialStripProps> = ({socialLinks}) => {
  const [copied, setCopied] = useState(false);

  const renderIcon = (id: SocialLinkItem['id']) => {
    switch (id) {
      case 'spotify':
        return <SpotifyIcon className="w-5 h-5 text-[#a4a2bb]" />;
      case 'youtube':
        return <YouTubeIcon className="w-5 h-5 text-[#a4a2bb]" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-[#a4a2bb]" />;
      case 'facebook':
        return <FacebookIcon className="w-5 h-5 text-[#a4a2bb]" />;
      case 'gmail':
        return <Mail className="w-5 h-5 text-[#a4a2bb]" />;
    }
  };

  const handleCopyEmail = async (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section aria-label="Official Social Channels" className="py-10 border-y border-[rgba(164,162,187,0.14)]">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <h2 className="font-display text-lg font-semibold text-[#eae9f2]">
            Official Channels
          </h2>
          <p className="text-xs text-[#a4a2bb]">
            Streaming, visual releases, social updates, and direct contact
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socialLinks.map((item) => {
            const isEmail = item.id === 'gmail';
            return (
              <div
                key={item.id}
                className="surface-panel-interactive rounded-xl p-4 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {renderIcon(item.id)}
                    <span className="font-display text-sm font-semibold text-[#eae9f2]">
                      {item.label}
                    </span>
                  </div>
                  {isEmail ? (
                    <button
                      type="button"
                      onClick={(e) => handleCopyEmail(e, item.handle)}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-[#a4a2bb] hover:text-[#eae9f2] hover:bg-[#a4a2bb]/10 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#a4a2bb]/70" />
                  )}
                </div>

                <a
                  href={item.url}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noopener noreferrer'}
                  className="group block"
                >
                  <div className="text-xs font-medium text-[#eae9f2] truncate group-hover:underline underline-offset-4">
                    {item.handle}
                  </div>
                  <div className="mt-1 text-xs text-[#a4a2bb]">
                    {item.actionLabel}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
