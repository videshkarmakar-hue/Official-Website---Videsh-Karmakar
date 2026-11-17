import React, {useState} from 'react';
import {ArrowUpRight, Disc3} from 'lucide-react';
import type {ArtistPortfolioData} from '../data/portfolioData';

interface HeroSectionProps {
  profile: ArtistPortfolioData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({profile}) => {
  const [imageError, setImageError] = useState(false);
  const spotifyLink = profile.socialLinks.find((s) => s.id === 'spotify')?.url ?? '#music';

  return (
    <section id="top" className="pt-12 pb-14 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider text-[#a4a2bb] mb-5">
                {profile.roleLine}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-[#eae9f2] text-balance max-w-2xl">
                {profile.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#a4a2bb] max-w-xl">
                {profile.subheadline}
              </p>

              <p className="mt-4 font-editorial italic text-xl text-[#c7c5d8]">
                Creating the sound of the future.
              </p>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold btn-accent whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Listen on Spotify</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#youtube"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium btn-outline-tone whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Right Column: Matching-Height Studio Visual */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[300px] lg:min-h-[390px] overflow-hidden rounded-2xl border border-[rgba(164,162,187,0.22)] bg-[#0b0a12]">
              {!imageError ? (
                <>
                  <img
                    src={profile.heroImageUrl}
                    alt="Videsh Karmakar visual portrait and studio backdrop"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover grayscale contrast-110 opacity-85"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#a4a2bb]/35 mix-blend-color"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b0a12]/90 via-[#a4a2bb]/20 to-[#0b0a12]/60"
                  />
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#a4a2bb]/20 to-[#0b0a12] p-8 text-center">
                  <Disc3 className="w-10 h-10 text-[#a4a2bb] mb-3" />
                  <span className="font-display text-base font-medium text-[#eae9f2]">
                    {profile.name}
                  </span>
                </div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0a12]/90 via-[#0b0a12]/25 to-transparent"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between text-xs text-[#c7c5d8]">
                <span className="font-medium">{profile.name}</span>
                <span className="text-[#a4a2bb]">Studio · Future Sound</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Credibility Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-[rgba(164,162,187,0.18)] bg-[rgba(164,162,187,0.14)]">
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="bg-[#0b0a12] px-5 py-4">
              <div className="font-display text-lg sm:text-xl font-semibold text-[#eae9f2] tabular-nums">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-[#a4a2bb]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
