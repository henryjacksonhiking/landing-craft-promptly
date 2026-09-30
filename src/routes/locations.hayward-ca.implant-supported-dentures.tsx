import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Bone,
  CalendarDays,
  Check,
  ChevronUp,
  ChevronRight,
  CircleCheck,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  X,
  Zap,
} from "lucide-react";
import drSayeediImg from "@/assets/dr-sayeedi.jpg";
import teamImg from "@/assets/noble-team.png";
import yomiImg from "@/assets/yomi-doctor.jpg";
import "./hayward-implant.css";

const BOOKING_URL = "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC64000000021387&mode=externalLink";
const PHONE_URL = "tel:+15104932130";
const PHONE = "(510) 493-2130";
const LOGO = "https://nobledentalcares.com/Images/navlogo.webp";
const FOOTER_LOGO = "https://nobledentalcares.com/Images/logo.webp";
const PAGE_URL = "https://nobledentalcares.com/locations/hayward-ca/implant-supported-dentures";
const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=34603+Alvarado-Niles+Rd%2C+Union+City%2C+CA+94587";

type DataLayerEvent = Record<string, string>;

declare global {
  interface Window { dataLayer?: DataLayerEvent[]; }
}

const faqs = [
  ["What is the difference between implant supported dentures and regular dentures?", "Regular dentures rest on the gums and may rely on suction or adhesive. Implant-supported dentures connect to implants in the jaw, which generally provides greater retention and stability during chewing and speaking."],
  ["Can implant supported dentures be removed?", "Some implant dentures snap onto attachments and can be removed at home for cleaning. Fixed full-arch teeth stay in place and are removed only by a dental professional."],
  ["How many implants are needed for an implant denture?", "The number depends on available bone, bite forces, the planned restoration, and whether the denture is fixed or removable. Dr. Sayeedi will recommend a design after an examination and imaging."],
  ["Can I receive temporary teeth on the day of implant surgery?", "Some patients may qualify for temporary teeth on the day implants are placed. Implant stability, bone quality, health, and the treatment design determine whether this is appropriate."],
  ["Will I need bone grafting?", "Not every patient needs a graft. Bone grafting may be recommended when a planned implant site does not have enough bone for stable placement. Three-dimensional imaging helps evaluate this before treatment."],
  ["How long does implant denture treatment take?", "Treatment often takes several months because implants need time to integrate with the jawbone. Extractions, grafting, healing, and the type of temporary restoration can change the timeline."],
  ["How do I clean implant supported dentures?", "Removable designs are taken out and cleaned as directed. Fixed restorations require cleaning under and around the teeth with tools recommended by the dental team. Professional maintenance is important for both."],
  ["Does dental insurance cover implant supported dentures?", "Coverage varies by plan and may apply to only certain parts of treatment. Noble Dental Care can review available benefits and discuss third-party financing after your treatment plan is prepared."],
  ["Is Noble Dental Care located in Hayward?", `Noble Dental Care serves Hayward patients from its nearby office at 34603 Alvarado-Niles Road in Union City, California. Call ${PHONE} if you would like help planning your visit.`],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://nobledentalcares.com/#website", url: "https://nobledentalcares.com/", name: "Noble Dental Care" },
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Implant Supported Dentures Hayward CA | Noble Dental Care", description: "Explore secure implant-supported dentures near Hayward, CA with Dr. Sayeedi. Compare fixed and removable options and request your consultation.", isPartOf: { "@id": "https://nobledentalcares.com/#website" }, about: { "@id": `${PAGE_URL}#service` }, breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` } },
    { "@type": "Service", "@id": `${PAGE_URL}#service`, name: "Implant Supported Dentures for Hayward Patients", serviceType: "Implant-supported dentures", description: "Explore secure implant-supported dentures near Hayward, CA with Dr. Sayeedi. Compare fixed and removable options and request your consultation.", provider: { "@id": "https://nobledentalcares.com/#dentist" }, areaServed: { "@type": "City", name: "Hayward", addressRegion: "CA" }, url: PAGE_URL },
    { "@type": "Dentist", "@id": "https://nobledentalcares.com/#dentist", name: "Noble Dental Care", url: "https://nobledentalcares.com/", telephone: "+1-510-493-2130", address: { "@type": "PostalAddress", streetAddress: "34603 Alvarado-Niles Rd", addressLocality: "Union City", addressRegion: "CA", postalCode: "94587", addressCountry: "US" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "18:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" }], areaServed: [{ "@type": "City", name: "Union City" }, { "@type": "City", name: "Hayward" }], employee: { "@id": "https://nobledentalcares.com/meet-the-doctor#person" } },
    { "@type": "Person", "@id": "https://nobledentalcares.com/meet-the-doctor#person", name: "Syed Z. Sayeedi", honorificSuffix: "DDS", url: "https://nobledentalcares.com/meet-the-doctor", worksFor: { "@id": "https://nobledentalcares.com/#dentist" }, jobTitle: "Dentist" },
    { "@type": "BreadcrumbList", "@id": `${PAGE_URL}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://nobledentalcares.com/" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://nobledentalcares.com/locations" }, { "@type": "ListItem", position: 3, name: "Hayward CA", item: "https://nobledentalcares.com/locations/hayward-ca" }, { "@type": "ListItem", position: 4, name: "Implant Supported Dentures", item: PAGE_URL }] },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export const Route = createFileRoute("/locations/hayward-ca/implant-supported-dentures")({
  head: () => ({
    meta: [
      { title: "Implant Supported Dentures Hayward CA | Noble Dental Care" },
      { name: "description", content: "Explore secure implant-supported dentures near Hayward, CA with Dr. Sayeedi. Compare fixed and removable options and request your consultation." },
      { property: "og:title", content: "Implant Supported Dentures Hayward CA | Noble Dental Care" },
      { property: "og:description", content: "Explore secure implant-supported dentures near Hayward, CA with Dr. Sayeedi. Compare fixed and removable options and request your consultation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: HaywardImplantDenturesPage,
});

function track(event: string, details: DataLayerEvent = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...details });
}

function TrackedLink({ href, children, className, event = "cta_click", location = "page" }: { href: string; children: React.ReactNode; className?: string; event?: string; location?: string }) {
  return <a href={href} className={className} onClick={() => track(event, { location, label: typeof children === "string" ? children : "action" })}>{children}</a>;
}

function MainSiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header id="site-header" className={scrolled ? "scrolled" : ""}>
    <div className="container">
      <div className="header-inner">
        <a href="https://nobledentalcares.com" className="header-logo" aria-label="Noble Dental Care"><img src={LOGO} width="200" height="44" alt="Noble Dental Care" /></a>
        <div className="header-right">
          <TrackedLink href={PHONE_URL} className="header-phone" event="phone_click" location="header"><Phone />{PHONE}</TrackedLink>
          <TrackedLink href={BOOKING_URL} className="btn btn-primary header-cta" location="header">Schedule Appointment</TrackedLink>
          <button type="button" className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(value => !value)} aria-label="Toggle menu" aria-expanded={open}><span/><span/><span/></button>
        </div>
      </div>
    </div>
    <div className={`mobile-menu${open ? " open" : ""}`} role="navigation">
      <a href={PHONE_URL}>{PHONE}</a>
      <a href="https://nobledentalcares.com/our-services/dental-implants">Dental Implants</a>
      <a href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery">Yomi Robotic Surgery</a>
      <a href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6">All-on-6</a>
      <a href="https://nobledentalcares.com/about-us">About Dr. Sayeedi</a>
      <TrackedLink href={BOOKING_URL} className="btn btn-primary" location="mobile_menu">Schedule Appointment</TrackedLink>
    </div>
  </header>;
}

function ConsultationForm() {
  const [values, setValues] = useState({ name: "", phone: "", preferred: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const update = (field: keyof typeof values, value: string) => {
    if (!started) { setStarted(true); track("form_start", { location: "hero" }); }
    if (field === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      value = digits.length > 6 ? `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}` : digits.length > 3 ? `(${digits.slice(0,3)}) ${digits.slice(3)}` : digits;
    }
    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: "" }));
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (values.phone.replace(/\D/g, "").length !== 10) next.phone = "Please enter a 10-digit phone number.";
    if (!values.preferred.trim()) next.preferred = "Please share a preferred day or time.";
    setErrors(next);
    if (Object.keys(next).length) { track("form_error", { location: "hero" }); return; }
    track("form_success", { location: "hero", mode: "demo" }); setSubmitted(true);
  };
  if (submitted) return <div className="hd-form-card hd-success" role="status"><div><div className="hd-success-icon"><Check /></div><h2>Request noted</h2><p>This is a preview, so no information was transmitted. Please call or use online booking to contact the practice.</p><TrackedLink href={BOOKING_URL} className="hd-button hd-button--gold" location="form_success">View Available Appointments</TrackedLink></div></div>;
  return <form className="hd-form-card" onSubmit={submit} noValidate>
    <h2>Request Your Consultation</h2><p>Tell us how to reach you. No medical details are needed.</p>
    {Object.keys(errors).length > 0 && <div className="hd-error-summary" role="alert">Please correct the highlighted fields.</div>}
    <div className="hd-field"><label htmlFor="consult-name">Name</label><input id="consult-name" value={values.name} onChange={e => update("name", e.target.value)} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span className="hd-error" id="name-error">{errors.name}</span>}</div>
    <div className="hd-field"><label htmlFor="consult-phone">Phone number</label><input id="consult-phone" type="tel" inputMode="tel" value={values.phone} onChange={e => update("phone", e.target.value)} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{errors.phone && <span className="hd-error" id="phone-error">{errors.phone}</span>}</div>
    <div className="hd-field"><label htmlFor="consult-time">Preferred day or time</label><input id="consult-time" value={values.preferred} onChange={e => update("preferred", e.target.value)} placeholder="Example: Tuesday afternoon" aria-invalid={!!errors.preferred} aria-describedby={errors.preferred ? "time-error" : undefined} />{errors.preferred && <span className="hd-error" id="time-error">{errors.preferred}</span>}</div>
    <button className="hd-button hd-button--gold" type="submit">Request My Consultation <ArrowRight /></button>
    <p className="hd-privacy"><ShieldCheck size={15} aria-hidden="true" /> Your information is used only to respond to your appointment request.</p>
  </form>;
}

function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".hd-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { nodes.forEach(node => node.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
    nodes.forEach(node => observer.observe(node)); return () => observer.disconnect();
  }, []);
  return null;
}

function PageMotion() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
      setShowTop(window.scrollY > 650);
      document.documentElement.style.setProperty("--hd-scroll", `${Math.min(window.scrollY * .035, 24)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <><div className="hd-progress" style={{ width: `${progress}%` }} aria-hidden="true"/><button className={`hd-back-top${showTop ? " is-visible" : ""}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ChevronUp /></button></>;
}

function Hero() {
  return <><section className="hd-hero" aria-labelledby="hayward-title"><img className="hd-hero-photo" src={teamImg} width="1800" height="1000" alt="The Noble Dental Care team at the Union City practice" /><div className="hd-container hd-hero-grid"><div className="hd-hero-copy"><div className="hd-eyebrow hd-hero-enter hd-hero-enter--1">Implant Supported Dentures for Hayward Patients</div><h1 className="hd-hero-enter hd-hero-enter--2" id="hayward-title">Secure Implant Supported Dentures Near Hayward CA</h1><p className="hd-hero-enter hd-hero-enter--3">Replace loose, uncomfortable dentures with a steadier smile designed around the way you eat, speak, and live. Dr. Syed Z. Sayeedi provides personalized implant denture care for Hayward patients at Noble Dental Care&apos;s nearby Union City office.</p><div className="hd-actions hd-hero-enter hd-hero-enter--4"><TrackedLink href={BOOKING_URL} className="hd-button hd-button--gold" location="hero">Book My Implant Consultation <ArrowRight /></TrackedLink><TrackedLink href={PHONE_URL} className="hd-button hd-button--outline-light" event="phone_click" location="hero"><Phone /> Call {PHONE}</TrackedLink></div></div><div className="hd-hero-form-enter"><ConsultationForm /></div></div></section><div className="hd-trust"><div className="hd-container hd-trust-grid"><div className="hd-trust-item hd-trust-enter"><span className="hd-icon-disc"><MapPin /></span>Serving Hayward from nearby Union City</div><div className="hd-trust-item hd-trust-enter"><span className="hd-icon-disc"><HeartHandshake /></span>Implant dentistry led by Dr. Sayeedi</div><div className="hd-trust-item hd-trust-enter"><span className="hd-icon-disc"><Zap /></span>Digital planning with Yomi guidance for appropriate cases</div></div></div></>;
}

function Definition() {
  return <section className="hd-section" aria-labelledby="definition-title"><div className="hd-container hd-definition-grid"><div className="hd-copy-stack hd-reveal"><div><div className="hd-eyebrow">A Clearer Way Forward</div><h2 id="definition-title">What Are Implant Supported Dentures</h2></div><p>Implant-supported dentures are replacement teeth that connect to dental implants placed in the jaw. Unlike a conventional denture that rests only on the gums, an implant denture uses those implants for added retention and support. The result may feel more secure during meals, conversations, and everyday movement.</p><p>Some designs snap onto attachments and can be removed at home for cleaning. Others are fixed in place and removed only by a dental professional. The right design depends on your bone support, oral health, bite, goals, and maintenance preferences. For an independent overview, read the <a href="https://www.mouthhealthy.org/all-topics-a-z/implants">American Dental Association&apos;s guide to dental implants</a>.</p></div><div className="hd-clinical-visual hd-reveal hd-reveal-delay" role="img" aria-label="Simplified illustration of a full arch denture supported by two dental implants"><div className="hd-implant-art"><div className="hd-arch"/><div className="hd-tooth-row">{Array.from({ length: 7 }).map((_, index) => <span className="hd-tooth" key={index}/>)}</div><div className="hd-post hd-post--a"/><div className="hd-post hd-post--b"/></div><div className="hd-art-caption">Implant-retained full arch concept</div></div></div></section>;
}

const benefits = [
  { icon: Utensils, title: "Steadier Chewing", text: "Added retention may make a wider range of foods easier to manage." },
  { icon: MessageCircle, title: "Clearer Confidence", text: "A more stable denture can reduce concern about movement when speaking or laughing." },
  { icon: Sparkles, title: "Personalized Design", text: "Tooth shape, shade, bite, and lip support are planned for your face and goals." },
  { icon: Bone, title: "Bone Support", text: "Implants stimulate the bone around the implant sites and help support the restoration." },
];

function Benefits() {
  return <section id="benefits" className="hd-section hd-section--mist" aria-labelledby="benefits-title"><div className="hd-container"><div className="hd-section-head hd-reveal"><div><div className="hd-eyebrow">More Confidence in Daily Life</div><h2 id="benefits-title">When Traditional Dentures No Longer Feel Secure</h2></div><p>A denture that shifts can change how you choose food, speak in a group, or smile for a photo. Implant support can reduce movement and create a more dependable foundation. Your consultation focuses on practical improvements that matter to you.</p></div><div className="hd-benefit-grid">{benefits.map(({ icon: Icon, title, text }, index) => <article className="hd-card hd-reveal" style={{ transitionDelay: `${index * 85}ms` }} key={title}><span className="hd-icon-disc"><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

const options = [
  { label: "Option 01", title: "Removable Snap In Denture", points: ["Connects to implant attachments for added retention", "Removed at home for routine cleaning", "Often easier to clean around than a fixed restoration", "Attachments may need periodic replacement"] },
  { label: "Option 02", title: "Fixed Full Arch Teeth", points: ["Secured to implants and stays in place day to day", "Cleaned beneath the restoration with recommended tools", "Designed to feel more like a fixed set of teeth", "Removed by a dental professional when necessary"] },
];

function Options() {
  return <section id="options" className="hd-section" aria-labelledby="options-title"><div className="hd-container"><div className="hd-section-head hd-reveal"><div><div className="hd-eyebrow">Understand Your Options</div><h2 id="options-title">Removable or Fixed Implant Dentures</h2></div><p>Both options use dental implants, but they differ in daily care, feel, and cost. Dr. Sayeedi will explain the tradeoffs after examining your mouth and reviewing three-dimensional imaging.</p></div><div className="hd-comparison">{options.map(({ label, title, points }) => <article className="hd-option hd-reveal" key={title}><div className="hd-option-number">{label}</div><h3>{title}</h3><ul className="hd-list">{points.map(point => <li key={point}><CircleCheck />{point}</li>)}</ul></article>)}</div><div className="hd-options-foot hd-reveal"><p>If you are comparing a broader range of solutions, explore our <a href="https://nobledentalcares.com/locations/hayward-ca/dental-implants">dental implants for Hayward patients</a> page.</p><TrackedLink href={BOOKING_URL} className="hd-button hd-button--outline" location="options">Compare My Options <ArrowRight /></TrackedLink></div></div></section>;
}

const steps = [
  ["01", "Consultation and Imaging", "Dr. Sayeedi reviews your health, current teeth or denture, jawbone, bite, and goals. Digital imaging helps identify available bone and important anatomy."],
  ["02", "Personalized Treatment Plan", "You compare fixed and removable designs, supporting procedures, timing, maintenance, and estimated costs before deciding."],
  ["03", "Implant Placement and Healing", "Implants are placed according to the surgical plan. Yomi robotic guidance may be used when clinically appropriate."],
  ["04", "Final Teeth and Ongoing Care", "After healing, the final restoration is refined for fit, appearance, bite, and function. Follow-up care helps protect your result."],
];

function Process() {
  return <section id="process" className="hd-section hd-section--ink" aria-labelledby="process-title"><div className="hd-container"><div className="hd-section-head hd-reveal"><div><div className="hd-eyebrow">A Plan Built Around You</div><h2 id="process-title">Your Implant Denture Treatment Journey</h2></div><p>Every plan begins with a detailed assessment. Timing varies according to your health, anatomy, supporting procedures, and healing.</p></div><div className="hd-timeline">{steps.map(([number, title, text], index) => <article className="hd-step hd-reveal" style={{ transitionDelay: `${index * 110}ms` }} key={number}><div className="hd-step-number">{number}</div><h3>{title}</h3><p>{text}</p></article>)}</div><p className="hd-process-note hd-reveal">Extractions, bone grafting, medical factors, and how the implants heal can affect the schedule. Read Noble Dental Care&apos;s <a href="https://nobledentalcares.com/blog/the-implant-denture-procedure">implant denture procedure guide</a> for a closer look at the stages.</p></div></section>;
}

function Doctor() {
  const credentials = ["Providing dental care since 2001", "Fellowship training in implantology", "Yomi robotic guidance for appropriate cases", "Comprehensive planning and restorative follow-up"];
  return <section id="doctor" className="hd-section" aria-labelledby="doctor-title"><div className="hd-container hd-doctor-grid"><div className="hd-doctor-visual hd-reveal"><img className="hd-doctor-main" src={drSayeediImg} width="720" height="900" loading="lazy" alt="Dr. Syed Z. Sayeedi at Noble Dental Care"/><img className="hd-doctor-small" src={yomiImg} width="460" height="300" loading="lazy" alt="Dr. Sayeedi with Yomi robotic implant guidance equipment"/></div><div className="hd-copy-stack hd-reveal hd-reveal-delay"><div><div className="hd-eyebrow">Experience Meets Technology</div><h2 id="doctor-title">Meet Dr. Syed Z. Sayeedi</h2></div><p>Dr. Syed Z. Sayeedi has provided dental care since 2001 and has advanced training in implant dentistry. At Noble Dental Care, he combines clinical judgment with digital planning to create recommendations based on each patient&apos;s anatomy, health, comfort, and long-term goals.</p><p>The practice coordinates implant planning, surgery, restorative design, temporary teeth, and follow-up care in one location. An on-site lab with digital design and 3D printing supports efficient collaboration. Technology supports the process, but your examination and Dr. Sayeedi&apos;s diagnosis guide every recommendation.</p><div className="hd-credentials">{credentials.map(item => <div className="hd-credential" key={item}><CircleCheck />{item}</div>)}</div><div className="hd-actions"><TrackedLink href="https://nobledentalcares.com/meet-the-doctor" className="hd-button hd-button--outline" location="doctor">Meet Dr. Sayeedi <ArrowRight /></TrackedLink></div></div></div></section>;
}

function Candidacy() {
  const checks = ["You are missing most or all teeth in one arch", "Your current denture moves or causes repeated sore areas", "You want to compare removable and fixed implant options", "You are willing to follow daily cleaning and maintenance instructions"];
  return <section className="hd-section hd-section--mist" aria-labelledby="candidate-title"><div className="hd-container hd-candidate-grid"><div className="hd-copy-stack hd-reveal"><div><div className="hd-eyebrow">Is This Right for You</div><h2 id="candidate-title">Who May Be a Candidate for Implant Supported Dentures</h2></div><p>Implant-supported dentures may be considered for adults who have lost most or all teeth in one arch, struggle with a loose denture, or have teeth that cannot be predictably restored. Age alone does not determine candidacy. Gum health, bone support, medications, tobacco use, medical history, and daily care all matter.</p><p>Some patients need treatment for gum disease, tooth removal, or bone grafting first. A consultation and diagnostic imaging are the only reliable ways to determine whether implant dentures are appropriate for you.</p><div className="hd-actions"><TrackedLink href={BOOKING_URL} className="hd-button hd-button--gold" location="candidacy">Check My Candidacy <ArrowRight /></TrackedLink></div></div><div className="hd-checks hd-reveal hd-reveal-delay">{checks.map(item => <div className="hd-check" key={item}><span className="hd-icon-disc"><Check /></span>{item}</div>)}</div></div></section>;
}

function Cost() {
  return <section id="cost" className="hd-section hd-section--ink" aria-labelledby="cost-title"><div className="hd-container hd-cost-panel hd-reveal"><div className="hd-eyebrow hd-eyebrow--center">Clear Financial Conversations</div><h2 id="cost-title">Cost Insurance and Financing</h2><p>The cost of implant-supported dentures in Hayward varies because every treatment plan is different. The number of implants, restoration type, imaging, extractions, grafting, sedation, temporary teeth, and final materials can all affect the total.</p><p>Noble Dental Care accepts dental insurance and offers third-party financing options. Coverage differs by plan, so the team can review available benefits and explain payment options after your clinical plan is prepared. Visit our <a href="https://nobledentalcares.com/insurance-and-financing">insurance and financing page</a> for current details.</p></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="hd-section" aria-labelledby="faq-title"><div className="hd-container"><div className="hd-section-head hd-reveal"><div><div className="hd-eyebrow">Helpful Answers</div><h2 id="faq-title">Frequently Asked Questions</h2></div><p>Straightforward answers about options, treatment, maintenance, timing, and visiting Noble Dental Care from Hayward.</p></div><div className="hd-faq">{faqs.map(([question, answer], index) => { const expanded = open === index; return <div className="hd-faq-item" key={question}><h3><button className="hd-faq-button" type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => { setOpen(expanded ? null : index); if (!expanded) track("faq_expand", { question_label: question }); }}>{question}<X aria-hidden="true" /></button></h3><div className="hd-faq-answer" id={`faq-panel-${index}`} hidden={!expanded}><p>{answer}</p></div></div>; })}</div></div></section>;
}

function Location() {
  return <section className="hd-section hd-section--ink" aria-labelledby="location-title"><div className="hd-container hd-location-grid"><div className="hd-location-card hd-reveal"><div className="hd-eyebrow">Convenient Care Near Hayward</div><h2 id="location-title">Visit Noble Dental Care in Union City</h2><div className="hd-contact-row"><MapPin/><span>34603 Alvarado-Niles Rd<br/>Union City, CA 94587</span></div><div className="hd-contact-row"><Phone/><a href={PHONE_URL}>{PHONE}</a></div><div className="hd-hours"><div><strong>Monday–Thursday</strong><span>9:00 AM–6:00 PM</span></div><div><strong>Friday</strong><span>Closed</span></div><div><strong>Saturday</strong><span>9:00 AM–3:00 PM</span></div><div><strong>Sunday</strong><span>Closed</span></div></div><p className="hd-hours-note">Please call to confirm hours before traveling.</p></div><div className="hd-map hd-reveal hd-reveal-delay"><div><div className="hd-map-mark"><MapPin /></div><h3>Nearby care for Hayward patients</h3><p>Noble Dental Care welcomes patients from Hayward and surrounding East Bay communities at its Union City office.</p><div className="hd-actions"><TrackedLink href={DIRECTIONS} className="hd-button hd-button--gold" event="directions_click" location="location">Get Directions <ChevronRight /></TrackedLink><TrackedLink href={PHONE_URL} className="hd-button hd-button--outline-light" event="phone_click" location="location">Call the Office</TrackedLink></div></div></div></div></section>;
}

function FinalCTA() {
  return <section className="hd-final" aria-labelledby="final-title"><div className="hd-container"><div className="hd-final-panel hd-reveal"><div><div className="hd-eyebrow">Take the Next Step</div><h2 id="final-title">Find Out Whether Implant Dentures Fit Your Smile</h2><p>A focused consultation can give you clear answers about stability, timing, maintenance, and cost. Request a visit with Dr. Sayeedi and get a plan based on your mouth, health, and goals.</p></div><div className="hd-final-actions"><TrackedLink href={BOOKING_URL} className="hd-button hd-button--gold" location="final">View Available Appointments <CalendarDays /></TrackedLink><TrackedLink href={PHONE_URL} className="hd-button hd-button--outline-light" event="phone_click" location="final"><Phone /> Call {PHONE}</TrackedLink></div></div></div></section>;
}

function MainSiteFooter() {
  const columns: [string, [string, string][]][] = [
    ["Our Services", [["Dental Implants", "https://nobledentalcares.com/our-services/dental-implants"], ["Yomi Robotic Surgery", "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery"], ["All-on-6 Implants", "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6"], ["FP-1 Full Arch", "https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants"], ["Oral Surgery", "https://nobledentalcares.com/our-services/oral-surgery"]]],
    ["Areas We Serve", [["Hayward Dentist", "https://nobledentalcares.com/hayward-dentist"], ["Newark Dentist", "https://nobledentalcares.com/newark-dentist"], ["Fremont Dentist", "https://nobledentalcares.com/"], ["Union City Dentist", "https://nobledentalcares.com/"], ["Robotic Implants Newark", "https://nobledentalcares.com/robotic-dental-implants-in-newark"]]],
    ["About Us", [["About Noble Dental Care", "https://nobledentalcares.com/about-us"], ["Meet the Doctors", "https://nobledentalcares.com/meet-the-doctor"], ["Insurance & Financing", "https://nobledentalcares.com/insurance-and-financing"], ["Contact Us", "https://nobledentalcares.com/contacts"], ["Dental Blog", "https://nobledentalcares.com/blog"]]],
  ];
  return <footer id="site-footer"><div className="container"><div className="footer-grid"><div><img src={FOOTER_LOGO} alt="Noble Dental Care" className="footer-logo" width="200" height="48" loading="lazy"/><p className="footer-about">Noble Dental Care offers advanced dental implant solutions, Yomi robotic surgery, and comprehensive dental care for patients in Fremont, Union City, Newark, Hayward, and the wider Tri-City area.</p><div className="footer-contact-item"><MapPin/><span>34603 Alvarado-Niles Rd, Union City, CA 94587</span></div><div className="footer-contact-item"><Phone/><a href={PHONE_URL}>{PHONE}</a></div><div className="social-links"><a href="https://www.facebook.com/people/Noble-Dental-Care/100083606354159/" target="_blank" rel="noopener" className="social-link" aria-label="Facebook">f</a><a href="https://www.instagram.com/nobledentalcare_" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">◎</a><a href="https://www.youtube.com/@NobleDentalCare" target="_blank" rel="noopener" className="social-link" aria-label="YouTube">▶</a><a href="https://www.linkedin.com/company/noble-dental-care/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">in</a></div></div>{columns.map(([title, links]) => <div key={title}><p className="footer-col-title">{title}</p><ul className="footer-links">{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>{title === "About Us" && <div className="footer-book"><TrackedLink href={BOOKING_URL} className="btn btn-primary" location="footer">Book Appointment</TrackedLink></div>}</div>)}</div><div className="footer-bottom"><p>&copy; 2025 Noble Dental Care. All rights reserved. 34603 Alvarado-Niles Rd, Union City, CA 94587.</p><p>Serving Fremont, Union City, Newark, Hayward &amp; the Tri-City Area</p></div></div></footer>;
}

function MobileBar() {
  return <div className="hd-mobile-bar" aria-label="Quick contact actions"><TrackedLink href={PHONE_URL} className="hd-button hd-button--outline" event="phone_click" location="mobile_bar"><Phone /> Call</TrackedLink><TrackedLink href={BOOKING_URL} className="hd-button hd-button--gold" location="mobile_bar">Book Consultation</TrackedLink></div>;
}

function HaywardImplantDenturesPage() {
  return <div className="hayward-page"><RevealObserver/><PageMotion/><a className="hd-skip" href="#main-content">Skip to main content</a><MainSiteHeader/><main id="main-content"><Hero/><Definition/><Benefits/><Options/><Process/><Doctor/><Candidacy/><Cost/><FAQ/><Location/><FinalCTA/></main><MainSiteFooter/><MobileBar/></div>;
}
