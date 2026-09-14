import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import BrandMark from "@/components/cleanconnect/BrandMark";
import SectionLink from "@/components/borla/SectionLink";

export default function Footer() {
  return (
    <footer className="bg-[#16352c] text-[#f7f6f0]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.75fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="CleanConnect home">
              <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#f0c66c]">
                <img src="/clean-connect-logo.webp" alt="" className="h-full w-full object-cover" />
                </span>
              <span><span className="block text-[17px] font-extrabold tracking-[-0.04em]">CleanConnect</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#b9c8bc]">Waste on schedule</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#c3d0c5]">Reliable household and business waste collection, coordinated around the way Ghanaian neighborhoods actually move.</p>
            <a href="https://wa.me/233248814260" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c66c] transition-colors hover:text-white"><MessageCircle size={16} /> WhatsApp support <ArrowUpRight size={15} /></a>
          </div>

          <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f0c66c]">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#c3d0c5]"><SectionLink href="#how" className="transition-colors hover:text-white">How it works</SectionLink><SectionLink href="#pricing" className="transition-colors hover:text-white">Pricing</SectionLink><Link href="/about" className="transition-colors hover:text-white">About CleanConnect</Link></div></div>
          <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f0c66c]">Contact</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#c3d0c5]"><span className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-[#86b59a]" /> Tarkwa and Tema, Ghana</span><a href="mailto:contact@cleanconnect.gh" className="flex items-center gap-2 transition-colors hover:text-white"><Mail size={16} className="shrink-0 text-[#86b59a]" /> contact@cleanconnect.gh</a><a href="tel:+233248814260" className="flex items-center gap-2 transition-colors hover:text-white"><Phone size={16} className="shrink-0 text-[#86b59a]" /> +233 24 881 4260</a></div></div>
          <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><p className="text-lg font-bold">A cleaner week starts with one booking.</p><SectionLink href="#pricing" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f0c66c] px-5 py-3 text-sm font-bold text-[#16352c] transition-transform hover:-translate-y-0.5">See pricing <ArrowUpRight size={16} /></SectionLink></div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-[#a9bbb0] sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CleanConnect GH</span><span>Designed for calmer streets and dependable work.</span></div>
      </div>
    </footer>
  );
}
