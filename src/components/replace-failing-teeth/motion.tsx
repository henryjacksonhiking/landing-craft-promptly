import { m, useReducedMotion, useScroll, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
export function MaskText({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return <span className="rft-mask"><m.span initial={false} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : .8 }} className="rft-mask-line">{children}</m.span></span>;
}
export function ImageReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <m.div className={className} initial={false} whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1 }}>{children}</m.div>;
}
export function DrawLine({ vertical = false }: { vertical?: boolean }) {
  const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 35%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return <div ref={ref} className={`rft-draw-track${vertical ? " rft-draw-track--vertical" : ""}`} aria-hidden="true"><m.div style={vertical ? { scaleY: reduced ? 1 : progress } : { scaleX: reduced ? 1 : progress }} /></div>;
}
export function CountUp() {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true }); const reduced = useReducedMotion(); const [count, setCount] = useState(0); const years = new Date().getUTCFullYear() - 2001;
  useEffect(() => { if (!inView) return; if (reduced) { setCount(years); return; } const start = performance.now(); let frame = 0; const tick = (now: number) => { const p = Math.min((now - start) / 1600, 1); setCount(Math.round(years * (1 - (1 - p) ** 3))); if (p < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [inView, reduced, years]);
  return <span ref={ref} aria-label={`${years} years caring for patients`}><span aria-hidden="true">{count} years caring for patients</span></span>;
}
export function RotatingBadge() {
  return <svg className="rft-rotating-badge" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="rft-badge-circle" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0"/></defs><circle cx="60" cy="60" r="58"/><text><textPath href="#rft-badge-circle">Diagnosis before extraction · Noble Dental Care · </textPath></text><path d="M60 45v30M45 60h30"/></svg>;
}
export function BackToTop() {
  const [show, setShow] = useState(false); const { scrollYProgress } = useScroll(); const reduced = useReducedMotion();
  useEffect(() => { const update = () => setShow(window.scrollY > 650); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  if (!show) return null;
  return <Button className="rft-back-top" variant="outline" size="icon" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}><svg viewBox="0 0 48 48" aria-hidden="true"><m.circle cx="24" cy="24" r="21" style={{ pathLength: scrollYProgress }}/></svg><ArrowUp/></Button>;
}