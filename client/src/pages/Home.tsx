import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  MessageCircle,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/borla/Navbar";
import Footer from "@/components/borla/Footer";
import { FAQS, HOW_IT_WORKS, PLANS } from "@/data/cleanconnect";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const features = [
  {
    icon: CalendarDays,
    number: "01",
    title: "A day you can plan around",
    body: "Your neighborhood gets a clear pickup window, so the bin is out and the morning keeps moving.",
  },
  {
    icon: Truck,
    number: "02",
    title: "A route you can see",
    body: "Live status updates make the collection run visible from the first stop to your street.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "A price that stays put",
    body: "Pay per pickup with MoMo or card and see the same transparent rate before you confirm.",
  },
];
const fallbackPlans = [
  {
    name: "Household",
    tag: "For weekly home pickup",
    price: "GH₵ 25",
    per: "per pickup",
    list: [
      "Weekly or bi-weekly",
      "Up to 240L bin",
      "SMS and app alerts",
      "Pause anytime",
    ],
    featured: false,
    cta: "Start with home",
  },
  {
    name: "Business",
    tag: "For shops and restaurants",
    price: "GH₵ 50",
    per: "per pickup",
    list: [
      "Twice-weekly option",
      "Up to 1,100L",
      "Priority pickup slot",
      "Receipt included",
    ],
    featured: true,
    cta: "Plan my route",
  },
  {
    name: "Commercial",
    tag: "For compounds and teams",
    price: "Custom",
    per: "per month",
    list: [
      "Custom schedule",
      "Multiple collection points",
      "Dedicated route",
      "Account support",
    ],
    featured: false,
    cta: "Talk to us",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [location] = useLocation();

  // When arriving from another page with a hash (e.g. /#pricing), scroll to it.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location]);

  const plans =
    PLANS.length === 3
      ? PLANS.map((plan, index) => ({
          ...fallbackPlans[index],
          ...plan,
          price: index === 0 ? "GH₵ 25" : index === 1 ? "GH₵ 50" : "Custom",
        }))
      : fallbackPlans;

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f6f0] text-[#16352c]">
      <Navbar />
      <main>
        <section
          id="top"
          className="relative isolate overflow-hidden border-b border-[#16352c] bg-[#0b231c] text-white"
        >
          <motion.img
            src="/hero-bg-1920.webp"
            srcSet="/hero-bg-1280.webp 1280w, /hero-bg-1920.webp 1920w, /hero-bg-2560.webp 2560w"
            sizes="100vw"
            alt=""
            fetchPriority="high"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-[62%_50%] lg:object-[50%_62%]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b231c]/85 via-[#0b231c]/70 to-[#0b231c]/90 lg:bg-linear-to-r lg:from-[#0b231c]/95 lg:from-10% lg:via-[#0b231c]/60 lg:via-45% lg:to-transparent lg:to-80%" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0b231c]/70 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1280px] flex-col px-5 sm:px-8 lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-1 flex-col justify-center py-8 lg:py-14"
            >
              <motion.p
                variants={reveal}
                className="inline-flex w-fit items-center gap-2  px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a9d6b4] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a9d6b4]" />
                </span>
                Ghana · Household &amp; business waste collection
              </motion.p>
              <motion.h1
                variants={reveal}
                className="mt-6 text-[clamp(3.25rem,14vw,4.75rem)] font-extrabold leading-[0.92] tracking-[-0.045em] sm:text-[clamp(4.75rem,8vw,6.75rem)]"
              >
                Waste day,
                <span className="block text-[#f0c66c]">sorted.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-6 max-w-md text-base leading-7 text-white/75 sm:text-lg"
              >
                Know your pickup day, track the truck to your household, office, marketplace, lorry station, street, and pay with mom
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 py-6 text-xs font-semibold text-white/70"
            >
              {[
                "Verified collectors",
                "MoMo and card payments",
                "Missed-pickup promise",
              ].map(item => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#a9d6b4]" /> {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#dfe4db] bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">
                  The everyday difference
                </p>
                <h2 className="cc-display mt-3 max-w-xl text-4xl leading-[0.95] text-[#16352c] sm:text-5xl">
                  A better waste day is mostly about knowing what to expect.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#69776e]">
                One simple system for the pickup itself, the people running it,
                and the streets we share.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-12 grid gap-3 md:grid-cols-3"
            >
              {features.map(feature => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.number}
                    variants={reveal}
                    whileHover={{ y: -5 }}
                    className="group border-t-2 border-[#dfe4db] pt-5 transition-colors hover:border-[#f07b5c]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-[#94a198]">
                        {feature.number}
                      </span>
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                        className="text-[#e77b5e] transition-transform group-hover:rotate-6"
                      />
                    </div>
                    <h3 className="mt-10 text-lg font-bold text-[#16352c]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#69776e]">
                      {feature.body}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="how"
          className="scroll-mt-[76px] border-b border-[#dfe4db] bg-[#eef2eb] px-5 py-14 sm:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">
                How it works
              </p>
              <h2 className="cc-display mt-3 text-4xl leading-[0.95] sm:text-5xl">
                Set it up once. Let the route do the remembering.
              </h2>
            </div>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={stagger}
              className="mt-12 grid gap-3 md:grid-cols-4"
            >
              {HOW_IT_WORKS.map(([number, title, description]) => (
                <motion.li
                  key={number}
                  variants={reveal}
                  className="relative border-l border-[#b9c9bc] pl-5 md:min-h-[200px]"
                >
                  <span className="font-mono text-[11px] font-bold text-[#df755b]">
                    {number}
                  </span>
                  <h3 className="mt-7 text-base font-bold text-[#16352c]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#69776e]">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section
          id="pricing"
          className="scroll-mt-[76px] border-b border-[#dfe4db] bg-white px-5 py-14 sm:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">
                  Simple rate card
                </p>
                <h2 className="cc-display mt-3 text-4xl leading-[0.95] sm:text-5xl">
                  Know the price before pickup day.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#69776e]">
                No negotiating at the gate. Choose a service that fits your
                home, business, or compound.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              variants={stagger}
              className="mt-12 grid gap-3 lg:grid-cols-3"
            >
              {plans.map(plan => (
                <motion.article
                  key={plan.name}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  className={`relative flex flex-col rounded-[22px] border p-6 ${plan.featured ? "border-[#16352c] bg-[#16352c] text-[#f7f6f0]" : "border-[#dfe4db] bg-[#f7f6f0] text-[#16352c]"}`}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#f0c66c] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#16352c]">
                      Most common
                    </span>
                  )}
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.17em] ${plan.featured ? "text-[#a9d6b4]" : "text-[#d56f55]"}`}
                  >
                    {plan.tag}
                  </p>
                  <h3 className="mt-8 text-xl font-bold">{plan.name}</h3>
                  <p className="mt-5 text-4xl font-bold tracking-[-0.05em]">
                    {plan.price}
                  </p>
                  <p
                    className={`mt-1 text-xs ${plan.featured ? "text-[#b9c9bc]" : "text-[#78867d]"}`}
                  >
                    {plan.per}
                  </p>
                  <ul
                    className={`mt-7 space-y-3 border-t pt-6 text-sm ${plan.featured ? "border-white/15 text-[#d4e0d5]" : "border-[#dfe4db] text-[#69776e]"}`}
                  >
                    {plan.list.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <Check
                          size={15}
                          className={
                            plan.featured ? "text-[#f0c66c]" : "text-[#5e9a76]"
                          }
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/233248814260"
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold ${plan.featured ? "bg-[#f0c66c] text-[#16352c]" : "border border-[#cbd7cc] text-[#16352c]"}`}
                  >
                    {plan.cta} <ArrowUpRight size={15} />
                  </a>
                </motion.article>
              ))}
            </motion.div>
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#89968d]">
              MTN MoMo · Telecel Cash · AT Money · Visa · Mastercard
            </p>
          </div>
        </section>

        <section
          id="questions"
          className="scroll-mt-[76px] border-b border-[#dfe4db] bg-[#f7f6f0] px-5 py-14 sm:px-8 lg:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">
                Questions
              </p>
              <h2 className="cc-display mt-3 text-4xl leading-[0.95] sm:text-5xl">
                The useful answers, upfront.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#69776e]">
                Still curious about routes, payments, or what happens when plans
                change? Start here.
              </p>
              <a
                href="https://wa.me/233248814260"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#16352c] underline decoration-[#f07b5c] decoration-2 underline-offset-4"
              >
                Ask our team <ArrowRight size={15} />
              </a>
            </div>
            <div className="border-t border-[#cfd8d0]">
              {FAQS.slice(0, 5).map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="border-b border-[#cfd8d0]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-[#16352c]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#e77b5e]" : "text-[#77847b]"}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#69776e]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#16352c] px-6 py-12 text-center text-[#f7f6f0] sm:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0c66c] text-[#16352c]">
                <Calendar size={22} />
              </div>
              <h2 className="cc-display mt-6 text-4xl leading-[0.95] sm:text-6xl">
                Put your waste day on the calendar.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#c1d0c3]">
                Find your route, book your first pickup, and get a calmer week
                started.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0c66c] px-6 py-3.5 text-sm font-bold text-[#16352c]"
                >
                  See pricing <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://wa.me/233248814260"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white"
                >
                  <MessageCircle size={16} /> WhatsApp the team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
