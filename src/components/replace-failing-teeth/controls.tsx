import { useRef, type KeyboardEvent } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Consultation } from "@/components/all-on-x/consultation";
import { booking, track } from "@/config/all-on-x-booking";
export type OnBook = () => void;
export function BookAction({ onBook, label="Request My Failing Teeth Consultation", section="page" }: { onBook: OnBook; label?: string; section?: string }) {
  return <Button className="rft-button rft-button-slide" onClick={() => { track("cta_click", { label, section }); onBook(); }}><span className="rft-button-label"><span>{label}</span><span aria-hidden="true">{label}</span></span><ArrowRight/></Button>;
}
export function CallAction({ section="page", short=false }: { section?: string; short?: boolean }) {
  return <Button asChild variant="outline" className="rft-button rft-button--outline"><a href={booking.phoneUrl} onClick={() => track("call_click", { section })}><Phone/>{short ? "Call" : `Call ${booking.phone}`}</a></Button>;
}
export function PreviewForm({ instance, scope, compact=false }: { instance: string; scope: string; compact?: boolean }) {
  return <div className="rft-preview-form"><Consultation instance={instance} compact={compact} situation={scope ? [scope] : []} pageUrl="/replace-failing-teeth-hayward-ca" bookingLabel="Book Consultation" title="Start With a Clear Diagnosis" timeChoices={["Weekday morning", "Weekday afternoon", "Alternate Saturday", "Any time"]}/></div>;
}
export function TabBar({ labels, selected, onSelect, id, label }: { labels: string[]; selected: number; onSelect: (n:number)=>void; id: string; label: string }) {
  const start = useRef<number | null>(null);
  const choose = (i: number) => { onSelect(i); document.getElementById(`${id}-tab-${i}`)?.focus({ preventScroll: true }); };
  const keyDown = (e: KeyboardEvent) => { let next = selected; if (e.key === "ArrowRight") next = (selected + 1) % labels.length; else if (e.key === "ArrowLeft") next = (selected + labels.length - 1) % labels.length; else if (e.key === "Home") next = 0; else if (e.key === "End") next = labels.length - 1; else return; e.preventDefault(); choose(next); };
  return <div className="rft-tabbar" role="tablist" aria-label={label} onKeyDown={keyDown} onTouchStart={e => { start.current=e.changedTouches[0]?.clientX ?? null; }} onTouchEnd={e => { const end=e.changedTouches[0]?.clientX; if (start.current===null || end===undefined || Math.abs(end-start.current)<40) return; choose((selected + (end < start.current ? 1 : labels.length-1)) % labels.length); }}>{labels.map((text,i) => <Button key={text} id={`${id}-tab-${i}`} role="tab" variant="ghost" aria-selected={selected===i} aria-controls={`${id}-panel-${i}`} tabIndex={selected===i?0:-1} onClick={() => onSelect(i)}>{text}</Button>)}</div>;
}