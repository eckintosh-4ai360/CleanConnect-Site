// Style reminder: coverage is a live dispatch lookup — keep feedback immediate, plain-language, and visibly separated by state.

import { useMemo, useState } from "react";
import { AREAS } from "@/data/cleanconnect";
import SectionHeading from "./SectionHeading";

export default function CoverageChecker() {
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<(typeof AREAS)[number] | null>(null);

  const match = useMemo(() => {
    if (picked) return picked;
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 2) return null;
    return AREAS.find((area) => area.name.toLowerCase().includes(normalized)) || "miss";
  }, [query, picked]);

  const selectArea = (area: (typeof AREAS)[number]) => {
    setPicked(area);
    setQuery(area.name);
  };

  return (
    <section className="cc-sec cc-sec-field" id="coverage">
      <div className="cc-wrap cc-coverage-layout">
        <div>
          <SectionHeading
            kicker="Coverage"
            title="Find your pickup day."
            description="Type your area or tap one below."
            tone="field"
          />
          <div className="cc-check">
            <label className="cc-sr-only" htmlFor="coverage-search">Search your area</label>
            <input
              id="coverage-search"
              className="cc-input"
              type="search"
              value={query}
              placeholder="e.g. Madina, Spintex, Osu…"
              onChange={(event) => { setQuery(event.target.value); setPicked(null); }}
            />

            <div className="cc-chips" aria-label="Popular covered areas">
              {AREAS.slice(0, 6).map((area) => (
                <button
                  key={area.name}
                  className={picked?.name === area.name ? "cc-chip is-on" : "cc-chip"}
                  onClick={() => selectArea(area)}
                  type="button"
                >
                  {area.name}
                </button>
              ))}
            </div>

            {match && match !== "miss" && (
              <div className="cc-result" role="status">
                <span className="cc-result-label">Route matched</span>
                <h3 className="cc-result-h">Yes — we collect in {match.name}.</h3>
                <p className="cc-result-p">
                  Pickup is <span className="cc-result-day">{match.day}</span>, between{" "}
                  <span className="cc-result-day">{match.time}</span>. Set up in the app and your first collection can be this week.
                </p>
              </div>
            )}

            {match === "miss" && (
              <div className="cc-result is-miss" role="status">
                <span className="cc-result-label">Route check</span>
                <h3 className="cc-result-h">Not on a route there yet.</h3>
                <p className="cc-result-p">
                  Add your address in the app and we&apos;ll tell you the day it opens. Areas with enough sign-ups get a route first.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="cc-coverage-note" aria-hidden="true">
          <span className="cc-note-index">GA / 2026</span>
          <strong>10</strong>
          <span className="cc-note-caption">neighborhoods<br />on the board</span>
          <div className="cc-note-rule" />
          <span className="cc-note-footer">routes expand<br />with demand</span>
        </div>
      </div>
    </section>
  );
}
