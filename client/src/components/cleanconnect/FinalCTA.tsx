// Style reminder: close with a confident field-green invitation, then a compact footer that keeps the brand grounded in Tarkwa.

import type { ReactNode } from "react";
import { toast } from "sonner";
import { NAV_ITEMS } from "@/data/cleanconnect";
import BrandMark from "./BrandMark";

function PlaceholderDownload({ children }: { children: ReactNode }) {
  return (
    <button className="cc-download-btn" type="button" onClick={() => toast.info("Store link coming soon — the app is being prepared for launch.")}>
      {children}
    </button>
  );
}

export default function FinalCTA() {
  return (
    <section className="cc-cta" id="get">
      <div className="cc-wrap">
        <div className="cc-cta-inner">
          <p className="cc-eyebrow">Get started</p>
          <h2 className="cc-h2">Set it up tonight. First pickup this week.</h2>
          <p className="cc-lede">Free to download. You only pay when a pickup is booked.</p>

          <div className="cc-btnrow">
            <PlaceholderDownload>Download for Android</PlaceholderDownload>
            <PlaceholderDownload>Download for iPhone</PlaceholderDownload>
          </div>
        </div>

        <footer className="cc-foot">
          <div className="cc-foot-in">
            <a href="#top" className="cc-brand" aria-label="CleanConnect GH home">
              <BrandMark size="sm" />
              <span>CleanConnect GH</span>
            </a>
            <nav className="cc-foot-links" aria-label="Footer navigation">
              {NAV_ITEMS.slice(0, 2).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              <a href="#get">Contact</a>
            </nav>
            <span className="cc-foot-location">Tarkwa, Ghana</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
