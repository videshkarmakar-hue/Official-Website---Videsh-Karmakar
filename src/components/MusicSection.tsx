import React, {useEffect, useState} from 'react';
import {ArrowUpRight, Disc3, X} from 'lucide-react';
import type {MusicRelease} from '../data/portfolioData';
import {SpotifyIcon, YouTubeIcon} from './BrandIcons';

interface MusicSectionProps {
  releases: MusicRelease[];
  spotifyArtistUrl: string;
}

const GENRE_FILTERS = [
  'All',
  'Future Bass',
  'Hardstyle',
  'Atmospheric',
  'Cinematic EDM',
] as const;

export const MusicSection: React.FC<MusicSectionProps> = ({
  releases,
  spotifyArtistUrl,
}) => {
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [selectedRelease, setSelectedRelease] = useState<MusicRelease | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedRelease(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredReleases =
    activeGenre === 'All'
      ? releases
      : releases.filter((item) => item.genre === activeGenre);

  return (
    <section
      id="music"
      className="py-16 md:py-22 border-t border-[rgba(164,162,187,0.14)]"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Section Header + Interactive Genre Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#a4a2bb] mb-3">
              02. Curated Releases
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#eae9f2]">
              Selected Electronic Productions
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter music releases by genre"
            className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#13121d] border border-[rgba(164,162,187,0.18)]"
          >
            {GENRE_FILTERS.map((genre) => {
              const isActive = activeGenre === genre;
              return (
                <button
                  key={genre}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#a4a2bb] text-[#0b0a12]'
                      : 'text-[#a4a2bb] hover:text-[#eae9f2]'
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </div>

        {/* Releases Grid */}
        {filteredReleases.length === 0 ? (
          <div className="surface-panel rounded-xl p-10 text-center">
            <p className="text-sm text-[#a4a2bb]">
              No tracks match the selected genre filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReleases.map((release) => {
              const hasBrokenImg = Boolean(brokenImages[release.id]);
              return (
                <article
                  key={release.id}
                  className="surface-panel-interactive rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedRelease(release)}
                    className="group text-left focus:outline-none"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-[#13121d]">
                      {!hasBrokenImg ? (
                        <img
                          src={release.artworkUrl}
                          alt={`${release.title} release artwork`}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setBrokenImages((prev) => ({
                              ...prev,
                              [release.id]: true,
                            }))
                          }
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#a4a2bb]/20 to-[#0b0a12] p-6">
                          <Disc3 className="w-9 h-9 text-[#a4a2bb] mb-2" />
                          <span className="font-display text-sm font-medium text-[#eae9f2]">
                            {release.title}
                          </span>
                        </div>
                      )}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0a12]/80 via-transparent to-transparent"
                      />
                    </div>

                    <div className="p-5 pb-3">
                      <div className="flex items-center gap-2 text-xs text-[#a4a2bb] tabular-nums">
                        <span>{release.genre}</span>
                        <span aria-hidden="true">·</span>
                        <span>{release.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{release.duration}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-[#eae9f2] group-hover:underline underline-offset-4">
                        {release.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#a4a2bb] line-clamp-2">
                        {release.notes}
                      </p>
                    </div>
                  </button>

                  <div className="px-5 py-4 mt-1 border-t border-[rgba(164,162,187,0.14)] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#eae9f2] hover:text-[#a4a2bb] transition-colors whitespace-nowrap shrink-0"
                      >
                        <SpotifyIcon className="w-4 h-4" />
                        <span>Spotify</span>
                      </a>
                      <a
                        href={release.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#a4a2bb] hover:text-[#eae9f2] transition-colors whitespace-nowrap shrink-0"
                      >
                        <YouTubeIcon className="w-4 h-4" />
                        <span>YouTube</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedRelease(release)}
                      className="text-xs font-medium text-[#a4a2bb] hover:text-[#eae9f2] transition-colors whitespace-nowrap shrink-0"
                    >
                      Details
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Direct Artist Catalogue Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[rgba(164,162,187,0.14)]">
          <p className="text-sm text-[#a4a2bb]">
            Available across Spotify, YouTube, Apple Music, JioSaavn, and all major streaming platforms.
          </p>
          <a
            href={spotifyArtistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold btn-outline-tone whitespace-nowrap shrink-0"
          >
            <span>Open Full Spotify Catalogue</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Release Detail Modal */}
      {selectedRelease && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="release-modal-title"
          onClick={() => setSelectedRelease(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0a12]/85 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-[rgba(164,162,187,0.28)] bg-[#13121d] overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[16/10] w-full bg-[#0b0a12]">
              {!brokenImages[selectedRelease.id] ? (
                <img
                  src={selectedRelease.artworkUrl}
                  alt={`${selectedRelease.title} cover`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#a4a2bb]/20 to-[#0b0a12]">
                  <Disc3 className="w-12 h-12 text-[#a4a2bb]" />
                </div>
              )}
              <button
                type="button"
                onClick={() => setSelectedRelease(null)}
                aria-label="Close release details"
                className="absolute top-3 right-3 rounded-lg bg-[#0b0a12]/80 border border-[rgba(164,162,187,0.25)] p-2 text-[#eae9f2] hover:bg-[#0b0a12] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#a4a2bb] tabular-nums">
                <span>{selectedRelease.genre}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedRelease.year}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedRelease.duration}</span>
              </div>
              <h3
                id="release-modal-title"
                className="mt-2 font-display text-2xl font-semibold text-[#eae9f2]"
              >
                {selectedRelease.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c7c5d8]">
                {selectedRelease.notes}
              </p>
              <p className="mt-3 text-xs text-[#a4a2bb]">
                {selectedRelease.platformSummary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={selectedRelease.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold btn-accent whitespace-nowrap shrink-0"
                >
                  <SpotifyIcon className="w-4 h-4" />
                  <span>Stream on Spotify</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={selectedRelease.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-medium btn-outline-tone whitespace-nowrap shrink-0"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
