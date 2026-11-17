import React from 'react';

interface IconProps {
  className?: string;
}

export const SpotifyIcon: React.FC<IconProps> = ({className = 'w-5 h-5'}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M7.5 10.2c3-.9 6.5-.7 9.2.6" />
    <path d="M8.3 13c2.4-.7 5.2-.5 7.4.5" />
    <path d="M9.1 15.6c1.8-.5 3.9-.3 5.5.4" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({className = 'w-5 h-5'}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <polygon points="10.25 9.25 15.5 12 10.25 14.75" fill="currentColor" stroke="none" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({className = 'w-5 h-5'}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({className = 'w-5 h-5'}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M13.5 8.5h1.5V6h-1.8c-2 0-3.2 1.2-3.2 3.2V11H8.2v2.5H10v5.8h2.6v-5.8h2.1l.4-2.5h-2.5V9.4c0-.6.3-.9.9-.9Z" />
  </svg>
);
