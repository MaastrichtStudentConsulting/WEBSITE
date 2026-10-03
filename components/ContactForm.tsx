'use client';

import { useState, type FormEvent } from 'react';

export type FormVariant = 'client' | 'application';

interface ContactFormProps {
  variant: FormVariant;
  /** Email address that receives the message */
  recipient: string;
  /** Subject line of the email that is sent */
  subject: string;
  submitLabel?: string;
}

const topics = ['Strategy & Organisation', 'Marketing', 'Operations', 'AI & Automation', 'Mergers & Acquisitions', 'Other'];

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/35 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition';

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy mb-1.5">
        {label} {optional && <span className="font-normal text-navy/40">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm({ variant, recipient, subject, submitLabel = 'Send message' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data._honey) return; // spam bot
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: subject, _template: 'table' }),
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

  if (status === 'sent') {
    return (
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center">
        <p className="text-xl font-bold text-navy">Thank you – your message has been sent.</p>
        <p className="text-navy/60 mt-2">We will get back to you as soon as possible.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-navy underline underline-offset-2 hover:text-orange">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name">
          <input name="name" required className={inputCls} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </Field>
      </div>

      {variant === 'client' ? (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Company">
              <input name="company" required className={inputCls} placeholder="Company name" autoComplete="organization" />
            </Field>
            <Field label="Phone" optional>
              <input name="phone" type="tel" className={inputCls} placeholder="+31 ..." autoComplete="tel" />
            </Field>
          </div>
          <Field label="Topic">
            <select name="topic" required defaultValue="" className={inputCls}>
              <option value="" disabled>
                What can we help you with?
              </option>
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Your project">
            <textarea name="message" required rows={5} className={inputCls} placeholder="Briefly describe your challenge or project idea." />
          </Field>
        </>
      ) : (
        <>
          <Field label="Study programme" optional>
            <input name="study" className={inputCls} placeholder="e.g. BSc International Business" />
          </Field>
          <Field label="Your question">
            <textarea name="message" required rows={5} className={inputCls} placeholder="What would you like to know about MSC or the application?" />
          </Field>
        </>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 disabled:opacity-60 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors"
        >
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        <p className="text-navy/45 text-xs leading-relaxed">
          Your details are only used to answer your request. See our{' '}
          <a href="/privacy" className="underline underline-offset-2 hover:text-navy">
            privacy policy
          </a>
          .
        </p>
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 rounded-lg px-4 py-3">
          Sorry, your message could not be sent. Please email us directly at{' '}
          <a href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}`} className="underline font-semibold">
            {recipient}
          </a>
          .
        </p>
      )}
    </form>
  );
}
