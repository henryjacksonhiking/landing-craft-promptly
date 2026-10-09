export const booking = {
  url: "https://bookit.dentrixascend.com/soe/new/dental?pid=ASC64000000021387&mode=externalLink",
  phone: "(510) 493-2130",
  phoneUrl: "tel:+15104932130",
  directions: "https://www.google.com/maps/search/?api=1&query=34603+Alvarado-Niles+Rd+Union+City+CA+94587",
  haywardImplantsPageLive: false,
  submissionsConnected: false,
};
export function track(event: string, details: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...details });
}
