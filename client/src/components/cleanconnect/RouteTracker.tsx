// Style reminder: the route rail is the signature motif — a live field note that makes service status tangible.

import { STOPS } from "@/data/cleanconnect";

export default function RouteTracker() {
  return (
    <div className="cc-route" aria-label="Today's live collection route">
      <div className="cc-route-head">
        <p className="cc-route-title">Route GA-04 · today</p>
        <span className="cc-live"><span className="cc-dot" />Live</span>
      </div>

      <div className="cc-track">
        <div className="cc-rail">
          <div className="cc-line" />
          <div className="cc-truck" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M1 4h8v7H1zM9 6.5h3l2 2.2V11H9z" stroke="#0B1F19" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="4" cy="12.4" r="1.5" fill="#0B1F19" />
              <circle cx="11.5" cy="12.4" r="1.5" fill="#0B1F19" />
            </svg>
          </div>

          <ul className="cc-stops">
            {STOPS.map((stop, index) => (
              <li key={stop.name} className={stop.done ? "cc-stop is-done" : "cc-stop"}>
                <div className="cc-pin" style={{ animationDelay: `${0.5 + index * 0.16}s` }} />
                <span className="cc-stop-time">{stop.time}</span>
                <span className="cc-stop-name">{stop.name}</span>
                <span className="cc-stop-note">{stop.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
