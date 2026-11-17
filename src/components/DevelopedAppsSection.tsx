import React, {useEffect, useState} from 'react';
import {AppWindow, ArrowUpRight, Globe, X} from 'lucide-react';
import type {DevelopedAppSlot} from '../data/portfolioData';

interface DevelopedAppsSectionProps {
  apps: DevelopedAppSlot[];
}

export const DevelopedAppsSection: React.FC<DevelopedAppsSectionProps> = ({
  apps,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<DevelopedAppSlot | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSlot(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="apps"
      className="py-16 md:py-22 border-t border-[rgba(164,162,187,0.14)]"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium text-[#a4a2bb] mb-3">
              03. Developed Apps
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#eae9f2]">
              Software & Web Applications
            </h2>
            <p className="mt-2 text-sm text-[#a4a2bb] max-w-2xl">
              Independent Android and web applications designed and developed by Videsh Karmakar.
            </p>
          </div>
        </div>

        {/* Structured App Showcase Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((slot) => (
            <article
              key={slot.id}
              className="surface-panel-interactive rounded-2xl p-6 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(164,162,187,0.14)]">
                  <span className="text-xs font-medium text-[#a4a2bb] tabular-nums">
                    Slot {slot.slotNumber} · {slot.category}
                  </span>
                  <AppWindow className="w-4 h-4 text-[#a4a2bb]" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-[#eae9f2]">
                  {slot.appName}
                </h3>

                {slot.tagline && (
                  <p className="mt-1 text-xs font-medium text-[#c7c5d8]">
                    {slot.tagline}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-[#a4a2bb]">
                  {slot.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(164,162,187,0.14)] flex items-center justify-between gap-3">
                {slot.isPopulated && slot.websiteUrl ? (
                  <a
                    href={slot.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#eae9f2] hover:text-[#a4a2bb] transition-colors whitespace-nowrap"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-[#a4a2bb]/80">
                    Website URL · Pending Entry
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className="text-xs font-medium text-[#eae9f2] hover:text-[#a4a2bb] transition-colors whitespace-nowrap shrink-0"
                >
                  {slot.isPopulated ? 'App Details' : 'View Structure'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* App Detail / Slot Structure Modal */}
      {selectedSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="app-slot-modal-title"
          onClick={() => setSelectedSlot(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0a12]/85 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full ${
              selectedSlot.isPopulated ? 'max-w-2xl' : 'max-w-md'
            } max-h-[88vh] overflow-y-auto rounded-2xl border border-[rgba(164,162,187,0.28)] bg-[#13121d] p-6 sm:p-7 shadow-2xl`}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[rgba(164,162,187,0.14)]">
              <div>
                <p className="text-xs text-[#a4a2bb] tabular-nums">
                  Slot {selectedSlot.slotNumber} · {selectedSlot.category}
                </p>
                <h3
                  id="app-slot-modal-title"
                  className="mt-1 font-display text-2xl font-semibold text-[#eae9f2]"
                >
                  {selectedSlot.appName}
                </h3>
                {selectedSlot.tagline && (
                  <p className="mt-1 text-sm text-[#c7c5d8]">
                    {selectedSlot.tagline}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                aria-label="Close application details"
                className="rounded-lg border border-[rgba(164,162,187,0.22)] p-2 text-[#eae9f2] hover:bg-[#a4a2bb]/10 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {selectedSlot.isPopulated ? (
              <div className="mt-5 space-y-6 text-sm">
                {/* Summary & About */}
                <div className="space-y-3 text-[#c7c5d8] leading-relaxed">
                  <p>{selectedSlot.description}</p>
                  {selectedSlot.about?.map((para, idx) => (
                    <p key={idx} className="text-[#a4a2bb]">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                {selectedSlot.highlights && selectedSlot.highlights.length > 0 && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)]">
                    <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedSlot.highlights.map((item) => (
                        <li
                          key={item.title}
                          className="text-xs sm:text-sm leading-relaxed text-[#a4a2bb]"
                        >
                          <span className="font-medium text-[#eae9f2]">
                            {item.title}
                          </span>{' '}
                          <span aria-hidden="true">—</span> {item.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Detailed Features (when provided) */}
                {selectedSlot.features && selectedSlot.features.length > 0 && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)]">
                    <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedSlot.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="rounded-xl border border-[rgba(164,162,187,0.16)] bg-[#0b0a12]/50 p-3.5"
                        >
                          <div className="font-display text-xs font-semibold text-[#eae9f2]">
                            {feat.title}
                          </div>
                          <p className="mt-1 text-xs text-[#a4a2bb]">
                            {feat.summary}
                          </p>
                          <ul className="mt-2 space-y-1 text-[11px] text-[#c7c5d8] list-disc list-inside">
                            {feat.points.map((pt) => (
                              <li key={pt}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Privacy & Permissions (when provided) */}
                {selectedSlot.privacyNote && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)]">
                    <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-2">
                      Privacy & Permissions
                    </h4>
                    <p className="text-xs leading-relaxed text-[#a4a2bb]">
                      {selectedSlot.privacyNote}
                    </p>
                    {selectedSlot.privacyExcluded &&
                      selectedSlot.privacyExcluded.length > 0 && (
                        <p className="mt-2 text-xs text-[#c7c5d8]">
                          <span className="text-[#a4a2bb]">No access required: </span>
                          {selectedSlot.privacyExcluded.join(' · ')}
                        </p>
                      )}
                  </div>
                )}

                {/* App Information Table */}
                {selectedSlot.appInfo && selectedSlot.appInfo.length > 0 && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)]">
                    <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-3">
                      App Information
                    </h4>
                    <div className="overflow-hidden rounded-xl border border-[rgba(164,162,187,0.18)]">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <tbody className="divide-y divide-[rgba(164,162,187,0.12)]">
                          {selectedSlot.appInfo.map((row) => (
                            <tr key={row.label} className="bg-[#0b0a12]/50">
                              <th
                                scope="row"
                                className="px-4 py-2.5 font-medium text-[#a4a2bb] w-2/5"
                              >
                                {row.label}
                              </th>
                              <td className="px-4 py-2.5 text-[#eae9f2] tabular-nums">
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Design & Installation */}
                {(selectedSlot.designNote || selectedSlot.installationSteps) && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)] grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedSlot.designNote && (
                      <div>
                        <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-2">
                          Development & Design
                        </h4>
                        <p className="text-xs leading-relaxed text-[#a4a2bb]">
                          {selectedSlot.designNote}
                        </p>
                      </div>
                    )}

                    {selectedSlot.installationSteps && (
                      <div>
                        <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-2">
                          Installation & Updates
                        </h4>
                        <ol className="space-y-1.5 text-xs text-[#a4a2bb] list-decimal list-inside">
                          {selectedSlot.installationSteps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                        {selectedSlot.updatesNote && (
                          <p className="mt-2 text-xs text-[#a4a2bb]/85">
                            {selectedSlot.updatesNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Disclaimer (if present) */}
                {selectedSlot.disclaimer && (
                  <div className="pt-5 border-t border-[rgba(164,162,187,0.14)]">
                    <h4 className="font-display text-sm font-semibold text-[#eae9f2] mb-2">
                      Disclaimer
                    </h4>
                    <p className="text-xs leading-relaxed text-[#a4a2bb]">
                      {selectedSlot.disclaimer}
                    </p>
                  </div>
                )}

                {/* Project Status & Launch CTA */}
                <div className="pt-5 border-t border-[rgba(164,162,187,0.14)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#a4a2bb] max-w-sm">
                    {selectedSlot.projectStatus && (
                      <p>{selectedSlot.projectStatus}</p>
                    )}
                    <p className="mt-1 text-[#c7c5d8]">
                      {selectedSlot.tagline ? `${selectedSlot.tagline} · ` : ''}
                      Crafted by Videsh Karmakar
                    </p>
                  </div>

                  {selectedSlot.websiteUrl && (
                    <a
                      href={selectedSlot.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold btn-accent whitespace-nowrap shrink-0"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Open Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-[#a4a2bb]">App Name Field</dt>
                  <dd className="mt-1 font-medium text-[#eae9f2]">
                    {selectedSlot.appName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#a4a2bb]">Website Link Field</dt>
                  <dd className="mt-1 text-[#c7c5d8]">
                    {selectedSlot.websiteUrl || 'Awaiting live deployment URL'}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#a4a2bb]">Description Field</dt>
                  <dd className="mt-1 leading-relaxed text-[#c7c5d8]">
                    {selectedSlot.description}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#a4a2bb]">Category</dt>
                  <dd className="mt-1 text-[#c7c5d8]">{selectedSlot.category}</dd>
                </div>
              </dl>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
