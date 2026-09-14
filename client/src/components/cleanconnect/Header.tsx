// Style reminder: navigation is a field-green utility bar with a gold action marker; keep the hierarchy crisp and the drawer calm.

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/cleanconnect";
import BrandMark from "./BrandMark";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cc-nav">
      <div className="cc-wrap">
        <div className="cc-nav-in">
          <a href="#top" className="cc-brand" aria-label="CleanConnect GH home">
            <BrandMark size="sm" />
            <span>CleanConnect</span>
          </a>

          <nav className="cc-navlinks" aria-label="Main navigation">
            {NAV_ITEMS.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <a className="cc-navcta" href="#get">Get the app</a>

          <button
            className="cc-burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div id="mobile-navigation" className={menuOpen ? "cc-drawer is-open" : "cc-drawer"}>
          {NAV_ITEMS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="#get" onClick={() => setMenuOpen(false)}>Get the app</a>
        </div>
      </div>
    </header>
  );
}
