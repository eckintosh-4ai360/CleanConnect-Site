// CleanConnect data - navigation, content, and service configuration

export const NAV_ITEMS: [label: string, href: string][] = [
  ["How it works", "#how"],
  ["Pricing", "#pricing"],
  ["Questions", "#questions"],
];

export const ASSETS = {
  hero: "/hero-bg-1920.webp",
  logo: "/clean-connect-logo.webp",
};

export const HOW_IT_WORKS: [number: string, title: string, description: string][] = [
  [
    "1",
    "Open the app and set your location",
    "Tell us which area you're in and when you want pickups scheduled.",
  ],
  [
    "2",
    "Book your first collection",
    "Pick a time that works for you, confirm with MoMo, and wait for your pickup.",
  ],
  [
    "3",
    "Watch the truck roll up on the map",
    "Track the exact moment the collection truck reaches your street in real-time.",
  ],
  [
    "4",
    "It repeats every scheduled time",
    "After setup, your pickup happens every week at the same time. Change it anytime in the app.",
  ],
];

export const AREAS = [
  { name: "Madina", day: "Monday", time: "06:30 - 08:00" },
  { name: "Spintex", day: "Tuesday", time: "07:00 - 09:00" },
  { name: "Osu", day: "Wednesday", time: "06:00 - 07:30" },
  { name: "East Legon", day: "Thursday", time: "07:30 - 09:00" },
  { name: "Kasoa", day: "Friday", time: "08:00 - 10:00" },
  { name: "Tema", day: "Monday", time: "07:00 - 09:00" },
  { name: "Tarkwa New Town", day: "Tuesday", time: "06:30 - 08:30" },
  { name: "Achimota", day: "Wednesday", time: "07:00 - 08:30" },
];

export const PLANS = [
  {
    name: "Household",
    tag: "Most common",
    price: "₵25",
    per: "per pickup",
    featured: false,
    list: ["Weekly or bi-weekly", "Up to 240L bin", "SMS & app alerts", "Anytime cancellation"],
    cta: "Get started",
  },
  {
    name: "Business",
    tag: "For shops & restaurants",
    price: "₵50",
    per: "per pickup",
    featured: true,
    list: ["Twice weekly option", "Up to 1,100L", "Priority pickup slot", "Invoice & tax receipt", "24/7 support"],
    cta: "Get started",
  },
  {
    name: "Commercial",
    tag: "For compounds",
    price: "Custom",
    per: "per month",
    featured: false,
    list: ["Daily or custom schedule", "Large bin or multiple", "Dedicated route", "Account manager", "Bulk discount"],
    cta: "Contact sales",
  },
];

export const FAQS = [
  {
    q: "What if I'm not home when the truck arrives?",
    a: "The truck comes during your booked window (usually 30-60 min), and you'll get an SMS and push notification 15 minutes before they arrive. If you're not ready, reschedule in the app for a future date.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept MTN MoMo, Telecel Cash, AT Money, and card payments (Visa/Mastercard). Pay right in the app when you book, or add a payment method for recurring pickups.",
  },
  {
    q: "Can I change my pickup schedule?",
    a: "Yes. Change your schedule, pause, or resume anytime in the app without penalty. One-time pickups are also available if you skip a week.",
  },
  {
    q: "What happens if a collector doesn't show up?",
    a: "You'll be refunded immediately. You can also reschedule right away, and our support team will investigate the missed pickup to make sure it doesn't happen again.",
  },
  {
    q: "What can I put in the bin?",
    a: "General household waste, food waste, plastics, and paper. We don't collect hazardous materials, construction debris, or large appliances. Ask us if you're unsure.",
  },
  {
    q: "How do you decide collection routes?",
    a: "We map neighborhoods geographically and collect by day. Your route is set when you book, but you can change your collection day if needed for a small fee.",
  },
];

export const COLLECTOR_FACTS: [label: string, value: string][] = [
  ["Pickup per route", "15-20"],
  ["Earnings per day", "₵150-250"],
  ["Weekly settlement", "Every Friday"],
  ["Fuel subsidy", "Included"],
];

export const STOPS = [
  {
    time: "06:35",
    name: "Madina Junction",
    note: "3 pickups",
    done: true,
  },
  {
    time: "06:50",
    name: "Madina Zongo",
    note: "2 pickups",
    done: true,
  },
  {
    time: "07:10",
    name: "Abeka Lapaz",
    note: "5 pickups",
    done: true,
  },
  {
    time: "07:35",
    name: "Madina Station",
    note: "2 pickups",
    done: false,
  },
  {
    time: "08:00",
    name: "Madina Estate",
    note: "4 pickups",
    done: false,
  },
];
