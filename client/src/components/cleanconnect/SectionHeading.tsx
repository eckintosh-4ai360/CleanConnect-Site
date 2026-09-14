// Style reminder: section headings use mono operational labels, bold display type, and short readable subheads.

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  tone?: "bone" | "field";
};

export default function SectionHeading({ kicker, title, description, tone = "bone" }: SectionHeadingProps) {
  return (
    <div className={`cc-section-heading cc-section-heading-${tone}`}>
      <p className="cc-kicker">{kicker}</p>
      <h2 className="cc-h2">{title}</h2>
      {description && <p className="cc-sub">{description}</p>}
    </div>
  );
}
