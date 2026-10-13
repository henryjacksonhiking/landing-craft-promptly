import { Link } from "@tanstack/react-router";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, ChevronRight, MapPin, Phone, Route as RouteIcon, Search, Calendar, Smile, Cpu, Feather, Users, Receipt, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { booking, track } from "@/config/all-on-x-booking";
import { supabase } from "@/integrations/supabase/client";

export type CityKey = "hayward" | "newark" | "fremont";
export const PAGE_PATH = "/dentist-hayward-newark-fremont";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <m.div className={`lh-reveal ${className}`} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</m.div>;
}

const PINS: Record<CityKey | "union", { x: number; y: number; label: string }> = {
  hayward: { x: 150, y: 70, label: "Hayward" },
  union: { x: 250, y: 205, label: "Union City · Our office" },
  newark: { x: 175, y: 320, label: "Newark" },
  fremont: { x: 380, y: 300, label: "Fremont" },
};
const route = (k: CityKey) => { const a = PINS[k], b = PINS.union; const cx = (a.x + b.x) / 2 + (k === "fremont" ? 20 : -40); const cy = (a.y + b.y) / 2; return `M${a.x} ${a.y} Q${cx} ${cy} ${b.x} ${b.y}`; };

export function HubMap({ active, mini = false }: { active: CityKey | null; mini?: boolean }) {
  return <svg className={`lh-map${mini ? " lh-map-mini" : ""}`} viewBox="0 0 480 400" aria-hidden="true">
    <path className="lh-bay" d="M0 0H95C80 90 70 170 95 250C110 310 80 360 60 400H0Z" />
    <path className="lh-bay lh-bay-ripple" d="M0 40C50 60 40 120 70 160S40 260 70 320" />
    <path className="lh-freeway" d="M120 0C140 120 170 220 230 290S330 380 360 400" />
    <path className="lh-road" d="M250 205C300 230 340 250 400 260" />
    {(["hayward", "newark", "fremont"] as CityKey[]).map((k, i) => <g key={k} className={`lh-route-g lh-${k}${active && active !== k ? " lh-dim" : ""}${active === k ? " lh-lit" : ""}`}>
      <path className="lh-route" d={route(k)} style={{ animationDelay: `${1.1 + i * 0.35}s` }} />
      <circle className="lh-car" r="4"><animateMotion dur={`${6 + i}s`} repeatCount="indefinite" path={route(k)} /></circle>
      <g className="lh-pin" style={{ animationDelay: `${0.8 + i * 0.35}s` }} transform={`translate(${PINS[k].x} ${PINS[k].y})`}><circle r="11" /><circle r="4" className="lh-pin-dot" /><text y="-18" textAnchor="middle">{PINS[k].label}</text></g>
    </g>)}
    <g className="lh-pin lh-pin-office" transform={`translate(${PINS.union.x} ${PINS.union.y})`}><circle r="22" className="lh-halo" /><circle r="14" /><circle r="5" className="lh-pin-dot" /><text y="36" textAnchor="middle">{PINS.union.label}</text></g>
  </svg>;
}

export function BookLink({ label = "Book Your Visit", href = "#book", gold = false }: { label?: string; href?: string; gold?: boolean }) {
  return <a href={href} className={`lh-btn ${gold ? "lh-btn-gold" : "lh-btn-primary"}`} onClick={() => track("cta_click", { section: "locations_hub", label })}><span>{label}</span><ArrowRight /></a>;
}
export function CallLink({ light = false }: { light?: boolean }) {
  return <a href={booking.phoneUrl} className={`lh-btn lh-btn-call${light ? " lh-btn-light" : ""}`} onClick={() => track("call_click", { section: "locations_hub" })}><Phone /><span>Call {booking.phone}</span></a>;
}

export function Counter({ value, prefix = "" }: { value: number | string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const reduced = useReducedMotion();
  const [n, setN] = useState(value);
  useEffect(() => {
    if (typeof value !== "number" || !inView || reduced) return; let f = 0; const s = performance.now(); const from = value > 100 ? value - 40 : 0;
    const tick = (t: number) => { const p = Math.min((t - s) / 1300, 1); setN(Math.round(from + (value - from) * (1 - (1 - p) ** 3))); if (p < 1) f = requestAnimationFrame(tick); };
    f = requestAnimationFrame(tick); return () => cancelAnimationFrame(f);
  }, [inView, reduced, value]);
  return <span ref={ref}>{prefix}{n}</span>;
}

export function TypingBar({ query, answer, city }: { query: string; answer: string; city: CityKey }) {
  const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true, amount: 0.5 }); const reduced = useReducedMotion();
  const [typed, setTyped] = useState(query.length);
  useEffect(() => { if (!inView || reduced) return; setTyped(0); let i = 0; const id = setInterval(() => { i++; setTyped(i); if (i >= query.length) clearInterval(id); }, 70); return () => clearInterval(id); }, [inView, reduced, query]);
  const done = typed >= query.length;
  return <div ref={ref} className={`lh-search lh-${city}${done ? " lh-done" : ""}`}>
    <div className="lh-search-bar"><Search /><span>{query.slice(0, typed)}</span><i className="lh-caret" aria-hidden="true" /></div>
    <p className="lh-search-answer"><Check />{answer}</p>
  </div>;
}

