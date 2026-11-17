import React, {useState} from 'react';
import {ArrowUpRight, Play} from 'lucide-react';
import type {ArtistPortfolioData} from '../data/portfolioData';
import {YouTubeIcon} from './BrandIcons';

interface YouTubeShowcaseProps {
  youtubeChannel: ArtistPortfolioData['youtubeChannel'];
}

export const YouTubeShowcase: React.FC<YouTubeShowcaseProps> = ({
  youtubeChannel,
}) => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const activeHighlight = youtubeChannel.highlights[0];

  return (
    <section
      id="youtube"
      className="py-16 md:py-22 border-t border-[rgba(164,162,187,0.14)]"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#a4a2bb] mb-3">
              02. Dedicated YouTube Channel Slot
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#eae9f2]">
              Official YouTube Featured Channel
            </h2>
            <p className="mt-2 text-sm text-[#a4a2bb] max-w-2xl">
              {youtubeChannel.description}
            </p>
          </div>

          <a
            href={youtubeChannel.featuredUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold btn-accent whitespace-nowrap shrink-0 self-start md:self-auto min-h-[42px]"
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>Open Featured Channel</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dedicated Channel Frame */}
        <div className="surface-panel rounded-2xl overflow-hidden flex flex-col justify-between">
          <div className="relative aspect-video w-full overflow-hidden bg-[#0b0a12]">
            {activeHighlight && !imageError[activeHighlight.id] ? (
              <>
                <img
                  src={activeHighlight.thumbnailUrl}
                  alt={`${activeHighlight.title} YouTube channel highlight`}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setImageError((prev) => ({
                      ...prev,
                      [activeHighlight.id]: true,
                    }))
                  }
                  className="h-full w-full object-cover grayscale contrast-110 opacity-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#a4a2bb]/35 mix-blend-color"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b0a12]/90 via-[#a4a2bb]/20 to-[#0b0a12]/65"
                />
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#a4a2bb]/20 to-[#0b0a12] p-8">
                <YouTubeIcon className="w-10 h-10 text-[#a4a2bb] mb-2" />
                <span className="font-display text-base text-[#eae9f2]">
                  {youtubeChannel.handle}
                </span>
              </div>
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0a12]/95 via-[#0b0a12]/35 to-transparent"
            />

            {/* Centered Play-Launch Control */}
            {activeHighlight && (
              <a
                href={activeHighlight.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${activeHighlight.title} on YouTube`}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(164,162,187,0.45)] bg-[#0b0a12]/80 px-5 py-3 text-xs font-semibold text-[#eae9f2] backdrop-blur-sm transition-transform duration-150 group-hover:scale-105">
                  <Play className="w-4 h-4 fill-current text-[#a4a2bb]" />
                  <span>View on YouTube</span>
                </span>
              </a>
            )}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#a4a2bb]">
                  <span>{youtubeChannel.handle}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeHighlight?.format}</span>
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold text-[#eae9f2]">
                  {activeHighlight?.title}
                </h3>
              </div>
              <span className="text-xs text-[#c7c5d8] tabular-nums">
                {activeHighlight?.duration}
              </span>
            </div>
          </div>

          {activeHighlight && (
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[rgba(164,162,187,0.14)]">
              <p className="text-sm text-[#c7c5d8] max-w-2xl">
                {activeHighlight.summary}
              </p>
              <a
                href={activeHighlight.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#eae9f2] hover:text-[#a4a2bb] whitespace-nowrap shrink-0 transition-colors"
              >
                <span>Watch Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
