// Style reminder: the steps section should feel like a printed setup sequence — four clear moves, strong rules, generous whitespace.

import { HOW_IT_WORKS } from "@/data/cleanconnect";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section className="cc-sec cc-sec-bone" id="how">
      <div className="cc-wrap">
        <SectionHeading
          kicker="How it works"
          title="Four steps, then it just runs on its own."
          description="Set it up once. After that your pickup repeats every week and you only open the app when something changes."
        />

        <ol className="cc-steps">
          {HOW_IT_WORKS.map(([number, title, description]) => (
            <li className="cc-step" key={number}>
              <span className="cc-step-n">{number}</span>
              <h3 className="cc-step-h">{title}</h3>
              <p className="cc-step-p">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
