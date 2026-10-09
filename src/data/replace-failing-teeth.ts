import source from "./replace-failing-teeth-copy.json";
import schema from "./replace-failing-teeth-schema.json";
export const copy = source.sections;
export const metadata = source.metadata;
export { schema };
export const PAGE_URL = "https://landing-craft-promptly.lovable.app/replace-failing-teeth-hayward-ca";
export const faq = schema["@graph"].flatMap(node => node["@type"] === "FAQPage" ? node.mainEntity ?? [] : []);
export const proof = { rating: null, reviews: [], video: null, beforeAfter: [] };
export const offer = null;
export const allOnXHaywardPageLive = false;
export const extras = {
  answerEyebrow: "The Short Answer",
  answerHeading: "How Are Failing Teeth Replaced Near Hayward?",
  answer: "Failing teeth are replaced only after a full diagnosis shows which teeth can still be preserved or repaired. Depending on how many teeth are affected, options include a dental implant, a bridge, a partial denture, an implant-supported denture, or All-on-X. Noble Dental Care in Union City plans this care for Hayward patients with Dr. Syed Z. Sayeedi.",
  facts: [
    ["First step", "A whole-mouth exam with imaging, including 3D scans when implants are considered"],
    ["One failing tooth", "Implant and crown, a bridge, or a removable option"],
    ["Several failing teeth", "Individual implants, an implant- or tooth-supported bridge, or a partial denture"],
    ["Most or all teeth", "Implant-supported denture, fixed full-arch bridge, All-on-X, or a complete denture"],
    ["Same-day treatment", "Possible in selected cases, confirmed after exam and imaging"],
    ["Cost", "Personalized after diagnosis, with insurance and financing reviewed"],
    ["Where", "34603 Alvarado-Niles Rd, Union City, a short drive from Hayward"],
  ],
  review: "Medically reviewed by Syed Z. Sayeedi, DDS · Last updated October 9, 2026",
  disclaimer: "This page is for general education and isn't a substitute for an exam. Treatment options, timing, and results vary by patient.",
  microProof: "Practicing since 2001 · Fellowship in implantology · Insurance and financing options",
  badge: "Diagnosis before extraction · Serving Hayward · Noble Dental Care ·",
  guidanceTitle: "Pain or swelling right now?",
  guidance: "Call (510) 493-2130 for guidance. Seek emergency medical care for trouble breathing or swallowing, rapidly spreading facial swelling, uncontrolled bleeding, or major facial trauma.",
  insurance: ["Aetna PPO", "Ameritas", "Anthem", "Blue Cross Blue Shield", "Cigna", "Dental Care USA", "Denti-Cal", "Guardian", "Humana", "MetLife", "Principal", "UnitedHealthcare"],
  insuranceNote: "Don't see your plan? Call us. Coverage varies by plan, and we'll help you check yours.",
  financing: "Third-party financing can spread treatment into monthly payments. We'll review options with you once your plan is ready.",
  tech: ["3D imaging (CBCT)", "Digital implant planning", "Yomi robotic guidance", "Temporary tooth strategy"],
  hours: [["Monday to Thursday", "9:00 AM to 6:00 PM"], ["Alternate Saturdays", "9:00 AM to 3:00 PM"], ["Friday and Sunday", "Closed"]],
};