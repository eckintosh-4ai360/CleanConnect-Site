import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/borla/Navbar";
import Footer from "@/components/borla/Footer";

export default function NotFound() {
  return <div className="min-h-screen bg-[#f7f6f0] text-[#16352c]"><Navbar /><main className="flex min-h-[60vh] items-center justify-center px-5 py-20 sm:px-8"><div className="max-w-lg text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0c66c]"><MapPin size={24} /></div><p className="mt-7 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#d56f55]">Route not found</p><h1 className="cc-display mt-3 text-6xl">404</h1><p className="mt-4 text-sm leading-6 text-[#69776e]">This page is not on the map. Head back to the CleanConnect home route.</p><Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#16352c] px-5 py-3 text-sm font-bold text-white"><ArrowLeft size={16} /> Back home</Link></div></main><Footer /></div>;
}
