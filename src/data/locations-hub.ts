import type { CityKey } from "@/components/locations-hub/hub";
export const PAGE_URL = "https://nobledentalcares.com/dentist-hayward-newark-fremont";
export const hero = {
  eyebrow: "Serving Hayward, Newark and Fremont from Union City",
  lead: "Noble Dental Care sits on Alvarado-Niles Road in Union City, between Hayward to the north and Newark and Fremont to the south. Families from all three cities come to us for cleanings, fillings, cosmetic work and dental implants, all with Dr. Syed Z. Sayeedi, DDS, who has been practicing since 2001.",
  bullets: ["Family, cosmetic and implant care under one roof", "Fellowship training in implantology", "Insurance welcome, with financing available"],
  stats: [[2001, "Year Dr. Sayeedi began practicing"], [3, "Neighboring cities we serve most"], ["Sat", "Alternate Saturday appointments"], [1, "Office, centrally located in Union City"]] as [number | string, string][],
};
export const quick = {
  answer: "Noble Dental Care is a general, cosmetic and implant dental practice at 34603 Alvarado-Niles Rd, Union City, CA 94587, led by Dr. Syed Z. Sayeedi, DDS. We serve patients from Hayward, Newark, Fremont and Union City. There is one office, it is in Union City, and it is a short drive from each of those neighboring cities.",
  rows: [["Office", "34603 Alvarado-Niles Rd, Union City, CA 94587"], ["Phone", "(510) 493-2130"], ["Lead dentist", "Syed Z. Sayeedi, DDS"], ["Cities served", "Hayward, Newark, Fremont, Union City"], ["Hours", "Mon to Thu 9 to 6, alternate Sat 9 to 3"]],
};
export const searched = {
  intro: "Most people looking for a Hayward dentist, a Newark dentist or a Fremont dentist want the same things: skilled care, an office that's easy to reach and a team that takes time to listen. Our office sits just outside those city lines, and for many households it's closer than a dentist on the other side of their own town.",
  bars: [["Dentist in Hayward", "We're just south of Hayward in Union City, an easy trip down I-880.", "hayward"], ["Dentist in Newark", "Our office is a short drive north of Newark, with alternate Saturday hours too.", "newark"], ["Dentist in Fremont", "Alvarado-Niles Road links the Niles district of Fremont to our office.", "fremont"]] as [string, string, CityKey][],
};
export const cities: { city: CityKey; title: string; body: string; gettingHere: string; bullets: string[]; page: string; buttonLabel: string; implantLink: [string, string]; hayward?: boolean }[] = [
  { city: "hayward", title: "Your Hayward Dentist, Just Down I-880", body: "Hayward is our neighbor to the north. If you've been looking for a dentist in Hayward who can handle a routine cleaning today and an implant consultation down the road, you won't have to switch offices as your needs change.", gettingHere: "Most Hayward patients take I-880 South to reach us.", bullets: ["Checkups, cleanings and fillings", "Dental implants and All-on-X", "Emergency dental visits"], page: "https://nobledentalcares.com/hayward-dentist", buttonLabel: "Visit the Hayward page", implantLink: ["Dental implants in Hayward", "https://nobledentalcares.com/all-on-x-dental-implants-hayward-ca"], hayward: true },
  { city: "newark", title: "Your Newark Dentist, a Short Drive North", body: "Plenty of people searching for a dentist in Newark find that our Union City office is closer than they expected. Families like being able to book the kids' cleanings, a parent's crown and a grandparent's denture visit in one place.", gettingHere: "Newark patients usually head north on I-880.", bullets: ["Pediatric and family dentistry", "Crowns, bridges and dentures", "Robot-assisted dental implants"], page: "https://nobledentalcares.com/newark-dentist", buttonLabel: "Visit the Newark page", implantLink: ["Dental implants in Newark", "https://nobledentalcares.com/robotic-dental-implants-in-newark"] },
  { city: "fremont", title: "Your Fremont Dentist, Right Next Door", body: "Fremont wraps around the south and east side of Union City, and Alvarado-Niles Road runs straight into the Niles district. Fremont patients often come to us for implant care, including Yomi robot-assisted placement, along with regular checkups and cosmetic work. If you want a dentist in Fremont who can see the whole family, we're an easy choice.", gettingHere: "From Niles, follow Alvarado-Niles Road west. From other areas, take I-880 North.", bullets: ["Yomi robotic implant surgery", "Invisalign and teeth whitening", "Root canals and gum care"], page: "https://nobledentalcares.com/fremont-dentist", buttonLabel: "Visit the Fremont page", implantLink: ["Dental implants in Fremont", "https://nobledentalcares.com/fremont-robotic-dental-implants"] },
];
export const localPages = [
  { to: "/" as const, eyebrow: "Fremont, CA", title: "Dentist in Fremont, CA", body: "Family, cosmetic and Yomi robotic implant care for Fremont patients." },
  { to: "/locations/hayward-ca/implant-supported-dentures" as const, eyebrow: "Hayward, CA", title: "Implant-Supported Dentures", body: "Steadier dentures anchored by implants for Hayward patients." },
  { to: "/all-on-x-dental-implants-hayward-ca" as const, eyebrow: "Hayward, CA", title: "All-on-X Dental Implants", body: "Full-arch fixed teeth planned with 3D imaging and digital guidance." },
  { to: "/replace-failing-teeth-hayward-ca" as const, eyebrow: "Hayward, CA", title: "Replace Failing Teeth", body: "Preserve, repair or replace teeth that are loose, broken or infected." },
  { to: "/replace-failing-teeth-hayward-ca-option-2" as const, eyebrow: "Hayward, CA", title: "Replace Failing Teeth · Option 2", body: "A second design option for the failing-teeth guide." },
];
export const bento = [
  ["One dentist who knows your history.", "Dr. Sayeedi has practiced since 2001, and he gets to know your mouth, your history and your goals over time."],
  ["Real implant training.", "He holds a fellowship in implantology and plans implant cases from the first scan to the final teeth."],
  ["Technology where it helps.", "3D imaging, digital planning and Yomi robotic guidance support accurate implant placement in suitable cases."],
  ["A gentle touch.", "Patients often mention his \"feather light touch,\" and anxious patients can ask about sedation options."],
  ["Care for every age.", "From a child's first cleaning to a full-arch restoration, the whole family can be seen here."],
  ["Clear costs up front.", "We review insurance, estimates and financing with you before treatment begins."],
];
const S = "https://nobledentalcares.com/our-services/";
export const services: [string, [string, string][]][] = [
  ["Preventive and Family Care", [["Dental cleanings and exams", S + "professional-dental-cleaning"], ["Pediatric dentistry", S + "pediatric-dentistry"], ["Gum disease treatment", S + "periodontics"], ["Sleep apnea treatment", S + "sleep-apnea"]]],
  ["Restorative Dentistry", [["General dentistry and fillings", S + "general-dentistry"], ["Crowns and bridges", S + "crown-and-bridges"], ["Root canals", S + "root-canal"], ["Full and partial dentures", S + "full-partial-dentures"]]],
  ["Cosmetic Dentistry", [["Smile makeovers", S + "cosmetic-dentistry"], ["Porcelain veneers", S + "porcelain-veneer"], ["Invisalign clear aligners", S + "invisalign"], ["Teeth whitening", S + "teeth-whitening"]]],
  ["Surgical and Urgent Care", [["Oral surgery and wisdom teeth", S + "wisdom-tooth-extraction"], ["Bone grafting and sinus lifts", S + "bone-grafting-sinus-lifting"], ["Sedation dentistry", S + "sedation-dentistry"], ["Emergency dentistry", S + "emergency-dentistry"]]],
];
export const implants = {
  body: "Many people who search for dental implants in Hayward, Fremont or Newark have lived with a gap, a loose partial or a slipping denture for longer than they'd like. An implant replaces the root of the tooth as well as the part you see, so the new tooth is anchored in your jawbone and feels steady when you chew. If you'd like to read up on the basics before your visit, the American Dental Association's patient guide to dental implants is a good, plain-language place to start.",
  options: [["Single tooth implants", S + "dental-implants"], ["Implant-supported bridges", S + "dental-implants"], ["Implant-supported dentures", S + "full-partial-dentures"], ["All-on-4 and All-on-6 full-arch implants", S + "all-on-4-and-all-on-6"], ["FP-1 full-arch implants", S + "fp-1-full-arch-dental-implants"], ["Same-day teeth for full-arch cases, when your bone and healing allow", S + "same-day-teeth-for-full-arch-implants"]] as [string, string][],
  plan: [["3D imaging to check bone height and width", ""], ["Digital planning of each implant's position", ""], ["Yomi robot-assisted guidance in suitable cases", S + "yomi-robotic-implant-surgery"], ["Bone grafting or a sinus lift if more support is needed", S + "bone-grafting-sinus-lifting"]] as [string, string][],
  rows: [["Single implant", "One tooth", "Fixed", "Neighboring teeth don't need to be filed down"], ["Implant-supported bridge", "Several teeth in a row", "Fixed", "Uses fewer implants than the number of teeth replaced"], ["Implant-supported denture", "A full arch", "Removable, snaps in place", "Much steadier than a regular denture"], ["All-on-4 or All-on-6", "A full arch", "Fixed", "Temporary teeth on surgery day may be possible in selected cases"], ["Traditional denture", "Some or all teeth", "Removable", "Usually lower upfront cost, but less stable"]],
  closing: "The right choice depends on your bone, gum health, bite, budget and how you want your teeth to feel day to day. Sorting that out is exactly what your consultation is for.",
};
export const doctor = {
  body: "Dr. Sayeedi has been in dentistry since 2001 and has treated thousands of patients from across the southern East Bay. He completed a fellowship in implantology and keeps learning through regular continuing education in orthodontics, endodontics, esthetics and implants. Patient education is one of his top priorities. He takes time to explain what he sees and why he recommends it, so you can make decisions without feeling pushed.",
  checks: ["Practicing dentistry since 2001", "Fellowship in Implantology", "Member of the American Dental Association and California Dental Association", "Known for being gentle and great with kids"],
  team: "He works alongside Dr. Manmeet Virk and hygienist Laiba Sayeedi, RDH.",
};
export const steps = [["Reach out", "Call or book online and tell us if you're in pain, due for a cleaning or curious about implants."], ["Get a thorough exam", "Dr. Sayeedi checks your teeth, gums and bite and takes the X-rays or scans he needs."], ["Hear your options", "You'll learn what needs attention now, what can wait and the choices you have."], ["Know the cost first", "We go over insurance, estimates and financing before any treatment starts."]];
export const plans = ["Aetna PPO", "Ameritas", "Anthem", "Blue Cross Blue Shield", "Cigna", "Dental Care USA", "Denti-Cal", "Guardian", "Humana", "MetLife", "Principal", "UnitedHealthcare"];
