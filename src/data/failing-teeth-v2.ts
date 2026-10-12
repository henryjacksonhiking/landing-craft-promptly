import schema from './failing-teeth-v2-schema.json';
export { schema };
export const PAGE_PATH = '/replace-failing-teeth-hayward-ca-option-2';
export const PAGE_URL = `https://landing-craft-promptly.lovable.app${PAGE_PATH}`;
export const faq = schema['@graph'].flatMap(node => node['@type'] === 'FAQPage' ? node.mainEntity ?? [] : []);
export const hero = {
 lead: "When teeth keep breaking, loosening, or flaring up, every visit can feel like another patch. Dr. Syed Z. Sayeedi looks at your whole mouth, saves the teeth that can be saved, and maps clear replacement options for the rest, at our Union City office a short drive south of Hayward.",
 chips: ['Save what is predictably restorable', "Replace what can't be maintained safely", 'Plan your bite as one connected system'],
};
export const answer = "Failing teeth are replaced only after a full diagnosis shows which teeth can still be preserved or repaired. Depending on how many teeth are affected, options include a dental implant, a bridge, a partial denture, an implant-supported denture, or All-on-X. Noble Dental Care in Union City plans this care for Hayward patients with Dr. Syed Z. Sayeedi.";
export const signs = [
 ['Pain that keeps coming back.', 'Recurring pain or pain when biting can point to decay, a crack, or infection.'],
 ['Swelling or a bad taste.', 'A gum pimple, bad taste, or drainage may signal infection.'],
 ['A loose adult tooth.', 'Movement can be linked to gum disease, bone loss, or heavy bite forces.'],
 ['A deep crack or break.', 'A fracture below the gumline may leave too little tooth to restore.'],
 ['Repairs that keep failing.', 'Repeat decay or a failing root canal may need a fresh prognosis.'],
 ['Trouble chewing.', 'Favoring one side or sticking to soft foods deserves an evaluation.'],
];
export const paths = [
 {name:'Preserve', when:'a reasonable long-term outlook and enough healthy support.', care:'monitoring, gum care, a bite adjustment, or a protective restoration.', goal:'keep useful natural tooth.'},
 {name:'Repair', when:'damage can be treated predictably and the tooth still matters to your bite.', care:'a filling, crown, root canal, or gum treatment.', goal:'restore comfort without replacing too early.'},
 {name:'Replace', when:"the tooth can't be restored predictably or poses an infection risk.", care:'an implant, bridge, partial denture, implant-supported denture, or full-arch treatment.', goal:'rebuild with a solution you can maintain.'},
];
export const scopes = [
 {name:'One tooth', options:['Single implant and crown','Traditional bridge','Removable option']},
 {name:'Several teeth', options:['Individual implants','Implant-supported bridge','Tooth-supported bridge','Partial denture']},
 {name:'Most or all teeth', options:['Implant-supported denture','Fixed full-arch bridge','All-on-4, All-on-6, or All-on-X','Complete denture']},
];
export const waiting = [
 ['First','Symptoms come and go while decay or infection can keep progressing.'],
 ['Next','Chewing shifts to the other side and your bite loses balance.'],
 ['Over time','Gum disease and infection can be associated with bone changes.'],
 ['Later','A repairable tooth may become nonrestorable, and implants may need extra planning or grafting.'],
];
export const steps = ['Calm urgent problems','Examine your whole mouth, with 3D scans when implants are considered', "Map each tooth's prognosis, alternatives, timing, and fees", 'Remove and rebuild if needed: grafting, implants, a bridge, or temporary teeth', 'Complete your final teeth for fit, bite, and appearance','Protect your result with maintenance and bite checks'];
export const reality = ['Confirmed only after exam and imaging','Temporary and final teeth do different jobs','A soft-food period may apply','Follow-up visits remain essential'];
export const sameDay = 'A failing tooth can sometimes be removed and an implant placed in one visit, and selected full-arch cases can receive fixed temporary teeth on surgery day. It depends on infection, bone, implant stability, gum health, and your bite. Same-day teeth are usually temporary teeth while implants heal.';
export const doctorCopy = 'Dr. Sayeedi has practiced dentistry since 2001 and has fellowship training in implantology. He connects diagnosis, infection control, extractions, temporary teeth, implant position, and bite design into one plan, using 3D imaging and Yomi robotic guidance for appropriate implant cases.';
export const tech = ['3D imaging (CBCT)','Digital implant planning','Yomi robotic guidance','Temporary tooth strategy'];
export const costCopy = "Cost depends on how many teeth need care, whether any can be saved, and the replacement you choose. You'll get a personalized estimate after your exam, with insurance and financing reviewed before you commit.";
export const receipt = ['Number of failing teeth','Repair or removal','Implant, bridge, denture, or full-arch design','Grafting or preparatory care','Temporary and final materials','Sedation and complexity'];
export const insurance = ['Aetna PPO','Ameritas','Anthem','Blue Cross Blue Shield','Cigna','Dental Care USA','Denti-Cal','Guardian','Humana','MetLife','Principal','UnitedHealthcare'];
export const finalCopy = "You don't have to choose between implants, bridges, dentures, or All-on-X before your visit. Start by learning which teeth are still predictable and how your options compare.";