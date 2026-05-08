import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

const BOOK = "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC64000000021387&mode=externalLink";
const PHONE = "tel:+15104932130";
const LOGO_NAV = "https://nobledentalcares.com/Images/navlogo.webp";
const LOGO = "https://nobledentalcares.com/Images/logo.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://nobledentalcares.com/#dentist",
      name: "Noble Dental Care",
      url: "https://nobledentalcares.com/",
      telephone: "+1-510-493-2130",
      address: {
        "@type": "PostalAddress",
        streetAddress: "34603 Alvarado-Niles Rd",
        addressLocality: "Union City",
        addressRegion: "CA",
        postalCode: "94587",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Fremont" },
        { "@type": "City", name: "Union City" },
        { "@type": "City", name: "Newark" },
        { "@type": "City", name: "Hayward" },
      ],
      medicalSpecialty: ["Dentistry", "Implant Dentistry", "Restorative Dentistry", "Cosmetic Dentistry", "Oral Surgery"],
      founder: { "@type": "Person", name: "Dr. Syed Zafar Sayeedi", jobTitle: "Dentist" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://nobledentalcares.com/dentist-in-fremont-ca/#faq",
      mainEntity: [
        { "@type": "Question", name: "Is Noble Dental Care located in Fremont CA?", acceptedAnswer: { "@type": "Answer", text: "Noble Dental Care is located in Union City and serves patients from Fremont, Newark, Hayward, and nearby communities." } },
        { "@type": "Question", name: "Does Noble Dental Care offer dental implants?", acceptedAnswer: { "@type": "Answer", text: "Yes. Noble Dental Care provides dental implant solutions, including single implants, full-mouth implants, and implant-supported restorations." } },
        { "@type": "Question", name: "What is Yomi robotic implant surgery?", acceptedAnswer: { "@type": "Answer", text: "Yomi is robotic-assisted technology that helps guide dental implant planning and placement with digital precision." } },
        { "@type": "Question", name: "Who may be a dental implant candidate?", acceptedAnswer: { "@type": "Answer", text: "Patients with one or more missing teeth may be candidates, depending on bone health, gum health, and overall oral condition." } },
        { "@type": "Question", name: "Are full-mouth dental implants available?", acceptedAnswer: { "@type": "Answer", text: "Yes. Noble Dental Care offers full-mouth implant options, including All-on-6 and full-arch implant restorations." } },
        { "@type": "Question", name: "Why choose a dentist near Fremont CA?", acceptedAnswer: { "@type": "Answer", text: "A nearby dentist makes consultation, treatment visits, follow-up care, and long-term maintenance more convenient." } },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentist in Fremont CA | Dental Implants Near Fremont" },
      { name: "description", content: "Looking for dental implants near Fremont, CA? Noble Dental Care offers advanced care with Yomi robotic technology for precise, comfortable results." },
      { property: "og:title", content: "Dentist in Fremont CA | Dental Implants Near Fremont" },
      { property: "og:description", content: "Advanced implant dentistry with Yomi robotic technology near Fremont, CA." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Page,
});

function Btn({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "gold" | "outline"; external?: boolean }) {
  const base = "inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all rounded-sm";
  const styles = {
    primary: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-sm",
    gold: "bg-gold text-gold-foreground hover:brightness-105 shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand",
  };
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

function Section({ children, alt = false, className = "" }: { children: React.ReactNode; alt?: boolean; className?: string }) {
  return (
    <section className={`py-20 px-6 ${alt ? "bg-secondary" : "bg-background"} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl md:text-5xl text-brand mb-6">{children}</h2>;
}

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-gold">{children}</a>
);

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />

      <Section>
        <H2>Dental Implant Care Near Fremont With a Patient-First Approach</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Missing teeth can affect how you eat, speak, smile, and feel in everyday life. At Noble Dental Care, patients receive a detailed evaluation before treatment recommendations are made. The goal is to understand your concerns, review your oral health, and create a dental implant plan that supports long-term comfort, function, and confidence.
        </p>
        <Btn href={BOOK} variant="gold" external>Start Your Smile Evaluation</Btn>
        <p className="text-lg leading-relaxed text-muted-foreground mt-10 mb-8">
          Dr. Syed Zafar Sayeedi has been in dentistry since 2001 and is known for restorative, cosmetic, surgical, and preventive care. His Fellowship in Implantology and continued education in implants, esthetics, orthodontics, and endodontics help Noble Dental Care provide a more complete treatment experience for patients seeking a dentist near Fremont CA.
        </p>
        <Btn href="https://nobledentalcares.com/about-us" external>Meet Your Implant Dentist</Btn>
      </Section>

      <Section alt>
        <H2>Why Fremont Patients Choose Noble Dental Care</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Patients searching for a dentist in Fremont CA often want more than a routine appointment. They want clear answers, advanced care, and a team that can manage their treatment with confidence. Noble Dental Care provides comprehensive dentistry near Fremont, making it easier for patients to receive evaluation, planning, treatment, and follow-up care in one trusted location.
        </p>
        <p className="font-semibold text-foreground mb-4">Key advantages include:</p>
        <ul className="space-y-3 mb-8">
          {[
            "Dental implant care planned around each patient's needs",
            "Yomi robotic technology for guided implant placement",
            "Experience in restorative, cosmetic, surgical, and preventive dentistry",
            "Convenient access for Fremont, Union City, Newark, and Hayward patients",
            "Personalized treatment planning with clear communication",
          ].map((b) => (
            <li key={b} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gold flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Btn href={BOOK} variant="gold" external>Book an Appointment</Btn>
      </Section>

      <Section>
        <H2>Dental Implant Options for Missing Teeth</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Dental implants are designed to replace missing teeth by supporting crowns, bridges, dentures, or full-mouth restorations. For patients missing one tooth, multiple teeth, or a full arch, Noble Dental Care can evaluate which implant solution may be appropriate based on bone health, bite function, smile goals, and overall oral condition.
        </p>
        <p className="font-semibold text-foreground mb-4">Common implant-related solutions may include:</p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            "Single dental implants",
            "Implant-supported bridges",
            "Implant-supported dentures",
            "Full-mouth dental implants",
            "All-on-6 full-mouth implant solutions",
            "FP-1 full-arch dental implant restorations",
          ].map((b) => (
            <li key={b} className="flex gap-3 text-muted-foreground border-l-2 border-gold pl-4 py-1">
              {b}
            </li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          For patients considering a complete smile restoration, visit the internal page for <A href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6">All-on-6 full mouth dental implants</A>. For general implant education, visit <A href="https://nobledentalcares.com/our-services/dental-implants">dental implants</A>.
        </p>
        <Btn href="https://nobledentalcares.com/our-services/dental-implants" external>Explore Implant Options</Btn>
      </Section>

      <Section alt>
        <H2>Yomi Robotic Implant Surgery Near Fremont</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Noble Dental Care uses the Yomi robotic system to support dental implant planning and placement. Yomi combines 3D imaging, digital planning, and robotic guidance to help the dentist place implants according to a personalized surgical plan. This technology is especially valuable for patients who want a precise, carefully guided approach to implant treatment.
        </p>
        <Btn href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" external>Learn About Yomi</Btn>
        <p className="text-lg leading-relaxed text-muted-foreground mt-10 mb-8">
          Yomi does not replace the dentist. Instead, it assists the clinician during planning and surgery by helping guide implant placement in real time. For patients with single missing teeth or full-mouth implant needs, this advanced technology can support accuracy, confidence, and a more customized treatment experience. Learn more about <A href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery">Yomi robotic implant surgery</A>.
        </p>
        <Btn href={BOOK} variant="gold" external>Ask About Robotic Implants</Btn>
      </Section>

      <Section>
        <H2>Full-Mouth Dental Implants for Greater Stability</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Patients with many missing, damaged, or failing teeth may need more than a single-tooth replacement. Full-mouth dental implants are designed to restore an entire upper or lower arch with implant support. This can help improve chewing ability, smile appearance, and daily comfort compared with removable options.
        </p>
        <Btn href={BOOK} variant="gold" external>Request a Full-Mouth Consultation</Btn>
        <p className="text-lg leading-relaxed text-muted-foreground mt-10 mb-8">
          Noble Dental Care offers advanced full-arch options, including <A href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6">All-on-6 full mouth dental implants</A> and <A href="https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants">FP-1 full arch dental implants</A>. These solutions should be discussed after a complete consultation, digital imaging, and clinical evaluation.
        </p>
        <Btn href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" external>See Full-Arch Options</Btn>
      </Section>

      <Section alt>
        <H2>Comprehensive Dentistry Close to Fremont</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          A strong implant result depends on more than placing an implant. Gum health, bone support, bite balance, existing teeth, and long-term maintenance all matter. Because Noble Dental Care offers comprehensive dentistry, patients can receive a broader view of their oral health before beginning treatment.
        </p>
        <Btn href={BOOK} variant="gold" external>Plan Your Visit</Btn>
        <p className="text-lg leading-relaxed text-muted-foreground mt-10 mb-8">
          For some patients, supporting treatments may be recommended before implants. These may include extractions, bone grafting, sinus lift procedures, or other <A href="https://nobledentalcares.com/our-services/oral-surgery">oral surgery</A> services when clinically appropriate.
        </p>
        <Btn href={BOOK} variant="gold" external>Get Personalized Guidance</Btn>
      </Section>

      <Section>
        <H2>A Convenient Dental Implant Dentist Near Fremont CA</H2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          Noble Dental Care is located in Union City, making it a convenient option for patients searching from Fremont neighborhoods such as Niles, Centerville, Irvington, Warm Springs, and Mission San Jose. The practice also serves nearby Newark, Hayward, and the wider Tri-City area.
        </p>
        <Btn href="https://g.co/kgs/X9q2BJg" external>Get Directions</Btn>
        <p className="text-lg leading-relaxed text-muted-foreground mt-10 mb-8">
          Choosing a nearby implant dentist can make consultations, treatment visits, and follow-up care easier to manage. Patients benefit from having a team close enough for ongoing support while still receiving advanced technology and a personalized approach to implant dentistry.
        </p>
        <Btn href={PHONE}>Call the Office</Btn>
      </Section>

      <section className="py-24 px-6 bg-brand text-brand-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Restore Your Smile Near Fremont?</h2>
          <p className="text-lg leading-relaxed opacity-90 mb-8">
            If missing teeth are affecting your comfort, confidence, or daily routine, Noble Dental Care can help you understand your options. From single dental implants to full-mouth implant solutions and Yomi robotic guidance, the team provides thoughtful care designed around your needs.
          </p>
          <Btn href={BOOK} variant="gold" external>Schedule Your Consultation</Btn>
          <p className="text-lg leading-relaxed opacity-90 mt-10 mb-8">
            Your first step is a detailed consultation. During this visit, the team can review your concerns, evaluate your oral health, discuss implant possibilities, and explain what type of treatment plan may be suitable for you.
          </p>
          <Btn href={BOOK} variant="outline" external>Request an Appointment</Btn>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-3">
        <a href="/" className="flex items-center">
          <img src={LOGO_NAV} alt="Noble Dental Care" className="h-14 w-auto" />
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <a href={PHONE} className="hidden sm:inline-flex items-center gap-2 text-brand-foreground font-semibold hover:text-gold">
            <Phone className="h-4 w-4" /> (510) 493-2130
          </a>
          <Btn href={BOOK} variant="gold" external>Schedule Appointment</Btn>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand text-brand-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gold mb-6">Implant & Comprehensive Dentistry · Union City, CA</p>
        <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Trusted Dentist in Fremont CA</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed opacity-95 mb-10">
          Looking for a <strong className="text-gold font-semibold">Dentist in Fremont CA</strong> who can help you restore missing teeth with advanced dental implant care? Noble Dental Care welcomes patients from Fremont, Union City, Newark, and nearby communities for personalized implant dentistry supported by modern technology, careful planning, and the experience of Dr. Syed Zafar Sayeedi.
        </p>
        <Btn href={BOOK} variant="gold" external>Schedule Your Consultation</Btn>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Is Noble Dental Care located in Fremont CA?", a: "Noble Dental Care is located in Union City and serves patients from Fremont, Newark, Hayward, and nearby communities.", cta: { label: "Get Directions", href: "https://g.co/kgs/X9q2BJg" } },
  { q: "Does Noble Dental Care offer dental implants?", a: "Yes. Noble Dental Care provides dental implant solutions, including single implants, full-mouth implants, and implant-supported restorations.", cta: { label: "Explore Implants", href: "https://nobledentalcares.com/our-services/dental-implants" } },
  { q: "What is Yomi robotic implant surgery?", a: "Yomi is robotic-assisted technology that helps guide dental implant planning and placement with digital precision.", cta: { label: "Learn About Yomi", href: "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" } },
  { q: "Who may be a dental implant candidate?", a: "Patients with one or more missing teeth may be candidates, depending on bone health, gum health, and overall oral condition.", cta: { label: "Check Eligibility", href: BOOK } },
  { q: "Are full-mouth dental implants available?", a: "Yes. Noble Dental Care offers full-mouth implant options, including All-on-6 and full-arch implant restorations.", cta: { label: "View Full-Mouth Options", href: "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" } },
  { q: "Why choose a dentist near Fremont CA?", a: "A nearby dentist makes consultation, treatment visits, follow-up care, and long-term maintenance more convenient.", cta: { label: "Book Your Visit", href: BOOK } },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section alt>
      <H2>FAQs About Dentist in Fremont CA and Dental Implants</H2>
      <div className="space-y-3 mt-8">
        {FAQS.map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-md overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-muted">
              <span className="font-display text-xl text-brand">{f.q}</span>
              <ChevronDown className={`h-5 w-5 text-brand flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-4">{f.a}</p>
                <Btn href={f.cta.href} variant="gold" external>{f.cta.label}</Btn>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  const links = [
    { label: "Dental Implants", href: "https://nobledentalcares.com/our-services/dental-implants" },
    { label: "Yomi Robotic Surgery", href: "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" },
    { label: "All-on-6", href: "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" },
    { label: "FP-1 Full Arch", href: "https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants" },
    { label: "Oral Surgery", href: "https://nobledentalcares.com/our-services/oral-surgery" },
  ];
  const social = [
    { label: "Facebook", href: "https://www.facebook.com/people/Noble-Dental-Care/100083606354159/" },
    { label: "Instagram", href: "https://www.instagram.com/nobledentalcare_" },
    { label: "YouTube", href: "https://www.youtube.com/@NobleDentalCare" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/noble-dental-care/" },
  ];
  return (
    <footer className="bg-brand text-brand-foreground pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <img src={LOGO} alt="Noble Dental Care" className="h-20 w-auto bg-white p-3 rounded-md mb-5" />
          <div className="space-y-3 text-sm opacity-90">
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />34603 Alvarado-Niles Rd, Union City, CA 94587</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><a href={PHONE} className="hover:text-gold">(510) 493-2130</a></p>
          </div>
        </div>
        <div>
          <h3 className="text-gold text-xl mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold opacity-90">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gold text-xl mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            {social.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold opacity-90">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/15 mt-12 pt-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Noble Dental Care. All rights reserved.
      </div>
    </footer>
  );
}
