'use client';

import { useEffect, useState, type FormEvent } from 'react';

const INFO_EMAIL = 'info@maastrichtconsulting.com';
const SUBJECT = 'Project enquiry via the MSC website';

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition';

function mailtoLink(data?: Record<string, string>) {
  const body = data
    ? `${data.message ?? ''}\n\n${[data.name, data.company, data.email].filter(Boolean).join('\n')}`
    : '';
  return `mailto:${INFO_EMAIL}?subject=${encodeURIComponent(SUBJECT)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}

/**
 * Floating "Interested in a project with us?" button (bottom right) on the
 * Clients page. Opens a short message form that is delivered to the info
 * mailbox via FormSubmit. If sending fails, the visitor can send the same
 * message with their own email program.
 */
export default function ProjectEnquiry() {
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [draft, setDraft] = useState<Record<string, string>>();

  // Show the button once the visitor starts scrolling
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide it while the contact section at the bottom is on screen
  useEffect(() => {
    const el = document.getElementById('contact');
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Close with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data._honey) return; // spam bot
    delete data._honey;
    setDraft(data);
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${INFO_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: SUBJECT, _replyto: data.email, _template: 'table' }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && String(json.success) === 'true') {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const show = (visible && !atContact) || open;

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {open ? (
        <div
          role="dialog"
          aria-label="Send us a message"
          className="w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
        >
          <div className="flex items-start justify-between gap-4 px-5 pt-5">
            <div>
              <p className="text-orange text-[11px] font-bold uppercase tracking-[0.18em]">Work with MSC</p>
              <p className="mt-1 text-lg font-bold text-navy leading-snug">Interested in a project with us?</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="-mr-1 p-1 rounded-full text-navy/40 hover:text-navy hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === 'sent' ? (
            <div className="px-5 pb-6 pt-3">
              <p className="text-navy/70 text-sm leading-relaxed">
                Thank you – your message is on its way. We will get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-semibold text-navy underline underline-offset-2 hover:text-orange"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="px-5 pb-5 pt-3 space-y-3">
              <p className="text-navy/60 text-sm leading-relaxed">
                Tell us briefly what you have in mind – our team will get back to you.
              </p>
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
              <div className="grid grid-cols-2 gap-3">
                <input name="name" required aria-label="Name" placeholder="Name" autoComplete="name" className={inputCls} />
                <input name="company" aria-label="Company" placeholder="Company" autoComplete="organization" className={inputCls} />
              </div>
              <input name="email" type="email" required aria-label="Email" placeholder="Email" autoComplete="email" className={inputCls} />
              <textarea
                name="message"
                required
                rows={4}
                aria-label="Your message"
                placeholder="Your project or question"
                className={`${inputCls} resize-none`}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center bg-orange hover:bg-orange/90 disabled:opacity-60 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' ? (
                <p className="text-xs text-navy/70 bg-orange/10 rounded-lg px-3 py-2.5 leading-relaxed">
                  Your message could not be sent from here.{' '}
                  <a href={mailtoLink(draft)} className="font-semibold underline underline-offset-2 hover:text-orange">
                    Send it by email instead
                  </a>{' '}
                  – it is already filled in.
                </p>
              ) : (
                <p className="text-[11px] text-navy/45 leading-relaxed text-center">
                  Or email us at{' '}
                  <a href={mailtoLink()} className="underline underline-offset-2 hover:text-navy">
                    {INFO_EMAIL}
                  </a>
                  {' · '}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-navy">
                    Privacy
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 rounded-full bg-white pl-2 pr-5 py-2 shadow-[0_8px_30px_rgba(36,46,87,0.18)] border border-gray-100 hover:shadow-[0_10px_34px_rgba(36,46,87,0.26)] transition-shadow"
        >
          <span className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <span className="text-left leading-tight">
            <span className="block text-sm font-bold text-navy">Interested in a project?</span>
            <span className="block text-xs text-navy/55 group-hover:text-orange transition-colors">Send us a message</span>
          </span>
        </button>
      )}
    </div>
  );
}
