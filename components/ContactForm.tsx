'use client';

import { useState, type FormEvent } from 'react';

export const INFO_EMAIL = 'info@maastrichtconsulting.com';

export interface ContactFormOptions {
  /** Subject line of the email that arrives in the info mailbox */
  subject: string;
  /** Heading above the form */
  heading: string;
  /** Short line under the heading */
  intro?: string;
  messagePlaceholder?: string;
  /** Show a "Company" field (client enquiries) */
  company?: boolean;
  /** Label of the optional second field when company is off */
  studyField?: boolean;
}

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/35 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition';

function mailtoLink(subject: string, data?: Record<string, string>) {
  const body = data
    ? `${data.message ?? ''}\n\n${[data.name, data.company, data.study, data.email].filter(Boolean).join('\n')}`
    : '';
  return `mailto:${INFO_EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}

/**
 * Short message form. Messages are delivered to the info mailbox via
 * FormSubmit; if sending fails, the visitor can send the same message from
 * their own email program.
 */
export default function ContactForm({ subject, heading, intro, messagePlaceholder, company, studyField }: ContactFormOptions) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [draft, setDraft] = useState<Record<string, string>>();

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
        body: JSON.stringify({ ...data, _subject: subject, _replyto: data.email, _template: 'table' }),
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

  return (
    <div id="contact-form" className="scroll-mt-28 h-full rounded-2xl bg-white border border-gray-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-navy">{heading}</h3>
      {intro && <p className="mt-1.5 text-navy/60 text-[15px] leading-relaxed">{intro}</p>}

      {status === 'sent' ? (
        <div className="mt-6 rounded-xl bg-gray-50 p-6">
          <p className="font-bold text-navy">Thank you – your message is on its way.</p>
          <p className="text-navy/60 text-sm mt-1">We will get back to you as soon as possible.</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-semibold text-navy underline underline-offset-2 hover:text-navy/70"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required aria-label="Name" placeholder="Name" autoComplete="name" className={inputCls} />
            {company ? (
              <input name="company" aria-label="Company" placeholder="Company" autoComplete="organization" className={inputCls} />
            ) : studyField ? (
              <input name="study" aria-label="Study programme" placeholder="Study programme (optional)" className={inputCls} />
            ) : null}
            <input
              name="email"
              type="email"
              required
              aria-label="Email"
              placeholder="Email"
              autoComplete="email"
              className={`${inputCls} ${company || studyField ? 'sm:col-span-2' : ''}`}
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            aria-label="Your message"
            placeholder={messagePlaceholder ?? 'Your message'}
            className={`${inputCls} resize-none`}
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 disabled:opacity-60 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className="text-navy/45 text-xs leading-relaxed">
              Goes straight to{' '}
              <a href={mailtoLink(subject)} className="underline underline-offset-2 hover:text-navy">
                {INFO_EMAIL}
              </a>
              {' · '}
              <a href="/privacy" className="underline underline-offset-2 hover:text-navy">
                Privacy
              </a>
            </p>
          </div>
          {status === 'error' && (
            <p className="text-sm text-navy/75 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 leading-relaxed">
              Your message could not be sent from here.{' '}
              <a href={mailtoLink(subject, draft)} className="font-semibold underline underline-offset-2">
                Send it by email instead
              </a>{' '}
              – it is already filled in.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
