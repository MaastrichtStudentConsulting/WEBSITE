'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const photos = ['photo1','photo2','photo3','photo20','photo5','photo6','photo7','photo8','photo9','photo10','photo22'];
const photosRow2 = ['photo11','photo12','photo13','photo14','photo15','photo23','photo16','photo17','photo4','photo18','photo21'];

// SVG icons matching the real website style
const IconLocation = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconTie = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6l1 7-4 11-4-11 1-7z"/><path d="M10 3l.5 4h3L14 3"/>
  </svg>
);

export default function AlumniEventClient() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introDone, setIntroDone] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Intro: logo shows 1.8s, fades out over 0.8s
  useEffect(() => {
    const t1 = setTimeout(() => setIntroVisible(false), 1800);
    const t2 = setTimeout(() => setIntroDone(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    if (!introDone) return;
    const els = document.querySelectorAll('.ae-animate');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ae-visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [introDone]);

  // Countdown
  const [cd, setCd] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--', done: false });
  useEffect(() => {
    const target = new Date(Date.UTC(2026, 10, 7, 17, 0, 0));
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setCd(c => ({ ...c, done: true })); return; }
      setCd({
        days: String(Math.floor(diff / 86400000)),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const isSolid = scrolled || mobileOpen;

  return (
    <>
      {/* ── INTRO SPLASH ── */}
      {!introDone && (
        <div style={{
          opacity: introVisible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          position: 'fixed', inset: 0, zIndex: 9999,
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Image src="/images/msc-logo-big.png" alt="Maastricht Student Consulting" width={320} height={173} style={{ objectFit: 'contain' }} priority />
        </div>
      )}

      {/* ── NAVBAR — real website style ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${isSolid ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollTo('hero')} className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0">
              <Image
                src={isSolid ? '/images/msc-logo-big.png' : '/images/msc-logo-big.png'}
                alt="Maastricht Student Consulting"
                width={120} height={72}
                className={`h-12 w-auto transition-all duration-200 ${!isSolid ? 'navbar-logo-white' : ''}`}
                priority
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {[['about','About'],['schedule','Schedule'],['accommodation','Accommodation'],['contact','Contact']].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className={`px-4 py-2 text-[15px] font-medium transition-colors bg-transparent border-0 cursor-pointer font-sans ${isSolid ? 'text-navy/70 hover:text-orange' : 'text-white/85 hover:text-orange'}`}>
                  {label}
                </button>
              ))}
              <button onClick={() => scrollTo('rsvp')}
                className="ml-4 px-6 py-2 rounded text-[15px] font-medium transition-all border border-orange bg-orange text-white hover:bg-orange/90 font-sans cursor-pointer">
                RSVP
              </button>
            </div>

            {/* Mobile hamburger */}
            <button className={`lg:hidden p-2 relative w-10 h-10 flex items-center justify-center bg-transparent border-0 cursor-pointer ${isSolid ? 'text-navy' : 'text-white'}`}
              onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
              <span className="block w-6 h-5 relative">
                <span className={`absolute left-0 h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? 'top-[9px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-0 top-20 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="space-y-2 text-center">
            {[['about','About'],['schedule','Schedule'],['accommodation','Accommodation'],['contact','Contact']].map(([id, label], i) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`block px-6 py-4 text-2xl font-semibold text-navy hover:text-orange bg-transparent border-0 cursor-pointer font-sans transition-all duration-300 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}>
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo('rsvp')}
              className={`mt-6 border-2 border-orange bg-orange text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange/90 cursor-pointer font-sans transition-all duration-300 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: mobileOpen ? '200ms' : '0ms' }}>
              RSVP
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/video/alumni-event.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,24,48,0.52)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
            MSC Alumni Event 2026
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', opacity: 0.85, marginBottom: '2.5rem', fontWeight: 400 }}>
            Join us on the 7th &amp; 8th of November in Maastricht
          </p>
          {cd.done ? (
            <p style={{ fontSize: '1.2rem', color: '#EE9643', marginBottom: '2.5rem' }}>The event has started!</p>
          ) : (
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {[['Days', cd.days], ['Hours', cd.hours], ['Minutes', cd.minutes], ['Seconds', cd.seconds]].map(([label, val]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.35rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => scrollTo('rsvp')} className="bg-orange text-white border-0 px-10 py-4 rounded-full text-base font-bold tracking-wide cursor-pointer font-sans hover:opacity-90 transition-opacity">
            RSVP Now
          </button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ae-animate text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">About the Event</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="ae-animate text-gray-600 leading-relaxed text-[1.05rem] space-y-4">
            <p>We are thrilled to invite you to the <strong>MSC Alumni Event 2026</strong>, a celebration of everything Maastricht Student Consulting has built over the years.</p>
            <p>What started as a small student initiative has grown into a vibrant network of professionals spanning the globe. Over the years, MSC has been defined by innovative projects, lasting friendships, and a shared drive to make an impact. The bonds forged during our time at MSC continue to enrich both our professional and personal lives.</p>
            <p>This November, we come together once again to reconnect with old friends, celebrate our shared journey, and look forward to the exciting road ahead.</p>
            <p>Join us for an unforgettable weekend filled with memories, laughter, and meaningful connections. Whether you were part of MSC&apos;s earliest days or its most recent chapter, <strong>this event is for you</strong>.</p>
          </div>

          {/* Info cards */}
          <div className="ae-animate grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {[
              { Icon: IconLocation, title: 'Location', text: 'Maastricht' },
              { Icon: IconCalendar, title: 'Date & Time', text: 'November 7–8, 2026' },
              { Icon: IconTie, title: 'Dress Code', text: 'Black Tie (Saturday evening)' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="text-center p-8 border border-gray-200 rounded-xl">
                <div className="text-navy flex justify-center mb-4"><Icon /></div>
                <h3 className="text-base font-bold text-navy mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" className="py-20 sm:py-28" style={{ background: '#f8f8fa' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="ae-animate text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">Schedule</h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Saturday */}
          <div className="ae-animate mb-12">
            <h3 className="text-lg font-bold mb-6" style={{ color: '#EE9643' }}>Saturday, November 7th</h3>
            <div className="space-y-0">
              {[
                { time: '18:00 – 19:00', title: 'Reception', sub: 'Château Neercanne, Cannerweg 800, Maastricht', last: false },
                { time: '19:30 – 22:30', title: 'Dinner', sub: 'Château Neercanne, Cannerweg 800, Maastricht', last: false },
                { time: '23:00', title: 'Transport to City Center', sub: 'Organized shuttle provided', last: false },
                { time: '23:30 – 03:00', title: 'Party at Cavo', sub: 'Sint Amorsplein 3, 6211 GT Maastricht', last: true },
              ].map(({ time, title, sub, last }) => (
                <div key={time} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '0 1.25rem' }}>
                  {/* Left: dot + line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EE9643', flexShrink: 0, marginTop: '4px', zIndex: 1 }} />
                    {!last && <div style={{ width: '2px', flex: 1, background: '#e0e0e0', minHeight: '40px' }} />}
                  </div>
                  {/* Right: content */}
                  <div style={{ paddingBottom: last ? 0 : '1.75rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#EE9643', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.2rem' }}>{time}</div>
                    <div className="font-bold text-navy text-[1rem]">{title}</div>
                    <div className="text-gray-400 text-sm mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sunday — single item, no line */}
          <div className="ae-animate mb-14">
            <h3 className="text-lg font-bold mb-6" style={{ color: '#EE9643' }}>Sunday, November 8th</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '0 1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EE9643', flexShrink: 0, marginTop: '4px' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#EE9643', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.2rem' }}>11:00 – 13:30</div>
                <div className="font-bold text-navy text-[1rem]">Hangover Brunch</div>
                <div className="text-gray-400 text-sm mt-0.5">(to be announced)</div>
              </div>
            </div>
          </div>

          {/* Map — enlarged */}
          <div className="ae-animate">
            <h3 className="text-xl font-bold text-navy mb-5">Venues</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/alumni-event/map.png" alt="Venue map of Maastricht" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTOWALL ── */}
      <section id="photowall" className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="ae-animate text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">A Glimpse of MSC</h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-gray-500">From consulting rooms to celebrations, here&apos;s what MSC is all about.</p>
          </div>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '16px', animation: 'ae-scroll-left 50s linear infinite', width: 'max-content' }}>
            {[...photos, ...photos].map((p, i) => (
              <div key={i} style={{ width: '340px', height: '240px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                <Image src={`/images/alumni-event/${p}.jpg`} alt="MSC moment" width={340} height={240} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '16px', animation: 'ae-scroll-right 50s linear infinite', width: 'max-content' }}>
            {[...photosRow2, ...photosRow2].map((p, i) => (
              <div key={i} style={{ width: '340px', height: '240px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                <Image src={`/images/alumni-event/${p}.jpg`} alt="MSC moment" width={340} height={240} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION ── */}
      <section id="accommodation" style={{ background: '#f8f8fa' }} className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="ae-animate text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">Where to Stay</h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-gray-500">Here are some options for your stay.</p>
            <p className="text-orange font-semibold text-sm mt-2">And of course, our current members are always happy to host MSC alumni!</p>
          </div>
          <div className="ae-animate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { name: 'The Social Hub', img: 'the-social-hub', address: 'Sphinxcour 9A, Maastricht', price: 'From €148 / night', url: 'https://www.thesocialhub.co' },
              { name: 'Kruisherenhotel', img: 'kruisherenhotel', address: 'Kruisherengang 19-23, Maastricht', price: 'From €282 / night', url: 'https://www.oostwegelcollection.nl/kruisherenhotel-maastricht/' },
              { name: 'Haas Hustinx', img: 'haas-hustinx', address: 'Vrijthof 20, Maastricht', price: 'From €216 / night', url: 'https://haashustinx.nl' },
              { name: 'Fitz Roy', img: 'fitz-roy', address: 'Boschstraat 70, Maastricht', price: 'From €230 / night', url: 'https://www.fitz-roy.nl' },
            ].map(({ name, img, address, price, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-gray-200 bg-white no-underline text-inherit hover:shadow-md transition-shadow">
                <div className="relative h-56">
                  <Image src={`/images/alumni-event/${img}.jpeg`} alt={name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-navy mb-1">{name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{address}</p>
                  <p className="text-sm font-semibold text-orange">{price}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="ae-animate text-center text-gray-400 text-xs mt-6">Prices are indicative. Discount codes may follow.</p>
        </div>
      </section>

      {/* ── RSVP ── */}
      <section id="rsvp" className="py-24 bg-navy text-white text-center">
        <div className="ae-animate max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">We can&apos;t wait to celebrate with you!</h2>
          <p className="text-white/70 text-lg mb-8">Please confirm your participation by <strong className="text-white">July 31, 2026</strong>.</p>
          <a href="#rsvp" className="inline-block bg-orange text-white px-12 py-4 rounded-full text-base font-bold tracking-wide hover:opacity-90 transition-opacity no-underline">
            RSVP Now
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-10 bg-navy border-t border-white/10 text-center">
        <p className="text-white/50 text-sm">
          Have questions? Reach us at{' '}
          <a href="mailto:info@maastrichtconsulting.com" className="text-white/80 hover:text-orange transition-colors font-medium">
            info@maastrichtconsulting.com
          </a>
        </p>
      </section>

      {/* ── FOOTER — real website format ── */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                <a href="mailto:info@maastrichtconsulting.com" className="hover:text-orange transition-colors">
                  info@maastrichtconsulting.com
                </a>
              </p>
              <p className="text-white/70 text-sm mt-1">+49 1573 0686972</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2.5">
                <li><Link href="/imprint" className="text-white/70 text-sm hover:text-orange transition-colors">Imprint</Link></li>
                <li><Link href="/privacy" className="text-white/70 text-sm hover:text-orange transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Social Networks</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/maastrichtstudentconsulting" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange transition-colors" aria-label="Instagram">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://linkedin.com/company/maastricht-student-consulting" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orange transition-colors" aria-label="LinkedIn">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-white/30 text-sm">&copy; Maastricht Student Consulting 2026</p>
          </div>
        </div>
      </footer>

      <style>{`
        .ae-animate { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .ae-visible { opacity: 1; transform: translateY(0); }
        @keyframes ae-scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ae-scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </>
  );
}
