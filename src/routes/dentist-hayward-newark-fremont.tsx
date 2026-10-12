import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, MapPin, ExternalLink, Clock } from "lucide-react";
import { MainSiteHeader, MainSiteFooter } from "@/components/all-on-x/main-site-chrome";
import { MotionProvider, ScrollProgress } from "@/components/all-on-x/motion";
import { Reveal, HubMap, BookLink, CallLink, Counter, TypingBar, CityCard, LocalPageCard, HubForm, BENTO_ICONS, type CityKey } from "@/components/locations-hub/hub";
import { booking } from "@/config/all-on-x-booking";
import { hero, quick, searched, cities, localPages, bento, services, implants, doctor, steps, plans, PAGE_URL } from "@/data/locations-hub";
import doctorImg from "@/assets/dr-sayeedi.jpg";
import pageCss from "./locations-hub.css?url";

const title = "Dentist for Hayward, Newark & Fremont | Noble Dental Care";
const description = "Need a dentist near Hayward, Newark or Fremont? Dr. Sayeedi offers family care and dental implants at our nearby Union City office. Book your visit today.";

export const Route = createFileRoute("/dentist-hayward-newark-fremont")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: PAGE_URL }, { name: "twitter:card", content: "summary" }, { name: "twitter:title", content: title }, { name: "twitter:description", content: description }, { name: "geo.region", content: "US-CA" }, { name: "geo.placename", content: "Union City" }],
    links: [{ rel: "canonical", href: PAGE_URL }, { rel: "stylesheet", href: pageCss }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" }],
  }),
  component: Page,
});

