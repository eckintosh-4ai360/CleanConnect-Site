// Style reminder: answers should feel like a calm operations desk — clear, candid, and easy to scan.

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/cleanconnect";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="cc-sec cc-sec-bone" id="questions">
      <div className="cc-wrap">
        <SectionHeading kicker="Questions" title="The things people ask before signing up." />

        <div className="cc-faq">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className="cc-faq-item" key={faq.q}>
                <button
                  className="cc-q"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  type="button"
                >
                  <span>{faq.q}</span>
                  <Plus className="cc-q-sign" aria-hidden="true" size={20} />
                </button>
                <div className={isOpen ? "cc-a-wrap is-open" : "cc-a-wrap"} id={answerId}>
                  <p className="cc-a">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
