// Draft content based on the uploaded design brief and existing approved practice facts.
// Replace with the companion content JSON before indexing or launch.
export const haywardHub = {
  url: "https://nobledentalcares.com/locations/hayward-ca/",
  title: "Dentist Near Hayward, CA | Noble Dental Care in Union City",
  description: "Explore family dentistry and dental implant options for Hayward patients at Noble Dental Care in nearby Union City. Meet Dr. Sayeedi and book your visit.",
  eyebrow: "Serving Hayward Patients From Nearby Union City",
  heading: "Looking for a Dentist in Hayward CA? Comprehensive Care Is Nearby",
  hero: ["From a routine checkup to a conversation about dental implants, find thoughtful care with a team that takes time to know you.", "Noble Dental Care welcomes Hayward patients at our Union City office. Dr. Syed Z. Sayeedi, DDS, helps you understand your options and build a plan around your oral health, comfort and goals."],
  trust: "One office. 34603 Alvarado-Niles Rd, Union City, CA 94587.",
  care: [
    { title: "Protect and maintain", description: "Keep your everyday oral health on track.", items: ["Cleanings and exams", "Family and pediatric dentistry", "Gum disease care"], href: "https://nobledentalcares.com/our-services/professional-dental-cleaning", cta: "Explore preventive care", icon: "protect" },
    { title: "Repair and improve", description: "Restore comfort, function and your smile.", items: ["Crowns and bridges", "Root canal treatment", "Cosmetic dentistry"], href: "https://nobledentalcares.com/our-services/crown-and-bridges", cta: "Explore restorative care", icon: "repair" },
    { title: "Replace missing teeth", description: "Understand the choices for a complete smile.", items: ["Dental implants", "Implant-supported dentures", "Full-arch treatment options"], href: "#hh-treatments", cta: "Find your treatment guide", icon: "implant" },
  ],
  treatments: [
    { title: "All-on-X Dental Implants", description: "Explore fixed full-arch teeth, digital planning and the questions to bring to your consultation.", href: "/all-on-x-dental-implants-hayward-ca", cta: "Explore All-on-X", category: "Full arch", tag: "Full-arch care", icon: "arch", featured: true },
    { title: "Implant-Supported Dentures", description: "Compare removable and fixed choices, and learn how implants can support a steadier denture.", href: "/locations/hayward-ca/implant-supported-dentures", cta: "Explore denture options", category: "Dentures", tag: "Denture stability", icon: "denture", featured: false },
    { title: "Replace Failing Teeth", description: "Learn about preserving, repairing or replacing loose, broken or infected teeth with a whole-mouth plan.", href: "/replace-failing-teeth-hayward-ca", cta: "Explore your options", category: "Failing teeth", tag: "Whole-mouth planning", icon: "repair", featured: false },
    { title: "A Second Look at Failing Teeth", description: "Another guide to understanding tooth-saving care and replacement choices before deciding your next step.", href: "/replace-failing-teeth-hayward-ca-option-2", cta: "Read the second guide", category: "Failing teeth", tag: "Another perspective", icon: "protect", featured: false },
  ],
  implant: "A dental implant is placed in the jawbone to support a replacement tooth or restoration. The crown is the visible tooth, and an abutment connects it to the implant. The right approach depends on your bone, gums, bite and overall health. A consultation is the place to discuss benefits, risks and alternatives.",
  fda: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
  faqs: [
    { question: "Is Noble Dental Care located in Hayward?", answer: "Our only office is at 34603 Alvarado-Niles Rd, Union City, CA 94587. We welcome patients from Hayward and the surrounding East Bay." },
    { question: "How can I book a dental visit?", answer: "Use our online scheduling link or call (510) 493-2130. An appointment request is not a confirmed appointment until the practice confirms the details." },
    { question: "Can I discuss dental implants at my visit?", answer: "Yes. Dr. Sayeedi can evaluate your teeth, gums, bite and bone and discuss whether implants or other treatment options may be appropriate for you." },
    { question: "What are the office hours?", answer: "Monday through Thursday, 9:00 AM to 6:00 PM, and alternate Saturdays, 9:00 AM to 3:00 PM. Friday and Sunday are closed. Please call to confirm hours before your visit." },
  ],
  final: "Your next chapter starts with a conversation.",
};
export const haywardHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${haywardHub.url}#page`, url: haywardHub.url, name: haywardHub.title, description: haywardHub.description },
    { "@type": "Dentist", "@id": "https://nobledentalcares.com/#dentist", name: "Noble Dental Care", url: "https://nobledentalcares.com/", telephone: "+15104932130", address: { "@type": "PostalAddress", streetAddress: "34603 Alvarado-Niles Rd", addressLocality: "Union City", addressRegion: "CA", postalCode: "94587", addressCountry: "US" }, areaServed: { "@type": "City", name: "Hayward" } },
    { "@type": "FAQPage", "@id": `${haywardHub.url}#faq`, mainEntity: haywardHub.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Noble Dental Care", item: "https://nobledentalcares.com/" }, { "@type": "ListItem", position: 2, name: "Hayward", item: haywardHub.url }] },
  ],
};