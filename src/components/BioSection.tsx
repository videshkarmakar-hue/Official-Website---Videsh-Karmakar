import React from 'react';
import type {ArtistPortfolioData} from '../data/portfolioData';

interface BioSectionProps {
  profile: ArtistPortfolioData;
}

export const BioSection: React.FC<BioSectionProps> = ({profile}) => {
  return (
    <section id="bio" className="py-16 md:py-22">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Editorial Heading & Vision Statement */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-[#a4a2bb] mb-3">
              01. Artist Profile
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#eae9f2]">
              Sound That Connects Emotion With Energy
            </h2>

            <blockquote className="mt-6 pt-6 border-t border-[rgba(164,162,187,0.18)]">
              <p className="font-editorial italic text-2xl leading-snug text-[#eae9f2]">
                {profile.visionQuote}
              </p>
              <footer className="mt-3 text-xs text-[#a4a2bb]">
                {profile.name} · {profile.roleLine}
              </footer>
            </blockquote>
          </div>

          {/* Right Column: Verbatim Bio & Unboxed Sonic Metadata */}
          <div className="lg:col-span-8">
            <div className="space-y-5 max-w-[68ch] text-[15px] sm:text-base leading-[1.7] text-[#c7c5d8]">
              {profile.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Clean Unboxed Metadata Lists (Zero Pill Discipline) */}
            <div className="mt-10 pt-8 border-t border-[rgba(164,162,187,0.18)] grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-sm font-semibold text-[#eae9f2] mb-3">
                  Sonic Spectrum
                </h3>
                <p className="text-sm leading-relaxed text-[#a4a2bb]">
                  {profile.genres.map((genre, idx) => (
                    <React.Fragment key={genre}>
                      <span className="text-[#eae9f2]">{genre}</span>
                      {idx < profile.genres.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-[#a4a2bb]/50">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold text-[#eae9f2] mb-3">
                  Artistic Influences
                </h3>
                <p className="text-sm leading-relaxed text-[#a4a2bb]">
                  {profile.influences.map((artist, idx) => (
                    <React.Fragment key={artist}>
                      <span className="text-[#eae9f2]">{artist}</span>
                      {idx < profile.influences.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-[#a4a2bb]/50">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
