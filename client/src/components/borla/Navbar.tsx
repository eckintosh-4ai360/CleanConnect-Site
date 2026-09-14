import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const links = [
  ["How it works", "#how"],
  ["Pricing", "#pricing"],
  ["Questions", "#questions"],
] as const;

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[#d8ddd4]/90 bg-[#f7f6f0]/95 backdrop-blur-xl"
          : "border-[#dfe4db] bg-[#f7f6f0]"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="CleanConnect home">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[14px] shadow-[0_8px_20px_rgba(22,53,44,0.14)] transition-transform duration-300 group-hover:-rotate-6">
            <img src="/clean-connect-logo.webp" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="leading-none">
            <span className="block text-[16px] font-extrabold tracking-[-0.04em] text-[#16352c]">CleanConnect</span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#708078]">Waste on schedule</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="relative py-3 text-[12px] font-semibold text-[#56645b] transition-colors hover:text-[#16352c]">{label}</a>
          ))}
          <Link href="/about" className={`py-3 text-[12px] font-semibold transition-colors hover:text-[#16352c] ${location === "/about" ? "text-[#16352c]" : "text-[#56645b]"}`}>About</Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-[#020F2F] px-5 py-3 text-[12px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#285247]">Download App <ArrowUpRight size={15} /></a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-[#16352c] px-5 py-3 text-[12px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#285247]">See pricing <ArrowUpRight size={15} /></a>
        </div>

        <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5ddd4] text-[#16352c] lg:hidden">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden border-t border-[#dfe4db] bg-[#f7f6f0] lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-[1280px] flex-col px-5 pb-6 pt-2 sm:px-8">
              {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="border-b border-[#e1e5de] py-4 text-sm font-semibold text-[#33473d]">{label}</a>)}
              <Link href="/about" onClick={closeMenu} className="border-b border-[#e1e5de] py-4 text-sm font-semibold text-[#33473d]">About</Link>
              <div className="flex flex-col gap-3 pt-5 sm:flex-row">
                <a href="#pricing" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16352c] px-5 py-3 text-sm font-bold text-white">See pricing <ArrowUpRight size={16} /></a>
                <a href="tel:+233248814260" className="inline-flex items-center justify-center rounded-full border border-[#cbd5cc] px-5 py-3 text-sm font-bold text-[#33473d]">+233 24 881 4260</a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
