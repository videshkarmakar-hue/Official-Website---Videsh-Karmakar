import type {ArtistPortfolioData} from '../data/portfolioData';

export type SiteUpdateKind = 'app' | 'release' | 'video';

export interface SiteUpdate {
  id: string;
  kind: SiteUpdateKind;
  title: string;
  meta: string;
  description: string;
  href: string;
}

export const SEEN_STORAGE_KEY = 'vk-site-updates-seen-v1';
export const ANNOUNCED_STORAGE_KEY = 'vk-site-updates-announced-v1';
export const DESKTOP_ALERTS_STORAGE_KEY = 'vk-site-updates-desktop-v1';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * Builds the site update feed straight from the portfolio content, so anything
 * newly added to a release, app or channel highlight shows up automatically.
 */
export function collectSiteUpdates(portfolio: ArtistPortfolioData): SiteUpdate[] {
  const apps: SiteUpdate[] = portfolio.developedApps
    .filter((app) => app.isPopulated)
    .map((app) => ({
      id: `app:${slugify(app.appName) || app.id}`,
      kind: 'app',
      title: app.appName,
      meta: app.category,
      description: app.tagline || app.description,
      href: '#apps',
    }));

  const releases: SiteUpdate[] = portfolio.releases.map((release) => ({
    id: `release:${release.id}`,
    kind: 'release',
    title: release.title,
    meta: `${release.genre} · ${release.year}`,
    description: release.notes,
    href: '#music',
  }));

  const videos: SiteUpdate[] = portfolio.youtubeChannel.highlights.map((highlight) => ({
    id: `video:${highlight.id}`,
    kind: 'video',
    title: highlight.title,
    meta: highlight.format,
    description: highlight.summary,
    href: '#youtube',
  }));

  return [...apps, ...releases, ...videos];
}

export function readStoredIds(key: string): string[] | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return null;
    }
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : null;
  } catch {
    return null;
  }
}

export function writeStoredIds(key: string, ids: string[]): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    // Storage can be unavailable (private mode); the feature degrades gracefully.
  }
}

export function readStoredFlag(key: string): boolean {
  try {
    return window.localStorage.getItem(key) === 'true';
  } catch {
    return false;
  }
}

export function writeStoredFlag(key: string, value: boolean): void {
  try {
    window.localStorage.setItem(key, value ? 'true' : 'false');
  } catch {
    // Ignore storage failures.
  }
}

export const UPDATE_KIND_LABEL: Record<SiteUpdateKind, string> = {
  app: 'New app',
  release: 'New release',
  video: 'New video',
};
