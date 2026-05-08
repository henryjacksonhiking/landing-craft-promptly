import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import drSayeediImg from "@/assets/dr-sayeedi.jpg";

const PHONE_HREF = "tel:+15104932130";
const PHONE_TEXT = "(510) 493-2130";
const BOOK = "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC64000000021387&mode=externalLink";
const NAV_LOGO = "https://nobledentalcares.com/Images/navlogo.webp";
const FOOTER_LOGO = "https://nobledentalcares.com/Images/logo.webp";
const DIRECTIONS = "https://g.co/kgs/X9q2BJg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentist in Fremont CA | Dental Implants Near Fremont" },
      {
        name: "description",
        content:
          "Looking for dental implants near Fremont, CA? Noble Dental Care offers advanced care with Yomi robotic technology for precise, comfortable results.",
      },
      { property: "og:title", content: "Dentist in Fremont CA | Noble Dental Care" },
      {
        property: "og:description",
        content:
          "Advanced dental implants, Yomi robotic surgery, and full-mouth restorations near Fremont, Union City, Newark, and Hayward.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
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
              medicalSpecialty: [
                "Dentistry",
                "Implant Dentistry",
                "Restorative Dentistry",
                "Cosmetic Dentistry",
                "Oral Surgery",
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Syed Zafar Sayeedi",
                jobTitle: "Dentist",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------------- Reusable SVG icons ---------------- */
const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

/* ---------------- Scroll reveal hook ---------------- */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="site-header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header-inner">
          <a href="https://nobledentalcares.com" className="header-logo" aria-label="Noble Dental Care">
            <img src={NAV_LOGO} alt="Noble Dental Care" width={200} height={44} />
          </a>
          <div className="header-right">
            <a href={PHONE_HREF} className="header-phone">
              <PhoneIcon />
              {PHONE_TEXT}
            </a>
            <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary header-cta">
              Schedule Appointment
            </a>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} role="navigation">
        <a href={PHONE_HREF}>{PHONE_TEXT}</a>
        <a href="https://nobledentalcares.com/our-services/dental-implants">Dental Implants</a>
        <a href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery">Yomi Robotic Surgery</a>
        <a href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6">All-on-6</a>
        <a href="https://nobledentalcares.com/about-us">About Dr. Sayeedi</a>
        <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
          Schedule Appointment
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden />
      <div className="hero-gradient" aria-hidden />
      <div className="hero-shape-1" aria-hidden />
      <div className="hero-shape-2" aria-hidden />
      <div className="hero-shape-3" aria-hidden />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <span
              className="section-label reveal"
              style={{ color: "var(--gold-light)", background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.3)" }}
            >
              Serving Fremont, Union City &amp; Nearby
            </span>
            <h1 id="hero-heading" className="reveal delay-1">
              Trusted <span>Dentist in<br />Fremont CA</span>
            </h1>
            <p className="reveal delay-2">
              Looking for a <strong style={{ color: "var(--white)", fontWeight: 700 }}>Dentist in Fremont CA</strong> who can help
              you restore missing teeth with advanced dental implant care? Noble Dental Care welcomes patients from Fremont,
              Union City, Newark, and nearby communities for personalized implant dentistry supported by modern technology,
              careful planning, and the experience of Dr. Syed Zafar Sayeedi.
            </p>
            <div className="cta-group reveal delay-3">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
                Schedule Your Consultation <ArrowIcon />
              </a>
              <a href={PHONE_HREF} className="btn btn-outline-light">
                <PhoneIcon /> Call Now
              </a>
            </div>
            <div className="hero-badges reveal delay-4">
              {["Yomi Robotic Technology", "Fellowship in Implantology", "20+ Years Experience", "Serving Fremont & Tri-City Area"].map(
                (t) => (
                  <span className="hero-badge" key={t}>
                    <CheckCircleIcon /> {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="hero-video-wrap reveal-right delay-2">
            <div className="hero-video-card">
              <div className="hero-play" aria-hidden>
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div className="hero-video-caption">
                <h3>Advanced Implant Care Preview</h3>
                <p>
                  Yomi robotic implant planning, patient comfort, and the Noble Dental Care experience — all in one
                  precision-guided workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PATIENT FIRST ---------------- */
function PatientFirst() {
  return (
    <section className="section section-light" id="patient-first">
      <div className="container">
        <div className="two-col">
          <div>
            <span className="section-label reveal">Patient-Centered Care</span>
            <h2 className="reveal delay-1">Dental Implant Care Near Fremont With a Patient-First Approach</h2>
            <div className="gold-bar reveal delay-2" />
            <p className="reveal delay-2">
              Missing teeth can affect how you eat, speak, smile, and feel in everyday life. At Noble Dental Care, patients
              receive a detailed evaluation before treatment recommendations are made. The goal is to understand your concerns,
              review your oral health, and create a dental implant plan that supports long-term comfort, function, and
              confidence.
            </p>
            <div className="cta-group reveal delay-3">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
                Start Your Smile Evaluation
              </a>
            </div>
            <p className="reveal delay-3" style={{ marginTop: 32 }}>
              Dr. Syed Zafar Sayeedi has been in dentistry since 2001 and is known for restorative, cosmetic, surgical, and
              preventive care. His Fellowship in Implantology and continued education in implants, esthetics, orthodontics,
              and endodontics help Noble Dental Care provide a more complete treatment experience for patients seeking a
              dentist near Fremont CA.
            </p>
            <div className="cta-group reveal delay-4">
              <a href="https://nobledentalcares.com/about-us" className="btn btn-outline-teal">
                Meet Your Implant Dentist
              </a>
            </div>
          </div>
          <div className="reveal-right">
            <div className="doctor-card">
              <img
                src={drSayeediImg}
                alt="Dr. Syed Zafar Sayeedi — Noble Dental Care"
                width={600}
                height={460}
                loading="lazy"
              />
              <div className="doctor-overlay">
                <p className="doctor-name">Dr. Syed Zafar Sayeedi</p>
                <p className="doctor-title">Fellowship in Implantology · Dentist Since 2001</p>
              </div>
            </div>
            <div className="doctor-stats">
              <div className="stat-box"><div className="stat-num">20+</div><div className="stat-label">Years in Dentistry</div></div>
              <div className="stat-box"><div className="stat-num">4</div><div className="stat-label">Cities Served</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY FREMONT ---------------- */
function WhyFremont() {
  const items = [
    "Dental implant care planned around each patient's needs",
    "Yomi robotic technology for guided implant placement",
    "Experience in restorative, cosmetic, surgical, and preventive dentistry",
    "Convenient access for Fremont, Union City, Newark, and Hayward patients",
    "Personalized treatment planning with clear communication",
  ];
  return (
    <section className="section section-dark" id="why-fremont">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: "center", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          <span className="section-label">Why Fremont Patients Trust Us</span>
          <h2>Why Fremont Patients Choose Noble Dental Care</h2>
          <div className="gold-bar" style={{ margin: "16px auto 20px" }} />
          <p style={{ color: "rgba(255,255,255,0.78)" }}>
            Patients searching for a dentist in Fremont CA want clear answers, advanced care, and a team that can manage their
            treatment with confidence. Noble Dental Care provides comprehensive dentistry near Fremont — evaluation, planning,
            treatment, and follow-up in one trusted location.
          </p>
        </div>
        <div className="advantages-grid">
          {items.map((t, i) => (
            <div key={t} className={`adv-item reveal delay-${(i % 4) + 1}`}>
              <div className="adv-icon">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth={2.4} /></svg>
              </div>
              <p className="adv-text">{t}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }} className="reveal">
          <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
            Book an Appointment <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPLANT OPTIONS ---------------- */
function ImplantOptions() {
  const cards: { title: string; icon: React.ReactNode }[] = [
    {
      title: "Single Dental Implants",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2c2.8 0 5 2.4 5 5.4 0 2-1 3.6-2 5-.8 1.2-1 2.4-1.2 4l-.3 4c-.1 1-.7 1.6-1.5 1.6s-1.4-.6-1.5-1.6l-.3-4c-.2-1.6-.4-2.8-1.2-4-1-1.4-2-3-2-5C7 4.4 9.2 2 12 2z" />
        </svg>
      ),
    },
    {
      title: "Implant-Supported Bridges",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 6c1.5 0 2.5 1.2 2.5 3v3c0 1 .6 1.6 1.4 1.6.8 0 1.3-.6 1.3-1.6V9.5c0-1.4 1-2.5 2.8-2.5s2.8 1.1 2.8 2.5V12c0 1 .5 1.6 1.3 1.6.8 0 1.4-.6 1.4-1.6V9c0-1.8 1-3 2.5-3v3c-.5 0-.7.3-.7 1v3c0 2-1.4 3.5-3.2 3.5-1.4 0-2.5-.8-3-2-.5 1.2-1.6 2-3 2h-.2c-1.4 0-2.5-.8-3-2-.5 1.2-1.6 2-3 2C2.1 16.5.7 15 .7 13v-3c0-.7-.2-1-.7-1V6h4z" transform="translate(2 1)" />
        </svg>
      ),
    },
    {
      title: "Implant-Supported Dentures",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M3 8c0-1.7 1.3-3 3-3 1.4 0 2.2.8 2.8 1.6.4.5.7.9 1.2.9.5 0 .8-.4 1.2-.9C11.8 5.8 12.6 5 14 5c1.7 0 3 1.3 3 3 0 .8-.2 1.5-.5 2.2L14 17c-.3.7-.9 1-1.5 1h-1c-.6 0-1.2-.3-1.5-1L7.5 10.2C7.2 9.5 7 8.8 7 8M19 14c0-1.7 1.3-3 3-3v3c-.4 0-.6.3-.6.8 0 .8-.7 1.5-1.5 1.5-.4 0-.7-.1-.9-.3" transform="translate(-1 0)" />
        </svg>
      ),
    },
    {
      title: "Full-Mouth Dental Implants",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3C7 3 3 6.5 3 11c0 2.5 1.2 4.7 3 6.2v2.3c0 .8.6 1.5 1.4 1.5.6 0 1.1-.4 1.4-1l.7-1.5c.8.2 1.6.3 2.5.3s1.7-.1 2.5-.3l.7 1.5c.3.6.8 1 1.4 1 .8 0 1.4-.7 1.4-1.5v-2.3c1.8-1.5 3-3.7 3-6.2 0-4.5-4-8-9-8zm-3.5 7c.8 0 1.5.7 1.5 1.5S9.3 13 8.5 13 7 12.3 7 11.5 7.7 10 8.5 10zm7 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
        </svg>
      ),
    },
    {
      title: "All-on-6 Full-Mouth Solutions",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5c-4.4 0-8 3-8 6.7 0 1.6.6 3 1.7 4.2.5.5.8 1.1.9 1.8l.5 4c.2 1.4 1.4 2.3 2.8 2.3.7 0 1.3-.5 1.5-1.2l.3-1c.1-.4.5-.6.9-.6h.8c.4 0 .8.2.9.6l.3 1c.2.7.8 1.2 1.5 1.2 1.4 0 2.6-.9 2.8-2.3l.5-4c.1-.7.4-1.3.9-1.8C19.4 12.2 20 10.8 20 9.2c0-3.7-3.6-6.7-8-6.7zM8 8.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm8 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-2.5 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
        </svg>
      ),
    },
    {
      title: "FP-1 Full-Arch Restorations",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M3 9c0-1 .8-1.8 1.8-1.8h14.4c1 0 1.8.8 1.8 1.8 0 .8-.5 1.5-1.2 1.7L17.5 18c-.4 1.2-1.5 2-2.7 2H9.2c-1.2 0-2.3-.8-2.7-2L4.2 10.7C3.5 10.5 3 9.8 3 9zm5 3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S10.3 11 9.5 11 8 11.7 8 12.5zm5 0c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S15.3 11 14.5 11 13 11.7 13 12.5z" />
        </svg>
      ),
    },
  ];
  return (
    <section className="section section-alt" id="implant-options">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Implant Solutions</span>
          <h2>Dental Implant Options for Missing Teeth</h2>
          <div className="gold-bar" />
          <p>
            Dental implants are designed to replace missing teeth by supporting crowns, bridges, dentures, or full-mouth
            restorations. For patients missing one tooth, multiple teeth, or a full arch, Noble Dental Care can evaluate
            which implant solution may be appropriate based on bone health, bite function, smile goals, and overall oral
            condition.
          </p>
        </div>
        <div className="implant-options-grid">
          {cards.map(({ title, icon }, i) => (
            <div key={title} className={`implant-card reveal delay-${(i % 3) + 1}`}>
              <div className="implant-icon">{icon}</div>
              <h4>{title}</h4>
            </div>
          ))}
        </div>
        <p className="reveal">
          For patients considering a complete smile restoration, visit{" "}
          <a href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" className="inline-link">
            All-on-6 full mouth dental implants
          </a>
          . For general implant education, visit{" "}
          <a href="https://nobledentalcares.com/our-services/dental-implants" className="inline-link">
            dental implants
          </a>
          .
        </p>
        <div className="cta-group reveal">
          <a href="https://nobledentalcares.com/our-services/dental-implants" className="btn btn-primary">
            Explore Implant Options
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- YOMI ---------------- */
function Yomi() {
  return (
    <section className="section section-light" id="yomi">
      <div className="container">
        <div className="two-col">
          <div className="reveal-left">
            <div className="yomi-visual">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Yomi robotic dental implant surgery"
                width={600}
                height={480}
                loading="lazy"
              />
              <div className="yomi-tag">
                <p>
                  Yomi does not replace the dentist — it assists the clinician during planning and surgery by helping guide
                  implant placement in real time.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="yomi-badge reveal">Advanced Technology</div>
            <h2 className="reveal delay-1">Yomi Robotic Implant Surgery Near Fremont</h2>
            <div className="gold-bar reveal delay-2" />
            <p className="reveal delay-2">
              Noble Dental Care uses the Yomi robotic system to support dental implant planning and placement. Yomi combines
              3D imaging, digital planning, and robotic guidance to help the dentist place implants according to a
              personalized surgical plan.
            </p>
            <div className="cta-group reveal delay-3">
              <a href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" className="btn btn-primary">
                Learn About Yomi
              </a>
            </div>
            <div className="yomi-features reveal delay-3">
              {["3D Digital Planning", "Real-Time Guidance", "Personalized Surgical Plan", "Robotic Precision Assist"].map((f) => (
                <div className="yomi-feat" key={f}>
                  <svg viewBox="0 0 24 24" aria-hidden><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {f}
                </div>
              ))}
            </div>
            <p className="reveal delay-4">
              For patients with single missing teeth or full-mouth implant needs,{" "}
              <a href="https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" className="inline-link">
                Yomi robotic implant surgery
              </a>{" "}
              can support accuracy, confidence, and a more customized treatment experience.
            </p>
            <div className="cta-group reveal delay-4">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-outline-teal">
                Ask About Robotic Implants
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FULL MOUTH ---------------- */
function FullMouth() {
  return (
    <section className="section section-alt" id="full-mouth">
      <div className="container">
        <div className="two-col">
          <div>
            <span className="section-label reveal">Complete Smile Restoration</span>
            <h2 className="reveal delay-1">Full-Mouth Dental Implants for Greater Stability</h2>
            <div className="gold-bar reveal delay-2" />
            <p className="reveal delay-2">
              Patients with many missing, damaged, or failing teeth may need more than a single-tooth replacement. Full-mouth
              dental implants are designed to restore an entire upper or lower arch with implant support — improving chewing
              ability, smile appearance, and daily comfort compared with removable options.
            </p>
            <div className="cta-group reveal delay-3">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
                Request a Full-Mouth Consultation
              </a>
            </div>
            <p className="reveal delay-3" style={{ marginTop: 28 }}>
              Noble Dental Care offers advanced full-arch options, including All-on-6 and FP-1 full-arch dental implant
              restorations. These solutions should be discussed after a complete consultation, digital imaging, and clinical
              evaluation.
            </p>
            <div className="full-mouth-options reveal delay-4">
              <a href="https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants" className="option-card">
                <div className="option-title">FP-1 Full Arch Dental Implants</div>
                <p className="option-desc">A fixed implant restoration designed for patients seeking a permanent, stable full-arch solution.</p>
                <span className="option-link">Learn More <ArrowIcon /></span>
              </a>
              <a href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" className="option-card">
                <div className="option-title">All-on-6 Full Mouth Implants</div>
                <p className="option-desc">A full-arch restoration supported by six strategically placed dental implants for comprehensive stability.</p>
                <span className="option-link">Learn More <ArrowIcon /></span>
              </a>
            </div>
            <div className="cta-group reveal delay-5">
              <a href="https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" className="btn btn-outline-teal">
                See Full-Arch Options
              </a>
            </div>
          </div>
          <div className="reveal-right">
            <img
              src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80"
              alt="Full-mouth dental implant consultation"
              width={600}
              height={540}
              loading="lazy"
              style={{ borderRadius: 12, boxShadow: "var(--shadow-teal)", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPREHENSIVE ---------------- */
function Comprehensive() {
  return (
    <section className="section section-light" id="comprehensive">
      <div className="container">
        <div className="two-col reverse">
          <div className="reveal-right">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffedee96e2e?w=800&q=80"
              alt="Noble Dental Care comprehensive dentistry near Fremont"
              width={600}
              height={500}
              loading="lazy"
              style={{ borderRadius: 12, boxShadow: "var(--shadow-soft)", width: "100%" }}
            />
          </div>
          <div>
            <span className="section-label reveal">Holistic Dental Health</span>
            <h2 className="reveal delay-1">Comprehensive Dentistry Close to Fremont</h2>
            <div className="gold-bar reveal delay-2" />
            <p className="reveal delay-2">
              A strong implant result depends on more than placing an implant. Gum health, bone support, bite balance, existing
              teeth, and long-term maintenance all matter. Because Noble Dental Care offers comprehensive dentistry, patients
              can receive a broader view of their oral health before beginning treatment.
            </p>
            <div className="cta-group reveal delay-3">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
                Plan Your Visit
              </a>
            </div>
            <p className="reveal delay-3" style={{ marginTop: 28 }}>
              For some patients, supporting treatments may be recommended before implants. These may include extractions, bone
              grafting, sinus lift procedures, or other{" "}
              <a href="https://nobledentalcares.com/our-services/oral-surgery" className="inline-link">oral surgery</a>{" "}
              services when clinically appropriate.
            </p>
            <div className="comprehensive-steps reveal delay-4">
              {[
                ["Comprehensive Evaluation", "Full review of gum health, bone structure, existing teeth, and bite balance."],
                ["Supporting Treatment (if needed)", "Extractions, bone grafting, sinus lift, or oral surgery when clinically appropriate."],
                ["Personalized Implant Plan", "A treatment plan designed around your specific oral health and goals."],
              ].map(([title, desc], i) => (
                <div className="step-item" key={title}>
                  <div className="step-num">{i + 1}</div>
                  <div className="step-text"><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="cta-group reveal delay-5">
              <a href={BOOK} target="_blank" rel="noopener" className="btn btn-outline-teal">
                Get Personalized Guidance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section className="section section-dark" id="location">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: "center", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          <span className="section-label">Easy Access</span>
          <h2>A Convenient Dental Implant Dentist Near Fremont CA</h2>
          <div className="gold-bar" style={{ margin: "16px auto 20px" }} />
        </div>
        <div className="two-col">
          <div>
            <p className="reveal">
              Noble Dental Care is located in Union City, making it a convenient option for patients from Fremont, Union City,
              Newark, Hayward, and the wider Tri-City area.
            </p>
            <div className="cta-group reveal delay-1">
              <a href={DIRECTIONS} target="_blank" rel="noopener" className="btn btn-primary">
                <PinIcon /> Get Directions
              </a>
            </div>
            <p className="reveal delay-2" style={{ marginTop: 28 }}>
              Choosing a nearby implant dentist makes consultations, treatment visits, and follow-up care easier to manage.
            </p>
            <div className="service-areas reveal delay-3">
              {["Fremont", "Union City", "Newark", "Hayward"].map((c) => (
                <span className="area-tag" key={c}>{c}</span>
              ))}
            </div>
            <div className="cta-group reveal delay-4">
              <a href={PHONE_HREF} className="btn btn-outline-light">
                <PhoneIcon /> Call the Office
              </a>
            </div>
          </div>
          <div className="reveal-right">
            <div className="location-card">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps?q=34603+Alvarado-Niles+Rd,+Union+City,+CA+94587&output=embed"
                  title="Noble Dental Care location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="location-info">
                <h3>Noble Dental Care</h3>
                <div className="location-detail">
                  <PinIcon />
                  <p>34603 Alvarado-Niles Rd<br />Union City, CA 94587</p>
                </div>
                <div className="location-detail">
                  <PhoneIcon />
                  <p><a href={PHONE_HREF} style={{ color: "rgba(255,255,255,0.82)" }}>{PHONE_TEXT}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLOSING CTA ---------------- */
function ClosingCTA() {
  return (
    <section id="closing-cta">
      <div className="cta-bg-pattern" aria-hidden />
      <div className="cta-ring-1" aria-hidden />
      <div className="cta-ring-2" aria-hidden />
      <div className="cta-ring-3" aria-hidden />
      <div className="container">
        <span className="section-label reveal">Take the Next Step</span>
        <h2 className="reveal delay-1">Ready to Restore Your Smile Near Fremont?</h2>
        <div className="gold-bar reveal delay-2" style={{ margin: "16px auto 24px" }} />
        <p className="reveal delay-2">
          If missing teeth are affecting your comfort, confidence, or daily routine, Noble Dental Care can help you understand
          your options. From single dental implants to full-mouth implant solutions and Yomi robotic guidance, the team
          provides thoughtful care designed around your needs.
        </p>
        <div className="cta-group reveal delay-3">
          <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary">
            Schedule Your Consultation <ArrowIcon />
          </a>
        </div>
        <p className="reveal delay-4" style={{ marginTop: 36 }}>
          Your first step is a detailed consultation. The team can review your concerns, evaluate your oral health, discuss
          implant possibilities, and explain what type of treatment plan may be suitable for you.
        </p>
        <div className="cta-group reveal delay-5">
          <a href={BOOK} target="_blank" rel="noopener" className="btn btn-outline-light">
            Request an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS: { q: string; a: string; cta: { label: string; href: string; external?: boolean } }[] = [
  {
    q: "Is Noble Dental Care located in Fremont CA?",
    a: "Noble Dental Care is located in Union City and serves patients from Fremont, Newark, Hayward, and nearby communities.",
    cta: { label: "Get Directions", href: DIRECTIONS, external: true },
  },
  {
    q: "Does Noble Dental Care offer dental implants?",
    a: "Yes. Noble Dental Care provides dental implant solutions, including single implants, full-mouth implants, and implant-supported restorations.",
    cta: { label: "Explore Implants", href: "https://nobledentalcares.com/our-services/dental-implants" },
  },
  {
    q: "What is Yomi robotic implant surgery?",
    a: "Yomi is robotic-assisted technology that helps guide dental implant planning and placement with digital precision.",
    cta: { label: "Learn About Yomi", href: "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery" },
  },
  {
    q: "Who may be a dental implant candidate?",
    a: "Patients with one or more missing teeth may be candidates, depending on bone health, gum health, and overall oral condition.",
    cta: { label: "Check Eligibility", href: BOOK, external: true },
  },
  {
    q: "Are full-mouth dental implants available?",
    a: "Yes. Noble Dental Care offers full-mouth implant options, including All-on-6 and full-arch implant restorations.",
    cta: { label: "View Full-Mouth Options", href: "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6" },
  },
  {
    q: "Why choose a dentist near Fremont CA?",
    a: "A nearby dentist makes consultation, treatment visits, follow-up care, and long-term maintenance more convenient.",
    cta: { label: "Book Your Visit", href: BOOK, external: true },
  },
];

function FAQItem({ item, open, onToggle }: { item: typeof FAQS[number]; open: boolean; onToggle: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq-item${open ? " active" : ""}`}>
      <button className="faq-question" aria-expanded={open} onClick={onToggle}>
        <span className="faq-q-text">{item.q}</span>
        <span className="faq-chevron">
          <svg viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>
      <div
        className="faq-answer"
        ref={answerRef}
        style={{ maxHeight: open ? answerRef.current?.scrollHeight ?? 600 : 0 }}
      >
        <div className="faq-answer-inner">
          <p>{item.a}</p>
          <a href={item.cta.href} target={item.cta.external ? "_blank" : undefined} rel="noopener" className="btn btn-primary">
            {item.cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: "center", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          <span className="section-label">Frequently Asked Questions</span>
          <h2>FAQs About Dentist in Fremont CA and Dental Implants</h2>
          <div className="gold-bar" style={{ margin: "16px auto 0" }} />
        </div>
        <div className="faq-list reveal delay-1">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} item={f} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const services: [string, string][] = [
    ["Dental Implants", "https://nobledentalcares.com/our-services/dental-implants"],
    ["Yomi Robotic Surgery", "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery"],
    ["All-on-6 Implants", "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6"],
    ["FP-1 Full Arch", "https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants"],
    ["Oral Surgery", "https://nobledentalcares.com/our-services/oral-surgery"],
  ];
  const areas: [string, string][] = [
    ["Hayward Dentist", "https://nobledentalcares.com/hayward-dentist"],
    ["Newark Dentist", "https://nobledentalcares.com/newark-dentist"],
    ["Fremont Dentist", "https://nobledentalcares.com/"],
    ["Union City Dentist", "https://nobledentalcares.com/"],
    ["Robotic Implants Newark", "https://nobledentalcares.com/robotic-dental-implants-in-newark"],
  ];
  const about: [string, string][] = [
    ["About Noble Dental Care", "https://nobledentalcares.com/about-us"],
    ["Meet the Doctors", "https://nobledentalcares.com/meet-the-doctor"],
    ["Insurance & Financing", "https://nobledentalcares.com/insurance-and-financing"],
    ["Contact Us", "https://nobledentalcares.com/contacts"],
    ["Dental Blog", "https://nobledentalcares.com/blog"],
  ];

  return (
    <footer id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src={FOOTER_LOGO} alt="Noble Dental Care" className="footer-logo" width={200} height={48} loading="lazy" />
            <p className="footer-about">
              Noble Dental Care offers advanced dental implant solutions, Yomi robotic surgery, and comprehensive dental care
              for patients in Fremont, Union City, Newark, Hayward, and the wider Tri-City area.
            </p>
            <div className="footer-contact-item">
              <PinIcon />
              <span>34603 Alvarado-Niles Rd, Union City, CA 94587</span>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon />
              <a href={PHONE_HREF}>{PHONE_TEXT}</a>
            </div>
            <div className="social-links" style={{ marginTop: 20 }}>
              <a href="https://www.facebook.com/people/Noble-Dental-Care/100083606354159/" target="_blank" rel="noopener" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/nobledentalcare_" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://www.youtube.com/@NobleDentalCare" target="_blank" rel="noopener" className="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/noble-dental-care/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
          {[
            ["Our Services", services],
            ["Areas We Serve", areas],
            ["About Us", about],
          ].map(([title, links]) => (
            <div key={title as string}>
              <p className="footer-col-title">{title as string}</p>
              <ul className="footer-links">
                {(links as [string, string][]).map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
              {title === "About Us" && (
                <div style={{ marginTop: 24 }}>
                  <a href={BOOK} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: "0.8rem", padding: "12px 22px" }}>
                    Book Appointment
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Noble Dental Care. All rights reserved. 34603 Alvarado-Niles Rd, Union City, CA 94587.</p>
          <p>Serving Fremont, Union City, Newark, Hayward &amp; the Tri-City Area</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Progress + Back to top ---------------- */
function ProgressAndBackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(dh > 0 ? (st / dh) * 100 : 0);
      setVisible(st > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="progress-bar" style={{ width: `${progress}%` }} />
      <button
        id="back-to-top"
        className={visible ? "visible" : ""}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden><polyline points="18 15 12 9 6 15" /></svg>
      </button>
    </>
  );
}

/* ---------------- PAGE ---------------- */
function HomePage() {
  useScrollReveal();
  return (
    <>
      <ProgressAndBackToTop />
      <Header />
      <Hero />
      <PatientFirst />
      <WhyFremont />
      <ImplantOptions />
      <Yomi />
      <FullMouth />
      <Comprehensive />
      <Location />
      <ClosingCTA />
      <FAQ />
      <Footer />
    </>
  );
}
