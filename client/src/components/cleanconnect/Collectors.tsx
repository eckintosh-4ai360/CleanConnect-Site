// Style reminder: the collector section is human and capable — pair a local working portrait with a concise operational fact list.

import { COLLECTOR_FACTS } from "@/data/cleanconnect";
import ArrowIcon from "./ArrowIcon";
import SectionHeading from "./SectionHeading";

export default function Collectors() {
  return (
    <section className="cc-sec cc-sec-mid" id="collectors">
      <div className="cc-wrap cc-split">
        <div className="cc-collector-copy">
          <SectionHeading
            kicker="For collectors"
            title="Drive an aboboya? Fill your route."
            description="Most collectors spend half the morning looking for the next customer. CleanConnect hands you a built route, tells you who has already paid, and settles to your MoMo wallet the same week."
            tone="field"
          />
          <div className="cc-btnrow">
            <a className="cc-btn-a" href="#get">Join as a collector <ArrowIcon /></a>
          </div>
        </div>

        <div className="cc-collector-visual">
          <div className="cc-image-caption"><span>Collector log / bin 240L</span><strong>Built routes. Paid stops.</strong></div>
        </div>

        <div className="cc-facts">
          {COLLECTOR_FACTS.map(([label, value]) => (
            <div className="cc-fact" key={label}>
              <span className="cc-fact-k">{label}</span>
              <span className="cc-fact-v">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SectionHeading };
