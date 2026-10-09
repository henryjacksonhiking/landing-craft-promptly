import { useEffect, useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const BOOKING_URL = "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC64000000021387&mode=externalLink";
const PHONE_URL = "tel:+15104932130";
const PHONE = "(510) 493-2130";
const LOGO = "https://nobledentalcares.com/Images/navlogo.webp";
const FOOTER_LOGO = "https://nobledentalcares.com/Images/logo.webp";
function TrackedLink({href, children, className}: {href:string; children:React.ReactNode; className?:string; event?:string; location?:string}) { return <a href={href} className={className}>{children}</a>; }
export function MainSiteHeader() {
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
          <Button variant="ghost" type="button" className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(value => !value)} aria-label="Toggle menu" aria-expanded={open}><span/><span/><span/></Button>
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

export function MainSiteFooter() {
  const columns: [string, [string, string][]][] = [
    ["Our Services", [["Dental Implants", "https://nobledentalcares.com/our-services/dental-implants"], ["Yomi Robotic Surgery", "https://nobledentalcares.com/our-services/yomi-robotic-implant-surgery"], ["All-on-6 Implants", "https://nobledentalcares.com/our-services/all-on-4-and-all-on-6"], ["FP-1 Full Arch", "https://nobledentalcares.com/our-services/fp-1-full-arch-dental-implants"], ["Oral Surgery", "https://nobledentalcares.com/our-services/oral-surgery"]]],
    ["Areas We Serve", [["Hayward Dentist", "https://nobledentalcares.com/hayward-dentist"], ["Newark Dentist", "https://nobledentalcares.com/newark-dentist"], ["Fremont Dentist", "https://nobledentalcares.com/"], ["Union City Dentist", "https://nobledentalcares.com/"], ["Robotic Implants Newark", "https://nobledentalcares.com/robotic-dental-implants-in-newark"]]],
    ["About Us", [["About Noble Dental Care", "https://nobledentalcares.com/about-us"], ["Meet the Doctors", "https://nobledentalcares.com/meet-the-doctor"], ["Insurance & Financing", "https://nobledentalcares.com/insurance-and-financing"], ["Contact Us", "https://nobledentalcares.com/contacts"], ["Dental Blog", "https://nobledentalcares.com/blog"]]],
  ];
  return <footer id="site-footer"><div className="container"><div className="footer-grid"><div><img src={FOOTER_LOGO} alt="Noble Dental Care" className="footer-logo" width="200" height="48" loading="lazy"/><p className="footer-about">Noble Dental Care offers advanced dental implant solutions, Yomi robotic surgery, and comprehensive dental care for patients in Fremont, Union City, Newark, Hayward, and the wider Tri-City area.</p><div className="footer-contact-item"><MapPin/><span>34603 Alvarado-Niles Rd, Union City, CA 94587</span></div><div className="footer-contact-item"><Phone/><a href={PHONE_URL}>{PHONE}</a></div><div className="social-links"><a href="https://www.facebook.com/people/Noble-Dental-Care/100083606354159/" target="_blank" rel="noopener" className="social-link" aria-label="Facebook">f</a><a href="https://www.instagram.com/nobledentalcare_" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">◎</a><a href="https://www.youtube.com/@NobleDentalCare" target="_blank" rel="noopener" className="social-link" aria-label="YouTube">▶</a><a href="https://www.linkedin.com/company/noble-dental-care/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">in</a></div></div>{columns.map(([title, links]) => <div key={title}><p className="footer-col-title">{title}</p><ul className="footer-links">{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>{title === "About Us" && <div className="footer-book"><TrackedLink href={BOOKING_URL} className="btn btn-primary" location="footer">Book Appointment</TrackedLink></div>}</div>)}</div><div className="footer-bottom"><p>&copy; 2025 Noble Dental Care. All rights reserved. 34603 Alvarado-Niles Rd, Union City, CA 94587.</p><p>Serving Fremont, Union City, Newark, Hayward &amp; the Tri-City Area</p></div></div></footer>;
}

