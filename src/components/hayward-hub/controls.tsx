import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CalendarDays, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { booking, track } from "@/config/all-on-x-booking";

export function HubAction({ call = false, children, className = "" }: { call?: boolean; children?: ReactNode; className?: string }) {
  return <Button asChild variant={call ? "outline" : "default"} className={`hh-button ${call ? "hh-button-call" : "hh-button-book"} ${className}`}><a href={call ? booking.phoneUrl : booking.url} onClick={() => track(call ? "call_click" : "cta_click", { section: "hayward_hub", label: call ? "Call" : "Book visit" })}>{call ? <Phone /> : <CalendarDays />}{children ?? (call ? `Call ${booking.phone}` : "Book My Dental Visit")}{!call && <ArrowRight />}</a></Button>;
}

export function HubReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        element.animate([{ opacity: 0.4, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 360, easing: "cubic-bezier(.22,1,.36,1)" });
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`hh-reveal ${className}`}>{children}</div>;
}

export function HubRequestForm() {
  const [values, setValues] = useState({ name: "", phone: "", preferred: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [valid, setValid] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (values.phone.replace(/\D/g, "").length !== 10) next.phone = "Please enter a 10-digit phone number.";
    if (!values.preferred.trim()) next.preferred = "Please enter a preferred day or time.";
    setErrors(next); setValid(Object.keys(next).length === 0);
  };
  return <form className="hh-request" onSubmit={submit} noValidate><div className="hh-request-title"><CalendarDays /><div><h2>Let's plan your visit.</h2><p>Tell us what works for you.</p></div></div><p className="hh-preview-note">Preview only. Details are not saved or sent; book online or call to request your appointment.</p><div className="hh-request-fields">{([['name', 'Name', 'Your full name'], ['phone', 'Phone number', '(510) 000-0000'], ['preferred', 'Preferred day or time', 'e.g. Monday morning']] as const).map(([key, label, placeholder]) => <label key={key} htmlFor={`hh-${key}`}>{label}<input id={`hh-${key}`} type={key === "phone" ? "tel" : "text"} autoComplete={key === "preferred" ? "off" : key === "phone" ? "tel" : "name"} maxLength={100} placeholder={placeholder} value={values[key]} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `hh-${key}-error` : undefined} onChange={e => { setValues(v => ({ ...v, [key]: e.target.value })); setValid(false); }} />{errors[key] && <span id={`hh-${key}-error`} className="hh-error">{errors[key]}</span>}</label>)}</div><Button type="submit" className="hh-button hh-button-book">Request My Visit <ArrowRight /></Button>{valid && <p className="hh-validation" role="status"><Check /> Your details pass the preview check. Nothing was sent. <a href={booking.url}>Continue to online booking.</a></p>}<p className="hh-fine">Please don't include health information. Online booking is handled by the practice's scheduling service.</p></form>;
}

export function TreatmentIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 80 80" className="hh-clinical-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind === "implant" ? <><path d="M25 12Q30 5 40 12Q50 5 55 12L51 30H29Z" /><path d="M34 35H46L43 65L40 70L37 65Z" /><path d="M34 43H46M35 50H45M36 57H44" /></> : kind === "arch" || kind === "denture" ? <><path d="M12 26Q40 4 68 26L62 43Q40 58 18 43Z" /><path d="M18 29L21 41M27 24L29 45M39 22V48M51 24L49 45M62 29L59 41" />{kind === "arch" && <path d="M24 50V62M34 53V65M46 53V65M56 50V62M21 57H27M31 60H37M43 60H49M53 57H59" />}</> : <><path d="M25 17C19 21 19 32 23 40L28 62Q32 71 36 49Q40 39 44 49Q48 71 52 62L57 40C61 32 61 21 55 17Q48 11 40 17Q32 11 25 17Z" />{kind === "protect" ? <path d="M53 9L67 14V25Q66 34 60 37Q53 34 53 25Z M57 22L60 25L64 19" /> : <path d="M59 44V60M51 52H67" />}</>}</svg>;
}