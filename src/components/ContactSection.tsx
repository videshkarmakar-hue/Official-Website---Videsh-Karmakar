import React, {useState} from 'react';
import {AlertCircle, Check, Copy, Mail, Send} from 'lucide-react';

interface ContactSectionProps {
  emailAddress: string;
}

const INQUIRY_TOPICS = [
  'Music Collaboration',
  'Booking & Events',
  'App & Web Project',
  'General Inquiry',
];

export const ContactSection: React.FC<ContactSectionProps> = ({emailAddress}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [receiptId, setReceiptId] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, topic, message}),
      });
      const data = (await response.json()) as {
        success?: boolean;
        receiptId?: string;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setStatus('error');
        setFeedback(data.error ?? 'Unable to send inquiry. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback(data.message ?? 'Your message has been received.');
      setReceiptId(data.receiptId ?? '');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback('Connection issue while sending. Please email directly.');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-22 border-t border-[rgba(164,162,187,0.14)]"
    >
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Gmail Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#a4a2bb] mb-3">
                04. Direct Contact
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#eae9f2]">
                Collaborations & Inquiries
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#a4a2bb]">
                Reach out directly for music collaborations, licensing, visual sound design, or software inquiries.
              </p>

              <div className="mt-8 surface-panel rounded-2xl p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#a4a2bb]" />
                    <span className="text-xs font-medium text-[#a4a2bb]">
                      Direct Gmail
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-[#eae9f2] hover:bg-[#a4a2bb]/10 transition-colors"
                  >
                    {copiedEmail ? (
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
                </div>

                <a
                  href={`mailto:${emailAddress}`}
                  className="mt-3 block font-display text-base font-semibold text-[#eae9f2] hover:underline underline-offset-4 break-all"
                >
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Reactive Node.js Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="surface-panel rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#a4a2bb] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full rounded-lg border border-[rgba(164,162,187,0.22)] bg-[#0b0a12] px-3.5 py-2.5 text-sm text-[#eae9f2] placeholder-[#a4a2bb]/45 focus:border-[#a4a2bb] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#a4a2bb] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[rgba(164,162,187,0.22)] bg-[#0b0a12] px-3.5 py-2.5 text-sm text-[#eae9f2] placeholder-[#a4a2bb]/45 focus:border-[#a4a2bb] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-topic"
                  className="block text-xs font-medium text-[#a4a2bb] mb-2"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-lg border border-[rgba(164,162,187,0.22)] bg-[#0b0a12] px-3.5 py-2.5 text-sm text-[#eae9f2] focus:border-[#a4a2bb] focus:outline-none"
                >
                  {INQUIRY_TOPICS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#a4a2bb] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your track, event, or project..."
                  className="w-full rounded-lg border border-[rgba(164,162,187,0.22)] bg-[#0b0a12] px-3.5 py-2.5 text-sm text-[#eae9f2] placeholder-[#a4a2bb]/45 focus:border-[#a4a2bb] focus:outline-none resize-y"
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-[rgba(164,162,187,0.38)] bg-[#a4a2bb]/10 px-4 py-3 text-xs text-[#eae9f2]"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#a4a2bb] mt-0.5" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === 'success' && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-lg border border-[rgba(164,162,187,0.38)] bg-[#a4a2bb]/14 px-4 py-3 text-xs text-[#eae9f2]"
                >
                  <Check className="w-4 h-4 shrink-0 text-[#eae9f2] mt-0.5" />
                  <div>
                    <span>{feedback}</span>
                    {receiptId && (
                      <span className="block mt-1 text-[#a4a2bb] tabular-nums">
                        Reference: {receiptId}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <span className="text-xs text-[#a4a2bb]">
                  Responds via {emailAddress}
                </span>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold btn-accent disabled:opacity-60 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
