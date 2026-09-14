import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Sparkles,
  Target,
  Truck,
  Users,
} from "lucide-react";
import Navbar from "@/components/borla/Navbar";
import Footer from "@/components/borla/Footer";
import SectionLink from "@/components/borla/SectionLink";

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

const story = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Uncertainty was the default",
    body: "Across Ghanaian communities, households and businesses learned to work around collection that never had a clear time. A bin went out early, a truck arrived whenever it did, and everyone kept one eye on the street.",
  },
  {
    icon: Truck,
    number: "02",
    title: "The route became the answer",
    body: "CleanConnect began with a straightforward idea: organize the route, show the window, make payment simple, and treat the collector as a partner in the system.",
  },
  {
    icon: Users,
    number: "03",
    title: "One neighborhood at a time",
    body: "We are starting with the neighborhoods we know, learning from the people who live and work there, and expanding one dependable route at a time.",
  },
];

const values = [
  { icon: Target, title: "Reliability is a service", body: "A pickup window should be something a family or a shop can actually plan the day around." },
  { icon: HeartHandshake, title: "Collectors deserve clarity", body: "We make routes, payments, and expectations clearer for the people doing the work." },
  { icon: Leaf, title: "Clean streets are shared work", body: "Better coordination makes the healthier choice easier for every neighborhood." },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f6f0] text-[#16352c]"><Navbar /><main>
      <section className="relative isolate overflow-hidden border-b border-[#16352c] bg-[#0b231c] text-white">
        <motion.img
          src="/hero-bg-1920.webp"
          srcSet="/hero-bg-1280.webp 1280w, /hero-bg-1920.webp 1920w, /hero-bg-2560.webp 2560w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b231c]/90 via-[#0b231c]/80 to-[#0b231c]/94" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0b231c]/70 to-transparent" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col px-5 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-4xl text-center">
            <p className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a9d6b4] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a9d6b4]" />
              </span>
              Our point of view
            </p>
            <h1 className="mt-7 text-[clamp(3.25rem,9vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
              A cleaner city starts with{" "}
              <span className="text-[#f0c66c]">better coordination.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              CleanConnect is building the everyday infrastructure that makes
              waste collection feel dependable, visible, and worth trusting.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto mt-14 grid w-full max-w-6xl gap-3 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[340px] overflow-hidden rounded-[26px] bg-[#dfe8dc] sm:min-h-[420px]">
              <img
                src="/about bins.png"
                alt="Clean public space in a Ghanaian city"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#16352c]/24" />
              <div className="absolute bottom-5 left-5 rounded-full bg-[#f7f6f0]/90 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-[#16352c]">
                Built for the everyday
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[26px] bg-[#f0c66c] p-7 sm:p-9">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#755e20]">The short version</p>
                <p className="cc-display mt-9 text-4xl leading-[0.94] text-[#16352c]">
                  Less guesswork for homes. More dignity for the people keeping
                  them clean.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-[#af922f]/50 pt-5 text-sm font-semibold text-[#5e572f]">
                <Users size={18} /> Local routes, designed around real streets
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="relative mx-auto mt-12 flex w-full max-w-6xl flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold text-white/70"
          >
            {["Routes you can see", "Flat, honest pricing", "Collectors as partners"].map(item => (
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
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">Why we started</p>
              <h2 className="cc-display mt-3 max-w-xl text-4xl leading-[0.95] sm:text-5xl">Waste collection should not be a daily mystery.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#69776e]">
              One honest look at how the work actually gets done — and what
              CleanConnect is changing about it.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-12 grid gap-3 md:grid-cols-3"
          >
            {story.map(item => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.number}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  className="group border-t-2 border-[#dfe4db] pt-5 transition-colors hover:border-[#f07b5c]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-[#94a198]">{item.number}</span>
                    <Icon size={21} strokeWidth={1.6} className="text-[#e77b5e] transition-transform group-hover:rotate-6" />
                  </div>
                  <h3 className="mt-10 text-lg font-bold text-[#16352c]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#69776e]">{item.body}</p>
                </motion.article>
              );
            })}
          </motion.div>
          <SectionLink
            href="#pricing"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#16352c] underline decoration-[#f07b5c] decoration-2 underline-offset-4"
          >
            See plans & pricing <ArrowRight size={16} />
          </SectionLink>
        </div>
      </section>
      <section className="border-b border-[#dfe4db] bg-[#eef2eb] px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">What guides us</p>
            <h2 className="cc-display mt-3 text-4xl leading-[0.95] sm:text-5xl">The work is logistical. The impact is human.</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-12 grid gap-3 md:grid-cols-3"
          >
            {values.map(({ icon: Icon, title, body }, index) => (
              <motion.article
                key={title}
                variants={reveal}
                whileHover={{ y: -5 }}
                className="group border-t-2 border-[#c4d1c6] pt-5 transition-colors hover:border-[#f07b5c]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#94a198]">0{index + 1}</span>
                  <Icon size={21} strokeWidth={1.6} className="text-[#e77b5e] transition-transform group-hover:rotate-6" />
                </div>
                <h3 className="mt-10 text-lg font-bold text-[#16352c]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#69776e]">{body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#16352c] px-6 py-12 text-center text-[#f7f6f0] sm:px-12">
          <Sparkles className="mx-auto text-[#f0c66c]" size={25} />
          <h2 className="cc-display mt-6 text-4xl leading-[0.95] sm:text-6xl">Ready for a more predictable week?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#c1d0c3]">
            Find your neighborhood route and see what CleanConnect can take off
            your plate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <SectionLink href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0c66c] px-6 py-3.5 text-sm font-bold text-[#16352c]">
              See pricing <ArrowUpRight size={17} />
            </SectionLink>
            <SectionLink href="#how" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white">
              How it works <ArrowRight size={17} />
            </SectionLink>
          </div>
        </div>
      </section>
    </main><Footer /></div>
  );
}
