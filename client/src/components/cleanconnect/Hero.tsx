// Style reminder: hero copy is candid and left-led; pair the dark command-center field with a warm, human Tarkwa image.

import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/data/cleanconnect";
import RouteTracker from "./RouteTracker";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section className="cc-hero" id="top">
      <div className="cc-wrap cc-hero-layout">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">Tarkwa · Household &amp; business waste</p>
          <h1 className="cc-h1">
            Your borla goes out <em>on a schedule</em> now.
          </h1>
          <p className="cc-lede">
            Book a pickup, see exactly when the truck reaches your street, and pay with MoMo.
            No more waiting all day for a collector who may not come.
          </p>

          <div className="cc-btnrow">
            <a className="cc-btn-a" href="#get">
              Get the app <ArrowIcon />
            </a>
            <a className="cc-btn-b" href="#coverage">Check my area</a>
          </div>
        </div>

        <figure className="cc-hero-media">
          <img src={ASSETS.hero} alt="Collection crew moving through a Tarkwa neighborhood at sunrise" />
          <figcaption>
            <span className="cc-photo-label">Field note  /  06:20</span>
            <span>Madina route rolling</span>
          </figcaption>
        </figure>

        <RouteTracker />
      </div>
    </section>
  );
}
