// Style reminder: pricing is an honest rate card — bone surfaces, dark featured plan, and gold only for the next decision.

import { PLANS } from "@/data/cleanconnect";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section className="cc-sec cc-sec-bone" id="pricing">
      <div className="cc-wrap">
        <SectionHeading
          kicker="Pricing"
          title="You see the price before anyone touches your bin."
          description="No negotiating at the gate, no different price each week."
        />

        <div className="cc-plans">
          {PLANS.map((plan) => (
            <article key={plan.name} className={plan.featured ? "cc-plan is-featured" : "cc-plan"}>
              <span className="cc-plan-tag">{plan.tag}</span>
              <h3 className="cc-plan-name">{plan.name}</h3>
              <p className="cc-plan-price">{plan.price}<br /><span>{plan.per}</span></p>
              <ul className="cc-plan-list">
                {plan.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="cc-plan-btn" href="#get">{plan.cta}</a>
            </article>
          ))}
        </div>

        <p className="cc-pay">Accepted: MTN MoMo · Telecel Cash · AT Money · Visa · Mastercard</p>
      </div>
    </section>
  );
}