function Page() {
  const [active, setActive] = useState<CityKey | null>(null);
  const [tab, setTab] = useState(0);
  const word = (w: string, c: CityKey, i: number) => <span className={`lh-mark lh-${c}`} style={{ animationDelay: `${0.6 + i * 0.3}s` }}>{w}</span>;
  return <MotionProvider><div className={`lh-page${active ? ` lh-focus-${active}` : ""}`}>
    <ScrollProgress />
    <MainSiteHeader />
    <main>
      <section className="lh-hero" aria-labelledby="lh-title">
        <div className="lh-contours" aria-hidden="true" />
        <div className="lh-container lh-hero-grid">
          <div className="lh-hero-copy">
            <nav className="lh-crumb" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight /><span>Areas We Serve</span></nav>
            <p className="lh-sticker">{hero.eyebrow}</p>
            <h1 id="lh-title">Your Dentist for {word("Hayward", "hayward", 0)}, {word("Newark", "newark", 1)} and {word("Fremont", "fremont", 2)}, Centrally Located in Union City</h1>
            <p className="lh-lead">{hero.lead}</p>
            <ul className="lh-checks">{hero.bullets.map(b => <li key={b}><Check />{b}</li>)}</ul>
            <div className="lh-actions"><BookLink /><CallLink /></div>
            <div className="lh-switch" role="group" aria-label="Jump to your city">{(["hayward", "newark", "fremont"] as CityKey[]).map(c => <a key={c} href={`#city-${c}`} className={`lh-switch-pill lh-${c}`} onMouseEnter={() => setActive(c)} onMouseLeave={() => setActive(null)}>{c[0].toUpperCase() + c.slice(1)}</a>)}</div>
          </div>
          <div className="lh-hero-map"><HubMap active={active} /></div>
        </div>
        <div className="lh-container"><div className="lh-stats">{hero.stats.map(([n, l]) => <div key={l} className="lh-stat"><strong>{typeof n === "number" ? <Counter value={n} /> : n}</strong><span>{l}</span></div>)}</div></div>
      </section>

      <section className="lh-section" aria-labelledby="lh-quick">
        <div className="lh-container lh-quick">
          <Reveal className="lh-quick-card"><MapPin className="lh-quick-icon" /><h2 id="lh-quick">Where Is Noble Dental Care, and Which Cities Do You Serve?</h2><p data-speakable>{quick.answer}</p></Reveal>
          <Reveal delay={0.1} className="lh-ticket"><dl>{quick.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Reveal>
        </div>
      </section>

      <section className="lh-section lh-band" aria-labelledby="lh-searched">
        <div className="lh-container"><Reveal className="lh-head"><h2 id="lh-searched">Searching for a Dentist in Hayward, Newark or Fremont?</h2><p>{searched.intro}</p></Reveal>
          <div className="lh-search-grid">{searched.bars.map(([q, a, c]) => <TypingBar key={q} query={q} answer={a} city={c} />)}</div></div>
      </section>

      <section className="lh-section" id="cities" aria-labelledby="lh-cities">
        <div className="lh-container"><Reveal className="lh-head"><p className="lh-sticker">Pick Your City</p><h2 id="lh-cities">Find Your Local Page: Hayward, Newark or Fremont</h2><p>Each city has its own page with local details, directions and the services people there ask about most. Choose yours, or keep scrolling for everything we offer.</p></Reveal>
          <div className="lh-city-grid">{cities.map((c, i) => <Reveal key={c.city} delay={i * 0.1}><CityCard {...c} implantLink={c.hayward && !booking.haywardImplantsPageLive ? undefined : c.implantLink} onHover={setActive} /></Reveal>)}</div>
          <Reveal className="lh-local"><h3>More Location Pages</h3><div className="lh-local-grid">{localPages.map(p => <LocalPageCard key={p.to} {...p} />)}</div></Reveal>
        </div>
      </section>

      <section className="lh-section lh-band" aria-labelledby="lh-why">
        <div className="lh-container"><Reveal className="lh-head"><p className="lh-sticker">Worth the Short Drive</p><h2 id="lh-why">Why Patients from Three Cities Choose One Office</h2></Reveal>
          <div className="lh-bento">{bento.map(([b, t], i) => { const Icon = BENTO_ICONS[i]; return <Reveal key={b} delay={i * 0.06} className={`lh-tile${i === 0 || i === 5 ? " lh-tile-wide" : ""}`}><Icon className="lh-tile-icon" /><p><strong>{b}</strong> {t}</p></Reveal>; })}</div></div>
      </section>

      <section className="lh-section" aria-labelledby="lh-services">
        <div className="lh-container"><Reveal className="lh-head"><p className="lh-sticker">Everything in One Place</p><h2 id="lh-services">Dental Services for Hayward, Newark and Fremont Families</h2><p>From a quick checkup to a full smile rebuild, you can stay with one team. Here's what we offer.</p></Reveal>
          <div className="lh-tabs" role="tablist" aria-label="Service groups">{services.map(([g], i) => <button key={g} role="tab" id={`lh-tab-${i}`} aria-selected={tab === i} aria-controls={`lh-panel-${i}`} className={tab === i ? "lh-tab-on" : ""} onClick={() => setTab(i)}>{g}</button>)}</div>
          <div className="lh-services">{services.map(([g, items], i) => <div key={g} className={`lh-svc lh-svc-${i}${tab === i ? " lh-svc-on" : ""}`} role="tabpanel" id={`lh-panel-${i}`} aria-labelledby={`lh-tab-${i}`}><h3>{g}</h3><ul>{items.map(([l, h]) => <li key={l}><a href={h}>{l}<ChevronRight /></a></li>)}</ul></div>)}</div>
          <Reveal className="lh-banner"><p>Gum disease is one of the most common reasons adults lose teeth, and it often starts without pain. The National Institute of Dental and Craniofacial Research has a clear guide to how it develops and how it's treated.</p><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener">Read the NIDCR guide to gum disease<ExternalLink /></a></Reveal>
        </div>
      </section>

      <section className="lh-section lh-navy" aria-labelledby="lh-implants">
        <div className="lh-container">
          <div className="lh-implant-grid">
            <Reveal><p className="lh-sticker lh-sticker-dark">Implant Care Close to Home</p><h2 id="lh-implants">Dental Implants for Hayward, Newark and Fremont Patients</h2><p>{implants.body}</p><a className="lh-text-link lh-gold-link" href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener">American Dental Association guide to dental implants<ExternalLink /></a>
              <div className="lh-two-lists"><div><h3>Implant Options We Offer</h3><ul className="lh-checks">{implants.options.map(([l, h]) => <li key={l}><Check /><a href={h}>{l}</a></li>)}</ul></div><div><h3>How We Plan Your Implants</h3><ul className="lh-checks">{implants.plan.map(([l, h]) => <li key={l}><Check />{h ? <a href={h}>{l}</a> : l}</li>)}</ul></div></div></Reveal>
            <Reveal delay={0.15} className="lh-exploder"><svg viewBox="0 0 200 320" aria-hidden="true"><g className="lh-part lh-crown"><path d="M50 40C50 15 150 15 150 40C155 75 140 95 100 95S45 75 50 40Z" /></g><g className="lh-part lh-abut"><rect x="82" y="110" width="36" height="34" rx="6" /></g><g className="lh-part lh-post"><path d="M78 160H122L114 290L100 305L86 290Z" /><path className="lh-thread" d="M80 185H120M82 210H118M84 235H116M86 260H114" /></g></svg><ul><li>Crown</li><li>Abutment</li><li>Implant post</li></ul></Reveal>
          </div>
          <Reveal><h3 className="lh-table-title">Comparing Common Tooth Replacement Options</h3>
            <div className="lh-table" role="table"><div className="lh-tr lh-th" role="row">{["Option", "Replaces", "Fixed or removable", "Good to know"].map(h => <span key={h} role="columnheader">{h}</span>)}</div>
              {implants.rows.map(r => <div className="lh-tr" role="row" key={r[0]}>{r.map((c, i) => <span key={i} role="cell" data-label={["Option", "Replaces", "Fixed or removable", "Good to know"][i]}>{i === 2 ? <em className={c.startsWith("Fixed") ? "lh-pill-fixed" : "lh-pill-rem"}>{c}</em> : c}</span>)}</div>)}</div>
            <p className="lh-closing">{implants.closing}</p><BookLink label="Book an Implant Consultation" gold /></Reveal>
        </div>
      </section>

      <section className="lh-section" aria-labelledby="lh-doc">
        <div className="lh-container lh-doc">
          <Reveal className="lh-doc-photo"><div className="lh-ring" aria-hidden="true" /><img src={doctorImg} alt="Dr. Syed Z. Sayeedi, DDS" width="600" height="700" loading="lazy" /><span className="lh-orbit lh-o1">Since 2001</span><span className="lh-orbit lh-o2">Fellowship in Implantology</span><span className="lh-orbit lh-o3">ADA · CDA</span></Reveal>
          <Reveal delay={0.1}><p className="lh-sticker">Your Dentist</p><h2 id="lh-doc">Meet Dr. Syed Z. Sayeedi, DDS</h2><p>{doctor.body}</p><ul className="lh-checks">{doctor.checks.map(c => <li key={c}><Check />{c}</li>)}</ul><p>{doctor.team}</p><a className="lh-text-link" href="https://nobledentalcares.com/meet-the-doctor">Meet Dr. Sayeedi<ChevronRight /></a></Reveal>
        </div>
      </section>

      <section className="lh-section lh-band" aria-labelledby="lh-visit">
        <div className="lh-container"><Reveal className="lh-head"><p className="lh-sticker">Simple From the Start</p><h2 id="lh-visit">What Happens at Your First Visit?</h2></Reveal>
          <ol className="lh-steps">{steps.map(([t, d], i) => <Reveal key={t} delay={i * 0.12}><li><span className="lh-step-n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li></Reveal>)}</ol></div>
      </section>

      <section className="lh-section" aria-labelledby="lh-ins">
        <div className="lh-container lh-ins">
          <Reveal><p className="lh-sticker">Paying for Care</p><h2 id="lh-ins">Insurance and Financing</h2><p>We work with many PPO plans and Denti-Cal, and we're happy to check your benefits before you book. For larger treatment such as implants, third-party financing can spread the cost into monthly payments.</p><p className="lh-note">Don't see your plan? Call us and we'll find out what's covered.</p><a className="lh-text-link" href="https://nobledentalcares.com/insurance-and-financing">See insurance and financing details<ChevronRight /></a></Reveal>
          <div className="lh-marquees" aria-label="Insurance plans">{[0, 1].map(r => <div key={r} className={`lh-marquee${r ? " lh-rev" : ""}`}><div>{[...plans, ...plans].map((p, i) => <span key={i} aria-hidden={i >= plans.length}>{p}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="lh-section lh-final" aria-labelledby="lh-final">
        <div className="lh-container lh-final-grid">
          <Reveal><p className="lh-sticker lh-sticker-dark">Close to Home</p><h2 id="lh-final">Book With a Dentist Who's Close to Home</h2><p>Coming from Hayward, Newark or Fremont? The drive is short and the care is the same: unhurried, honest and led by Dr. Sayeedi. Call us or request a visit and we'll find a time that fits your week.</p>
            <div className="lh-actions"><a className="lh-btn lh-btn-gold" href={booking.url}>Book Your Visit</a><CallLink light /><a className="lh-btn lh-btn-light" href={booking.directions} target="_blank" rel="noopener"><MapPin />Get Directions</a></div>
            <HubMap active={active} mini />
            <div className="lh-office"><Clock /><p>Mon to Thu 9:00 AM to 6:00 PM · Alternate Saturdays 9:00 AM to 3:00 PM · Fri and Sun closed · Please call to confirm hours before your visit.</p></div>
            <p className="lh-nearby">Also welcoming patients from Union City and nearby communities.</p></Reveal>
          <div id="book"><HubForm onCity={setActive} /></div>
        </div>
        <div className="lh-container lh-disclaimer"><p>Medically reviewed by Syed Z. Sayeedi, DDS. This page is for general education and isn't a substitute for an exam. Results vary by patient.</p></div>
      </section>
    </main>
    <MainSiteFooter />
    <div className="lh-sticky"><a href={booking.phoneUrl}>Call</a><a href="#book">Book</a></div>
  </div></MotionProvider>;
}