export function CityCard({ city, title, body, gettingHere, bullets, page, buttonLabel, implantLink, onHover }: { city: CityKey; title: string; body: string; gettingHere: string; bullets: string[]; page: string; buttonLabel: string; implantLink?: [string, string]; onHover: (c: CityKey | null) => void }) {
  return <article className={`lh-city-card lh-${city}`} id={`city-${city}`} onMouseEnter={() => onHover(city)} onMouseLeave={() => onHover(null)} onFocus={() => onHover(city)} onBlur={() => onHover(null)}>
    <div className="lh-city-head"><svg viewBox="0 0 300 60" aria-hidden="true" className="lh-skyline"><path d="M0 58H30V36H48V44H70V22H86V44H110V30H130V12H140V30H160V40H190V26H210V44H240V34H260V48H300" /></svg><span className="lh-city-pin"><MapPin /></span><span className="lh-city-name">{city[0].toUpperCase() + city.slice(1)}</span></div>
    <div className="lh-city-body">
      <h3><a href={page} className="lh-card-link">{title}</a></h3>
      <p>{body}</p>
      <p className="lh-getting"><RouteIcon /><span><strong>Getting here:</strong> {gettingHere}</span></p>
      <ul className="lh-checks">{bullets.map(b => <li key={b}><Check />{b}</li>)}</ul>
      <div className="lh-city-actions"><span className="lh-btn lh-btn-city">{buttonLabel}<ArrowRight /></span>{implantLink && <a className="lh-text-link" href={implantLink[1]}>{implantLink[0]}<ChevronRight /></a>}</div>
    </div>
  </article>;
}

export function LocalPageCard({ to, eyebrow, title, body }: { to: "/locations/hayward-ca/" | "/locations/hayward-ca/implant-supported-dentures" | "/all-on-x-dental-implants-hayward-ca" | "/replace-failing-teeth-hayward-ca" | "/replace-failing-teeth-hayward-ca-option-2" | "/"; eyebrow: string; title: string; body: string }) {
  return <Link to={to} className="lh-local-card"><span className="lh-local-eyebrow"><MapPin />{eyebrow}</span><strong>{title}</strong><span>{body}</span><span className="lh-local-go">Open page<ArrowRight /></span></Link>;
}

export const BENTO_ICONS = [Users, Award, Cpu, Feather, Smile, Receipt];
export { Calendar };

const CITIES = ["Hayward", "Newark", "Fremont", "Union City", "Other"] as const;
const REASONS = ["Checkup", "Implants", "Cosmetic", "Emergency", "Other"] as const;
export function HubForm({ onCity }: { onCity: (c: CityKey | null) => void }) {
  const [v, setV] = useState({ name: "", phone: "", city: "", reason: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const trap = useRef<HTMLInputElement>(null);
  const submit = async (e: FormEvent) => {
    e.preventDefault(); if (status === "saving") return;
    const phone = v.phone.replace(/\D/g, ""); const next: Record<string, string> = {};
    if (v.name.trim().length < 2 || v.name.trim().length > 100) next.name = "Enter your full name.";
    if (phone.length !== 10) next.phone = "Enter a 10-digit mobile number.";
    if (!v.city) next.city = "Choose your city."; if (!v.reason) next.reason = "Choose a reason.";
    setErrors(next); if (Object.keys(next).length) return;
    if (trap.current?.value) { setStatus("error"); return; }
    setStatus("saving");
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].flatMap(k => { const x = params.get(k); return x ? [[k, x.slice(0, 300)]] : []; }));
    try { const { error } = await supabase.from("location_hub_requests").insert({ full_name: v.name.trim(), mobile_phone: phone, city: v.city, reason: v.reason, attribution, page_path: PAGE_PATH, website: "" }); setStatus(error ? "error" : "success"); if (!error) track("form_submit", { section: "locations_hub" }); } catch { setStatus("error"); }
  };
  if (status === "success") return <div className="lh-form lh-success" role="status"><svg viewBox="0 0 52 52" className="lh-success-check" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M15 27l7 7 15-16" /></svg><div className="lh-confetti" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ ["--i" as string]: i }} />)}</div><h3>Thank you. Your request is in.</h3><p>We'll call you shortly to confirm. Need us sooner? Call <a href={booking.phoneUrl}>{booking.phone}</a>.</p></div>;
  const chip = (group: "city" | "reason", opt: string) => <button type="button" key={opt} className={`lh-chip${v[group] === opt ? " lh-chip-on" : ""}`} aria-pressed={v[group] === opt} onClick={() => { setV(s => ({ ...s, [group]: opt })); if (group === "city") onCity(["Hayward", "Newark", "Fremont"].includes(opt) ? opt.toLowerCase() as CityKey : null); }}>{opt}</button>;
  return <form className="lh-form" onSubmit={submit} noValidate>
    <h3>Request an Appointment</h3>
    <label>Name<input value={v.name} maxLength={100} autoComplete="name" onChange={e => setV({ ...v, name: e.target.value })} aria-invalid={!!errors.name} />{errors.name && <span className="lh-err">{errors.name}</span>}</label>
    <label>Mobile phone<input value={v.phone} inputMode="tel" autoComplete="tel" maxLength={20} onChange={e => setV({ ...v, phone: e.target.value })} aria-invalid={!!errors.phone} />{errors.phone && <span className="lh-err">{errors.phone}</span>}</label>
    <fieldset><legend>City</legend><div className="lh-chips">{CITIES.map(c => chip("city", c))}</div>{errors.city && <span className="lh-err">{errors.city}</span>}</fieldset>
    <fieldset><legend>Reason</legend><div className="lh-chips">{REASONS.map(c => chip("reason", c))}</div>{errors.reason && <span className="lh-err">{errors.reason}</span>}</fieldset>
    <input ref={trap} className="lh-trap" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" />
    <Button type="submit" className="lh-btn lh-btn-gold lh-submit" disabled={status === "saving"}>{status === "saving" ? "Sending…" : "Request My Visit"}</Button>
    {status === "error" && <p className="lh-err" role="alert">We couldn't send your request. Please call {booking.phone}.</p>}
    <p className="lh-fine">By submitting, you agree Noble Dental Care may call or text you about your appointment. Please don't include health details here.</p>
  </form>;
}
