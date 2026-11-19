import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {AppWindow, Bell, BellRing, Check, Music, Video, X} from 'lucide-react';
import {
  ANNOUNCED_STORAGE_KEY,
  DESKTOP_ALERTS_STORAGE_KEY,
  SEEN_STORAGE_KEY,
  UPDATE_KIND_LABEL,
  readStoredFlag,
  readStoredIds,
  writeStoredFlag,
  writeStoredIds,
  type SiteUpdate,
  type SiteUpdateKind,
} from '../lib/siteUpdates';

interface UpdateNotifierProps {
  updates: SiteUpdate[];
}

const KIND_ICON: Record<SiteUpdateKind, React.ComponentType<{className?: string}>> = {
  app: AppWindow,
  release: Music,
  video: Video,
};

export const UpdateNotifier: React.FC<UpdateNotifierProps> = ({updates}) => {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState<SiteUpdate[]>([]);
  const [announcement, setAnnouncement] = useState<SiteUpdate[] | null>(null);
  const [desktopAlerts, setDesktopAlerts] = useState(false);
  const [permissionBlocked, setPermissionBlocked] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateIds = useMemo(() => updates.map((item) => item.id), [updates]);

  // Compare the live content against what this visitor has already seen.
  useEffect(() => {
    const seen = readStoredIds(SEEN_STORAGE_KEY);

    if (!seen) {
      // First visit: remember the current content silently, no false alarms.
      writeStoredIds(SEEN_STORAGE_KEY, updateIds);
      writeStoredIds(ANNOUNCED_STORAGE_KEY, updateIds);
      setUnread([]);
      return;
    }

    const fresh = updates.filter((item) => !seen.includes(item.id));
    setUnread(fresh);
    if (fresh.length === 0) {
      return;
    }

    const announced = readStoredIds(ANNOUNCED_STORAGE_KEY) ?? [];
    const notAnnounced = fresh.filter((item) => !announced.includes(item.id));
    if (notAnnounced.length === 0) {
      return;
    }

    setAnnouncement(notAnnounced);
    writeStoredIds(ANNOUNCED_STORAGE_KEY, [...announced, ...notAnnounced.map((item) => item.id)]);

    if (
      readStoredFlag(DESKTOP_ALERTS_STORAGE_KEY) &&
      typeof Notification !== 'undefined' &&
      Notification.permission === 'granted'
    ) {
      const body =
        notAnnounced.length === 1
          ? notAnnounced[0].title
          : `${notAnnounced[0].title} and ${notAnnounced.length - 1} more`;
      new Notification('New on Videsh Karmakar', {body, tag: 'vk-site-updates'});
    }
  }, [updates, updateIds]);

  useEffect(() => {
    setDesktopAlerts(readStoredFlag(DESKTOP_ALERTS_STORAGE_KEY));
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (!announcement) {
      return;
    }
    const timer = window.setTimeout(() => setAnnouncement(null), 9000);
    return () => window.clearTimeout(timer);
  }, [announcement]);

  const markAllSeen = () => {
    writeStoredIds(SEEN_STORAGE_KEY, updateIds);
    setUnread([]);
  };

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      markAllSeen();
    }
  };

  const handleEnableAlerts = async () => {
    if (typeof Notification === 'undefined') {
      setPermissionBlocked(true);
      return;
    }
    const permission = await Notification.requestPermission();
    const granted = permission === 'granted';
    setDesktopAlerts(granted);
    setPermissionBlocked(!granted);
    writeStoredFlag(DESKTOP_ALERTS_STORAGE_KEY, granted);
  };

  const handleOpenFromToast = () => {
    setAnnouncement(null);
    setOpen(true);
    markAllSeen();
  };

  const toast =
    announcement && typeof document !== 'undefined'
      ? createPortal(
          <div
            role="status"
            className="fixed bottom-5 right-5 z-50 w-[min(20rem,calc(100vw-2.5rem))] rounded-xl border border-[rgba(164,162,187,0.24)] bg-[#13121d] p-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-semibold text-[#eae9f2]">
                {announcement.length === 1
                  ? 'New upload on the site'
                  : `${announcement.length} new uploads on the site`}
              </p>
              <button
                type="button"
                onClick={() => setAnnouncement(null)}
                aria-label="Dismiss update notice"
                className="rounded-md p-0.5 text-[#a4a2bb] hover:text-[#eae9f2] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <ul className="mt-2 space-y-1">
              {announcement.slice(0, 3).map((item) => (
                <li key={item.id} className="text-[11px] leading-relaxed text-[#c7c5d8]">
                  <span className="text-[#a4a2bb]">{UPDATE_KIND_LABEL[item.kind]}: </span>
                  {item.title}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleOpenFromToast}
              className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#eae9f2] hover:text-[#a4a2bb] transition-colors"
            >
              View all updates
            </button>
          </div>,
          document.body
        )
      : null;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={
          unread.length > 0 ? `Site updates, ${unread.length} new` : 'Site updates and uploads'
        }
        className="relative inline-flex items-center justify-center rounded-lg border border-[rgba(164,162,187,0.22)] p-2.5 text-[#eae9f2] hover:bg-[#a4a2bb]/10 transition-colors min-h-[40px] min-w-[40px]"
      >
        <Bell className="w-4 h-4" />
        {unread.length > 0 && (
          <span className="absolute -top-1.5 -right-1.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#a4a2bb] px-1 text-[10px] font-semibold text-[#0b0a12] tabular-nums">
            {unread.length > 9 ? '9+' : unread.length}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Site updates"
          className="absolute right-0 top-full z-50 mt-2 w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-[rgba(164,162,187,0.24)] bg-[#13121d] shadow-2xl"
        >
          <div className="flex items-center justify-end border-b border-[rgba(164,162,187,0.14)] px-3 py-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close updates panel"
              className="rounded-md p-1 text-[#a4a2bb] hover:text-[#eae9f2] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ul className="max-h-[55vh] divide-y divide-[rgba(164,162,187,0.12)] overflow-y-auto">
            {updates.map((item) => {
              const Icon = KIND_ICON[item.kind];
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex gap-3 px-4 py-3 transition-colors hover:bg-[#a4a2bb]/10"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[rgba(164,162,187,0.2)] bg-[#0b0a12]/60 text-[#c7c5d8]">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-[#eae9f2]">{item.title}</span>
                        <span className="rounded-full border border-[rgba(164,162,187,0.24)] px-1.5 py-0.5 text-[10px] text-[#a4a2bb]">
                          {UPDATE_KIND_LABEL[item.kind]}
                        </span>
                      </span>
                      <span className="mt-1 block truncate text-[11px] text-[#a4a2bb]">
                        {item.meta}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-[rgba(164,162,187,0.14)] px-4 py-3">
            {desktopAlerts ? (
              <p className="inline-flex items-center gap-1.5 text-[11px] text-[#a4a2bb]">
                <Check className="w-3.5 h-3.5" />
                Desktop alerts are on for this browser
              </p>
            ) : (
              <button
                type="button"
                onClick={handleEnableAlerts}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[rgba(164,162,187,0.24)] px-3 py-2 text-[11px] font-semibold text-[#eae9f2] transition-colors hover:bg-[#a4a2bb]/10"
              >
                <BellRing className="w-3.5 h-3.5" />
                Enable desktop alerts
              </button>
            )}
            <p className="mt-2 text-[10px] leading-relaxed text-[#a4a2bb]/80">
              {permissionBlocked
                ? 'Notifications are blocked for this site. Allow them in your browser settings to turn alerts on.'
                : 'You will be alerted when you visit and something new has been uploaded.'}
            </p>
          </div>
        </div>
      )}

      {toast}
    </div>
  );
};
